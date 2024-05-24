/*
// Отримати посилання на випадаючий список
const citySelect = document.getElementById("citySelect");

// Функція для отримання списку міст України через Geonames API
async function fetchUkraineCities() {
    try {
        const response = await fetch("http://api.geonames.org/searchJSON?country=UA&maxRows=1000&username=demo");
        const data = await response.json();

        // Додати опції до випадаючого списку
        data.geonames.forEach(city => {
            const option = document.createElement("option");
            option.value = city.name;
            option.text = city.name;
            citySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Помилка при отриманні списку міст:", error);
    }
}

// Викликати функцію для отримання списку міст України
fetchUkraineCities();
*/
