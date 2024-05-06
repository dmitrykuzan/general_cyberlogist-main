export const headerScroll = () => {
// Когда пользователь прокручивает страницу, выполните scroll
    window.addEventListener('scroll', ()=> {
        scrollGo();
    });

// Получить заголовок
    let header = document.querySelector(".header");

// Получить смещение позиции навигационной панели
    let sticky = header.offsetTop;

// Добавить класс "sticky" к заголовку, когда вы достигнете его позиции прокрутке.
// Удалить "sticky" при выходе из положения прокрутки
    function scrollGo() {
        if (window.pageYOffset > sticky) {
            header.classList.add('header--fixed');

        } else {
            header.classList.remove('header--fixed');
        }
    }
    scrollGo();
};