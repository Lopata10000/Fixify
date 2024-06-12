<script>
import {ref, onMounted} from 'vue';
import $ from 'jquery';
import Swal from 'sweetalert2';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';
import axios from 'axios';

export default {
  data() {
    return {
      showModal: true
    }
  },
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
            showErrorMessage(error);
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
      table.className = 'display table-auto w-full border-collapse border border-gray-300 rounded-lg';
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
      let header = '<thead class="bg-blue-200"><tr>';
      for (let key in rowData) {
        header += `<th>${key}</th>`;
      }
      header += '<th>Actions</th></tr></thead>';
      return header;
    };
    const initializeSelect2 = () => {
      $('.form-dropdown').select2();
    }
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
      deleteImg.className = 'delete-icon justify-end';
      deleteImg.height = 20;
      deleteImg.width = 20;

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
          confirmDelete(id);
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
              showSuccessMessage()
            } else {
              showErrorMessage()

            }
          })
          .catch(error => {
            showErrorMessage(error)
          });
    };

    const deleteRow = id => {
      fetch(`/api/${currentTab.value}/${id}`, {
        method: 'DELETE'
      })
          .then(() => {
            showSuccessMessage();
            loadTable(currentTab.value);
          })

          .catch(error => {
            showErrorMessage(error)
          });
    };
    const confirmDelete = (id) => {
      Swal.fire({
        title: 'Ви впевнені?',
        text: "Після видалення цього запису всі інші записи, що мають посилання на нього, також будуть видалені.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Так, видалити!',
        cancelButtonText: 'Відмінити'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteRow(id);
        }
      });
    };

    const createRecord = async () => {
      try {
        const formData = new FormData(document.getElementById('createForm'));
        const postData = {};
        for (const [key, value] of Object.entries(Object.fromEntries(formData.entries()))) {
          postData[key] = value;
        }

        const response = await axios.post(`/api/${currentTab.value}`, postData, {
          returnPromise: false
        });

        if (response.status === 200) {
          showSuccessMessage();

        } else {
          showErrorMessage();
        }
      } catch (error) {
        showErrorMessage(error);
      }
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
          } else {
            initialRecordId = row[key];

          }
        }
      } catch (error) {
        showErrorMessage(error)
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
              if (key.endsWith('Id')) {
                // Створіть select для полів з приставкою Id
                formHtml += `<label for="${key}">${key}</label>`;
                formHtml += `<select id="${key}" name="${key}" class="form-dropdown w-select w-[300px]">`;
                let endpoint = `/api/${key}`;

                if (key === 'categoryId') {
                  endpoint = '/api/categories';
                } else {
                  endpoint = `/api/${key.replace('Id', 's')}`;
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
                formHtml += `</select>`;
              } else {
                // Створіть input для інших полів
                formHtml += `<div class="field-block">`;
                formHtml += `<label class="lableField" for="${key}" >${key}</label>`;
                formHtml += `<input style="margin-top: 0px; margin-bottom: 10px" type="text" id="${key}" name="${key}" class="text-field w-input" value="${record[key]}">`;
                formHtml += `</div>`;

              }
            }
          }
          formHtml += `<div class="flex justify-center space-x-4 mt-4">`;
          formHtml += '<button id="createButton"  class="button small" style="margin: 5px">Save</button>';
          formHtml += '<button id="updateButton"  class="button small" style="margin: 5px">Update</button>';
          formHtml += `</div>`;
          formHtml += '</form>';
          document.getElementById('createFormContainer').innerHTML = formHtml;
          document.getElementById('createButton').addEventListener('click', createRecord);
          document.getElementById('updateButton').addEventListener('click', updateRecord);
          document.getElementById('createFormContainer').style.display = 'block';
        }
      } catch (error) {
       showErrorMessage(error);
      }
    };
    const showSuccessMessage = () => {
      Swal.fire({
        title: 'Зміни у таблиці виконані',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
    const showErrorMessage = () => {
      Swal.fire({
        title: 'Невірні дані',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

    onMounted(() => {
      loadTable('towns');
      showCreateForm();
      initializeSelect2();
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
    <div class="section black-gradient ">
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
              </li>
              <li class="nav-item" role="presentation">
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
            <div class="w-col w-col-6 w-3/5">
              <div id="tableContainer" class=" overflow-x-auto  "></div>
              <table id="adminTable" class="table-auto w-full border-collapse border border-gray-300 rounded-lg" >
                <thead class="bg-blue-200">
                <tr>
                </tr>
                </thead>
                <tbody>
                <tr>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="content-center">
              <div class="create-form" id="createFormContainer">

              </div>
              <div v-if="showModal" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class = "modal-header">
                      <h5 class="modal-title">Модальне вікно</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Цей текст буде відображатися у модальному вікні.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрити</button>
                      <button type="button" class="btn btn-primary">Зберегти зміни</button>
                    </div>
                  </div>
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

.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.light-grey {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;

}

.create-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-row{
  margin-top: 40px;
}
.section.black-gradient{
  margin-bottom: 0px;
  margin-top: 0px;
}




</style>

