<script>
import {ref, onMounted} from 'vue';
import $ from 'jquery';
import 'datatables.net';

export default {

  setup() {
    const currentTab = ref('towns');
    const currentRecordId = ref(null);
    const formData = ref({});

    const loadTable = (tab) => {
      currentTab.value = tab; // оновлюємо значення поточної таблиці на вибраний таб

      fetch(`/api/${currentTab.value}/all`)
          .then(response => response.json())
          .then(data => {
            $(document).ready(function () {
              $('#adminTable').DataTable();
            });
            // Очистити контейнер таблиці перед оновленням
            const tableContainer = document.getElementById('tableContainer');
            tableContainer.innerHTML = '';

            // Створити таблицю
            const table = document.createElement('table');
            table.id = 'adminTable';
            table.className = 'display';
            table.style.width = '100%';

            // Додати заголовок таблиці
            let header = '<thead><tr>';
            for (let key in data[0]) {
              header += `<th>${key}</th>`;
            }
            header += '<th>Actions</th></tr></thead>';
            table.innerHTML += header;

            // Додати дані таблиці
            const tbody = document.createElement('tbody');
            data.forEach(row => {
              const tr = document.createElement('tr');
              for (let key in row) {
                const td = document.createElement('td');
                td.textContent = (typeof row[key] === 'object' && row[key].id !== undefined) ? row[key].id : row[key];
                tr.appendChild(td);
              }
              const actionTd = document.createElement('td');

              const deleteBtn = document.createElement('button');
              deleteBtn.className = 'small-button ligth w-button delete-btn';
              deleteBtn.textContent = 'Delete';
              actionTd.appendChild(deleteBtn);
              tr.appendChild(actionTd);
              tbody.appendChild(tr);
            });
            table.appendChild(tbody);

            // Додати таблицю до контейнера
            tableContainer.appendChild(table);




            document.querySelectorAll('.delete-btn').forEach(deleteBtn => {
              deleteBtn.addEventListener('click', function () {
                const row = this.closest('tr');
                const id = row.querySelector('td:first-child').textContent; // Припускається, що перший стовпець містить ID
                deleteRow(id);
              });
            });
          })
          .catch(error => {
            console.error('Помилка при отриманні даних:', error);
          });
    };
    const onTabClick = (event) => {
      const tab = event.target.getAttribute('data-tab');
      loadTable(tab);
      showCreateForm();
    };


    /*const editRow = id => {
      currentRecordId.value = id; // Встановлення значення currentRecordId
      fetch(`/api/${currentTab.value}/${id}`)
          .then(response => response.json())
          .then(record => {
            let formHtml = '';
            for (let key in record) {
              formHtml += `<label for="${key}">${key}</label>`;
              formHtml += `<input type="text" id="${key}" name="${key}" value="${record[key]}"><br>`;
            }
            formHtml += '<button class="button small" onclick="updateRecord()">Save</button>';
            document.getElementById('editForm').innerHTML = formHtml;
            document.getElementById('editFormContainer').style.display = 'block';
          })
          .catch(error => {
            console.error('Помилка при отриманні запису для редагування:', error);
          });
    };*/

    const showFieldsOfRow = () => {
      document.getElementById('editForm').querySelectorAll('input').forEach(input => {
        const inputName = input.getAttribute('name');
        const inputValue = input.value;
        if (inputName.endsWith('_id')) {
          formData.value[inputName] = {id: inputValue};
        } else {
          formData.value[inputName] = inputValue;
        }
      });
    };

    const updateRecord = () => {
      showFieldsOfRow();

      fetch(`/api/${currentTab.value}/${currentRecordId.value}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value)
      })
          .then(response => {
            if (response.ok) {
              console.log('Запис успішно оновлено');
            } else {
              console.error('Помилка при оновленні запису');
            }
          })
          .catch(error => {
            console.error('Помилка при виконанні запиту:', error);
          });
    };

    const deleteRow = id => {
      fetch(`/api/${currentTab.value}/${id}`, {
        method: 'DELETE'
      })
          .then(() => {
            loadTable(currentTab.value); // Перезавантажити таблицю після видалення
          })
          .catch(error => {
            console.error('Помилка при видаленні запису:', error);
          });
    };

    const choseTable = () => {
      loadTable();
      showCreateForm();
    };

    const showCreateForm = () => {
      fetch(`/api/${currentTab.value}/all`)
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              const record = data[0];
              let formHtml = '<form id="createForm">';
              for (let key in record) {
                if (key !== 'id') {
                  formHtml += `<label for="${key}">${key}</label>`;
                  formHtml += `<input type="text" id="${key}" name="${key}" class="text-field w-input " ><br>`;
                }
              }
              formHtml += '</form>';
              formHtml += '<button id="createButton" class="button small" style="margin: 5px" >Save</button>';
              document.getElementById('createFormContainer').innerHTML = formHtml;
              document.getElementById('createButton').addEventListener('click', function () {
                createRecord();});
              document.getElementById('createFormContainer').style.display = 'block';
            }
          })
          .catch(error => {
            console.error('Помилка при отриманні даних для створення запису:', error);
          });
    };

    const createRecord = () => {
      fetch(`/api/${currentTab.value}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
          .then(response => {
            if (response.ok) {
              console.log('Запис успішно створено');
            } else {
              console.error('Помилка при створенні запису');
            }
          })
          .catch(error => {
            console.error('Помилка при виконанні запиту:', error);
          });
    };

    onMounted(() => {
      loadTable('towns');
      showCreateForm();
// початкове завантаження таблиці з першим табом
    });

    return {
      choseTable,
      createRecord,
      updateRecord,
      onTabClick,
      deleteRow
    };
  }
};

</script>

<template>
  <div>
    <div class="section black-gradient">
      <h4 class="heading-9">Панель керування адміністратора</h4>
    </div>
    <div class="section light-grey">
      <div class="container">
          <div class="terms-card">
            <div class="content-center">
          <ul class="nav nav-tabs position-relative" id="tables" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link active"
                  id="towns"
                  data-tab="towns"
                  value="towns"
                  data-bs-toggle="tab"
                  data-bs-target="#all-posts"
                  type="button"
                  @click="onTabClick($event)"
                  >
                Towns
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link"
                  id="categories"
                  data-tab="categories"
                  value="categories"
                  data-bs-toggle="tab"
                  type="button"
                  aria-selected="false"
                  @click="onTabClick($event)">
                Categories
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link"
                  id="specialists"
                  data-tab="specialists"
                  data-bs-toggle="tab"
                  type="button"
                  aria-selected="false"
                  @click="onTabClick($event)">
                Specialists
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link"
                  id="tasks"
                  data-bs-toggle="tab"
                  type="button"
                  aria-selected="false"
                  data-tab="tasks"
                  @click="onTabClick($event)">
                Tasks
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link"
                  id="reviews"
                  data-tab="reviews"
                  data-bs-toggle="tab"
                  type="button"
                  aria-selected="false"
                  @click="onTabClick($event)">
                Reviews
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link"
                  id="projects"
                  data-tab="projects"
                  data-bs-toggle="tab"
                  type="button"
                  aria-selected="false"
                  @click="onTabClick($event)">
                Projects
              </button>
            </li>
          </ul>

            </div>
          <div class="w-row">
            <div class="w-col w-col-6">
              <section>
                <div id="tableContainer" class="table-container"></div>
                <table id="adminTable" class="display" style="width:100%">
                  <thead>
                  <tr>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  </tr>
                  </tbody>
                </table>
                <div id="editFormContainer" style="display:none;">
                  <h2>Edit Record</h2>
                  <form id="editForm">
                    <!-- Динамічні текстові поля будуть додані сюди -->
                  </form>
                </div>
              </section>
            </div>
            <div class="w-col w-col-6">
              <div class="w-form" id="createFormContainer" style="display:none;">
                <form id="createForm">
                  <a
                      href="#" class="small-button w-button">Створити</a>
                  <button onclick="createRecord()">Create</button>
                  <button onclick="cancelCreate()">Cancel</button>
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://assets-global.website-files.com/6610606930da13b8a528a088/css/priborzhavsky-lyceum-news.webflow.8f0c4ae76.css');
@import url('https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css');

.heading-9 {
  color: black;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  width: 450px;
  height: 70px;

  text-align: center;
}

.section {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.terms-card {
  margin-top: -100px;
  min-width: 1200px;
}
.content-center{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.light-grey{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
}


</style>

