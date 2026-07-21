const preloader = document.getElementById('loader');

if (preloader) {
    // Делаем прелоадер невидимым
    preloader.style.opacity = '0';

    // Полностью убираем его через 300мс, чтобы сработал плавный CSS-переход (если он есть)
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 300);
}
