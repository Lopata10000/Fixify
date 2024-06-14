// Отримання ідентифікатора категорії
const categoryId = 5; // Приклад: ідентифікатор категорії, отриманий з API

// Створення нового завдання
const newTask = {
    taskName: 'Нове завдання',
    category: {
        id: categoryId
    }
};

// Виконання запиту POST для створення нового завдання
fetch('https://example.com/api/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
})
    .then(response => {
        if (response.ok) {
            console.log('Завдання успішно створено');
        } else {
            console.error('Помилка при створенні завдання');
        }
    })
    .catch(error => {
        console.error('Помилка при виконанні запиту:', error);
    });