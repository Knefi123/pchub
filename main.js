// Функція для відкриття модального вікна
function openModal() {
    document.getElementById("orderModal").style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

// Додатково, можна обробити форму
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    let address = document.getElementById("address").value;
    alert("Ваше замовлення прийнято. Адреса: " + address);
    closeModal(); // Закриваємо модальне вікно після підтвердження
});