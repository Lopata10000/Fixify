import {AuthenticationService} from '../../services/services/authentication.service';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {TokenService} from '../../services/token/token.service';
const form = document.getElementById('user-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    $.ajax({
        type: "POST",
        url: "/api/authentication",
        data: JSON.stringify(Object.fromEntries(formData)),
        contentType: "application/json",
        dataType: "json", // Add this to specify the response data type


        success: function (response) {
            const token = response.refresh_token;
            localStorage.setItem('refreshToken', token);
            Swal.fire({
                title: 'Успішна авторизація.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                        fetch("/private/new-event.html", {
                        method: "GET",
                            headers: {
                                "Content-Type": "application/json", // Додаємо тип контенту
                                "Authorization": token// Додаємо заголовок

                        }

                    })
                .then(response => {
                    window.location.href = data;

                })
                        .catch(error => {
                            console.error("Помилка:", error);
                        });

                }
            });

        },
        error: function (xhr, textStatus, errorThrown) {
            showError(xhr.responseText);
        }
    });
});

function showError(responseText) {
    if (typeof responseText === 'string' && responseText.startsWith('{')) {
        const error = JSON.parse(responseText);
        const errorMessage = error.message;
        document.getElementById('error-message').innerText = errorMessage;
    } else {
        document.getElementById('error-message').innerText = responseText;
    }
    document.getElementById('error-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('error-message').style.display = 'none';
    }, 5000);
}
