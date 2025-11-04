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
// Обработка ошибок загрузки изображений
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Заменяем битое изображение на placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPs6Vzq3Ovc63z4IgPC90ZXh0Pjwvc3ZnPg==';
            this.alt = 'Изображение не загружено';
        });
        
        // Добавляем ленивую загрузку если браузер не поддерживает
        if ('loading' in HTMLImageElement.prototype) {
            img.loading = 'lazy';
        }
    });
});