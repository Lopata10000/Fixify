    document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("address");

    fetch("/api/towns/all")
    .then(response => response.json())
    .then(data => {

    data.forEach(town => {
    const option = document.createElement("option");
    option.textContent = town.town_name;
    selectElement.appendChild(option);
});
})

});
