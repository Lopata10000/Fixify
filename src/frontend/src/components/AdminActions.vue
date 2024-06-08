<script>
import {ref, onMounted} from 'vue';
import $ from 'jquery';
import 'datatables.net';

export default {

  setup() {
    const currentTab = ref('towns');
    let initialRecordId = ref(null);

    const loadTable = (tab) => {
      currentTab.value = tab; // оновлюємо значення поточної таблиці на вибраний таб

      // Завантаження даних з сервера
      fetch(`/api/${currentTab.value}/all`)
          .then(response => response.json())
          .then(data => {
            // Викликаємо DataTables при завантаженні нових даних
            $(document).ready(function () {
              $('#adminTable').DataTable();
            });

            // Очистка контейнера таблиці перед оновленням
            clearTableContainer();

            // Створення таблиці
            const table = createTable(data);

            // Додавання таблиці до контейнера
            appendTableToContainer(table);

            // Додавання обробника подій для видалення рядків
            addDeleteRowHandler();
          })
          .catch(error => {
            console.error('Помилка при отриманні даних:', error);
          });
    };

// Функція для очищення контейнера таблиці
    const clearTableContainer = () => {
      const tableContainer = document.getElementById('tableContainer');
      tableContainer.innerHTML = '';
    };

// Функція для створення таблиці на основі даних
    const createTable = (data) => {
      const table = document.createElement('table');
      table.id = 'adminTable';
      table.className = 'display';
      table.style.width = '100%';

      // Додавання заголовка таблиці
      const header = createTableHeader(data[0]);
      table.innerHTML += header;

      // Додавання даних таблиці
      const tbody = createTableBody(data);
      table.appendChild(tbody);

      return table;
    };

// Функція для створення заголовка таблиці
    const createTableHeader = (rowData) => {
      let header = '<thead><tr>';
      for (let key in rowData) {
        header += `<th>${key}</th>`;
      }
      header += '<th>Actions</th></tr></thead>';
      return header;
    };

// Функція для створення тіла таблиці
    const createTableBody = (data) => {
      const tbody = document.createElement('tbody');
      data.forEach(row => {
        const tr = document.createElement('tr');
        tr.addEventListener('click', () => rowClickHandler(row));
        for (let key in row) {
          const td = document.createElement('td');
          td.textContent = (typeof row[key] === 'object' && row[key].id !== undefined) ? row[key].id : row[key];
          tr.appendChild(td);
        }
        const actionTd = createDeleteAction();
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
      });
      return tbody;
    };

// Функція для створення кнопки видалення рядка
    const createDeleteAction = () => {
      const actionTd = document.createElement('td');
      const deleteImg = document.createElement('img');
      deleteImg.src = '/image/delete.png';
      deleteImg.className = 'delete-icon';
      deleteImg.height = 40;
      deleteImg.width = 40;
      actionTd.appendChild(deleteImg);
      return actionTd;
    };

// Функція для додавання таблиці до контейнера
    const appendTableToContainer = (table) => {
      const tableContainer = document.getElementById('tableContainer');
      tableContainer.appendChild(table);
    };

// Функція для додавання обробника подій для видалення рядків
    const addDeleteRowHandler = () => {
      document.querySelectorAll('.delete-icon').forEach(deleteImg => {
        deleteImg.addEventListener('click', function () {
          const row = this.closest('tr');
          const id = row.querySelector('td:first-child').textContent; // Припускається, що перший стовпець містить ID
          deleteRow(id);
        });
      });
    };

    const onTabClick = (event) => {
      const tab = event.target.getAttribute('data-tab');
      loadTable(tab);
      showCreateForm();
    };


    const updateRecord = () => {
      const formData = new FormData(document.getElementById('createForm'));
      const postData = {};
      for (const [key, value] of Object.entries(Object.fromEntries(formData.entries()))) {
        postData[key] = value;
      }
      fetch(`/api/${currentTab.value}/${initialRecordId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData),
      })
          .then(response => {
            if (response.ok) {
              console.log('Запис успішно оновлено');
              loadTable(currentTab.value); // Перезавантажити таблицю після видалення
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


    const createRecord = async () => {
      try {
        const formData = new FormData(document.getElementById('createForm'));
        const postData = {};
        for (const [key, value] of Object.entries(Object.fromEntries(formData.entries()))) {
          postData[key] = value;
        }

        const response = await fetch(`/api/${currentTab.value}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData),
        });

        if (response.ok) {
          console.log('Запис успішно створено');
        } else {
          console.error('Помилка при створенні запису');
        }
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
      // loadTable(currentTab.value)
    }
    const rowClickHandler = (row) => {
      setFormValues(row);
    };
    const setFormValues = (row) => {

      try {
        const createForm = document.getElementById('createForm');
        for (let key in row) {
          if (key !== 'id') {
            const inputField = createForm.querySelector(`#${key}`);
            if (inputField) {
              inputField.value = (typeof row[key] === 'object' && row[key].id !== undefined) ? row[key].id : row[key];
            }
          }
          else {
            initialRecordId = row[key];

          }
        }
      } catch (error) {
        console.error('Помилка при встановленні значень у поля вводу форми:', error);
      }
    };
    const showCreateForm = async () => {
      try {
        const response = await fetch(`/api/${currentTab.value}/all`);
        const data = await response.json();

        if (data.length > 0) {
          const record = data[0];
          let formHtml = '<form id="createForm">';
          for (let key in record) {
            if (key !== 'id') {
              if (key.endsWith('_id')) {
                // Створіть select для полів з приставкою _id
                formHtml += `<label for="${key}">${key}</label>`;
                formHtml += `<select id="${key}" name="${key}" class="form-dropdown w-select">`;
                let endpoint = `/api/${key}`;

                if (key === 'category_id') {
                  endpoint = '/api/categories';
                } else {
                  endpoint = `/api/${key.replace('_id', 's')}`;
                }
                const optionsResponse = await fetch(endpoint + '/all');
                const optionsData = await optionsResponse.json();
                optionsData.forEach((option) => {
                  let optionText = '';
                  // Перевіряємо, чи значення є об'єктом
                  if (typeof option === 'object') {
                    // Якщо значення є об'єктом, виводимо всі його значення
                    for (let nestedKey in option) {
                      // Якщо внутрішнє значення є об'єктом і має id, виводимо його id
                      if (typeof option[nestedKey] === 'object') {
                        optionText += `${nestedKey}: ${option[nestedKey].id}, `;
                      } else {
                        optionText += `${nestedKey}: ${option[nestedKey]}, `;
                      }
                    }
                  } else {
                    optionText = option;
                  }
                  formHtml += `<option value="${option.id}">${optionText}</option>`;
                });
                formHtml += `</select><br>`;
              } else {
                // Створіть input для інших полів
                formHtml += `<label for="${key}">${key}</label>`;
                formHtml += `<input type="text" id="${key}" name="${key}" class="text-field w-input" value="${record[key]}"><br>`;
              }
            }
          }
          formHtml += '</form>';
          formHtml += '<button id="createButton" class="button small" style="margin: 5px" >Save</button>';
          formHtml += '<button id="updateButton" class="button small" style="margin: 5px" >Update</button>';
          document.getElementById('createFormContainer').innerHTML = formHtml;
          document.getElementById('createButton').addEventListener('click', createRecord);
          document.getElementById('updateButton').addEventListener('click', updateRecord);
          document.getElementById('createFormContainer').style.display = 'block';
        }
      } catch (error) {
        console.error('Помилка при отриманні даних для створення запису:', error);
      }
    };


    onMounted(() => {
      loadTable('towns');
      showCreateForm();
    });

    return {
      createRecord,
      updateRecord,
      onTabClick,
      deleteRow
    };
  }
};

</script>

<template>
  <section>
    <div class="section black-gradient">
      <div class="content-center">
      <h4 class="heading-9">Панель керування адміністратора</h4>
      </div>
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
                  @click="onTabClick($event)">
                Towns
              </button>
            </li> <li class="nav-item" role="presentation">
              <button
                  class="nav-link"
                  id="users"
                  data-tab="users"
                  value="users"
                  data-bs-toggle="tab"
                  data-bs-target="#all-posts"
                  type="button"
                  @click="onTabClick($event)">
                Users
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
                <div id="tableContainer" class="max-w overflow-x-auto table table-striped table-bordered"></div>
                <table id="adminTable" class="display" >
                  <thead>
                  <tr>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  </tr>
                  </tbody>
                </table>
            </div>
            <div class="w-col w-col-6">
              <div class="w-form" id="createFormContainer" style="display:none;">
                <form id="createForm">
                  <a
                      href="#" class="small-button w-button">Створити</a>
                  <button onclick="createRecord()">Create</button>
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
  </section>
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

.terms-card {
  margin-top: -120px;
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

}


</style>

