function showRegistrationFields(role) {
    var buttons = document.getElementById("buttons-wrapper");
    buttons.classList.add('fade-out'); // Додати клас для анімації зникнення

    setTimeout(function () {
        buttons.style.display = "none"; // Приховати кнопки після зникнення

        var form = document.getElementById("user-form");
        form.style.display = "block"; // Показати форму після зникнення кнопок

        // Налаштування тексту форми залежно від вибраної ролі
        var formHeader = document.querySelector(".w-users-userformheader.form-card-header h2");
        if (role === 'USER') {
            formHeader.textContent = "Реєстрація як замовник";
        } else if (role === 'MANAGER') {
            formHeader.textContent = "Реєстрація як фахівець";
        }

        form.setAttribute("data-role", role); // Додати атрибут "data-role" для подальшого використання
        form.style.opacity = 1; // Зробити форму видимою
    }, 500); // Затримка для анімації

}