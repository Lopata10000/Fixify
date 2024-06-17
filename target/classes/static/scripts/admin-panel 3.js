var currentTable = '';
var currentRecordId = null;

// Функція loadTable()
function loadTable() {
    currentTable = $('#tableSelector').val();
    $.get(`/api/${currentTable}/all`, function (data) {
        // Очистити контейнер таблиці перед оновленням
        $('#tableContainer').empty();

        // Створити таблицю
        var table = $('<table id="example" class="display" style="width:100%"></table>');

        // Додати заголовок таблиці
        var header = '<thead><tr>';
        for (var key in data[0]) {
            header += '<th>' + key + '</th>';
        }
        header += '<th>Actions</th></tr></thead>';
        table.append(header);

        // Додати дані таблиці
        var tbody = $('<tbody></tbody>');
        data.forEach(function (row) {
            var tr = $('<tr></tr>');
            for (var key in row) {
                tr.append('<td>' + row[key] + '</td>');
            }
            tr.append('<td><button class="small-button ligth w-button edit-btn">Edit</button> <button class="small-button ligth w-button delete-btn">Delete</button></td>');
            tbody.append(tr);
        });
        table.append(tbody);

        // Додати таблицю до контейнера
        $('#tableContainer').append(table);

        $(document).ready(function() {
            $('#example').DataTable();
        } );

        // Налаштувати події для кнопок редагування та видалення
        $('.edit-btn').click(function() {
            var row = $(this).closest('tr');
            var id = row.find('td:first-child').text(); // Припускається, що перший стовпець містить ID
            editRow(id);
        });

        $('.delete-btn').click(function() {
            var row = $(this).closest('tr');
            var id = row.find('td:first-child').text(); // Припускається, що перший стовпець містить ID
            deleteRow(id);
        });
    });
}

function editRow(id) {
    currentRecordId = id; // Встановлення значення currentRecordId
    $.get(`/api/${currentTable}/${id}`, function (record) {
        var formHtml = '';
        for (var key in record) {
            formHtml += `<label for="${key}">${key}</label>`;
            formHtml += `<input type="text" id="${key}" name="${key}" value="${record[key]}"><br>`;
        }
        formHtml += '<button class="button small" onclick="updateRecord()">Upt</button>';
        $('#editForm').html(formHtml);
        $('#editFormContainer').show();
    });
}

function showFieldsOfRow(){
    var formData = {};
    $('#editForm').find('input').each(function () {
        var inputName = $(this).attr('name');
        var inputValue = $(this).val();
        if (inputName.endsWith('_id')) { // Перевірка, чи закінчується назва стовпця на "_id"
            formData[inputName] = { id: inputValue }; // Створення об'єкта для зовнішнього ключа
        } else {
            formData[inputName] = inputValue;
        }
    });

}

function updateRecord() {
    showFieldsOfRow();

    fetch(`/api/${currentTable}/${currentRecordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
}

function deleteRow(id) {
    $.ajax({
        url: `/api/${currentTable}/${id}`,
        type: 'DELETE',
        success: function (result) {
            loadTable(); // Перезавантажити таблицю після видалення
        }
    });
}

function choseTable() {
    loadTable();
    showCreateForm();
}


function showCreateForm() {
    $.get(`/api/${currentTable}/all`, function (data) {
        if (data.length > 0) {
            var record = data[0];
            var formHtml = '<form id="createForm">';
            for (var key in record) {
                if (key!== 'id') { // При                if (key!== 'id') { // Припустимо, що 'id' є автогенерованим
                    formHtml += `<label for="${key}">${key}</label>`;
                    formHtml += `<input type="text" id="${key}" name="${key}" class="text-field w-input" ><br>`;
                }
            }
            formHtml += '</form>';
            formHtml += '<button class="button small" style="margin: 15px" onclick="createRecord()">Save</button>';
            $('#createFormContainer').html(formHtml);
            $('#createFormContainer').show();
        }
    });
}



function createRecord() {
    showFieldsOfRow();

    fetch(`/api/${currentTable}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
}