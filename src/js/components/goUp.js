export const btnGoUp = () => {
    const scrollUp = document.querySelector('.go-top');
    let footerHeight = null, heroHeight = null, pageHeight = null, y = null, getTop = null;

    if(scrollUp) {
        footerHeight = document.querySelector('.footer').offsetHeight;
        heroHeight = document.querySelector('.hero').offsetHeight;
        pageHeight = document.documentElement.scrollHeight;

        // Разница длины макета и секции футера
        // для того, чтобы кнопке в футере можно было повесить класс
        y = pageHeight - footerHeight;

        getTop = () => (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;

        window.addEventListener('scroll', scroll);

        scrollUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0
            });
        });

        scroll();
    }

    function scroll () {
        if (getTop() > (heroHeight + window.innerHeight)) {
            scrollUp.classList.add('go-top--active');
        } else {
            scrollUp.classList.remove('go-top--active');
        }

        if (window.matchMedia("(min-width: 576px)").matches) {
            if (getTop() > y) {
                scrollUp.classList.add('go-top--footer');
                scrollUp.style.bottom = (footerHeight - scrollUp.offsetHeight) + 10 + 'px';
            } else {
                scrollUp.classList.remove('go-top--footer');
                scrollUp.style.bottom = '';
            }
        } else {
            if (getTop() > y) {
                scrollUp.classList.add('go-top--footer');
            } else {
                scrollUp.classList.remove('go-top--footer');
            }
        }
    }
};
