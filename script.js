// Простая логика для кнопки "Подробнее"
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const title = product.querySelector('.product-title').textContent;
        
        alert(`Вы выбрали: "${title}". Для заказа позвоните по номеру +7 (495) 123-45-67 или забронируйте стол через наш сайт.`);
    });
});

// Логика для кнопки бронирования
document.querySelector('.reservation-btn').addEventListener('click', function() {
    alert('Для бронирования стола позвоните по номеру +7 (495) 123-45-67 или оставьте заявку на нашем сайте. Мы свяжемся с вами в ближайшее время!');
});

// Логика для кнопок избранного
document.querySelectorAll('.action-btn .fa-heart').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('fas');
        this.classList.toggle('far');
        
        if(this.classList.contains('fas')) {
            this.style.color = '#c31e1e';
        } else {
            this.style.color = '';
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем анимацию к карточкам продуктов и особенностям
document.querySelectorAll('.product-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});