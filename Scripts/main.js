const ratingBtns = document.querySelectorAll('.rating__btn');
const sumbitBtn = document.getElementById('sumbit');
const ratingString = document.getElementById('rating');
const rateCard = document.getElementById('rating-card');
const tnxCard = document.getElementById('tnx-card');
const body = document.getElementsByTagName('body');

let rateValue = 0;

ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        ratingBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Отримуємо значення оцінки
        rateValue = parseFloat(btn.textContent);
    });
});

// Використовуємо .some() для валідації
function rateValidate(btns) {
    // Поверне true, якщо хоча б одна кнопка має клас 'active'
    return Array.from(btns).some(b => b.classList.contains('active'));
}



document.addEventListener('click', () => {
    if (!tnxCard.classList.contains('hidden')) {

        rateCard.classList.remove('hidden');

        tnxCard.classList.add('hidden');
    }
});

sumbitBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (rateValidate(ratingBtns)) {
        // Приховуємо картку з рейтингом
        rateCard.classList.add('hidden');

        // Вставляємо текст із результатом
        ratingString.textContent = `You selected ${rateValue} out of 5`;

        // Показуємо картку подяки
        tnxCard.classList.remove('hidden');
    } else {
        // Додай сповіщення, якщо нічого не обрано
        alert("Please select a rating before submitting!");
    }
});