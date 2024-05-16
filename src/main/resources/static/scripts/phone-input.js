document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector("#phoneNumber");
    window.intlTelInput(input, {
        separateDialCode: true,
        autoPlaceholder: "polite",
        formatOnDisplay: true,
        nationalMode: false,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // Заборона вводу нецифрових символів
    input.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Встановлення обмеження на довжину номера телефону
    input.addEventListener('input', function () {
        var origSize = parseInt(this.getAttribute('data-orig-size'), 10);
        if (this.value.length > origSize) {
            this.value = this.value.slice(0, origSize);
        }
    });
});
