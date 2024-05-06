export const burger = (headerSelector, burgerSelector, navSelector, listSelector, linkSelector, closeSelector) => {
    const burger = document.querySelector(burgerSelector),
          body = document.body,
          nav = document.querySelector(navSelector),
          wrapper = document.querySelector(".wrapper"),
          list = document.querySelector(listSelector),
          close = document.querySelector(closeSelector),
          header = document.querySelector(headerSelector);

    burger.addEventListener("click", (e) => {
        if (e.currentTarget) {
            burger.classList.toggle(`${burgerSelector.substring(1, burgerSelector.length)}--active`);
            nav.classList.add(`${navSelector.substring(1, navSelector.length)}--active`);
            body.classList.add("lock");
            body.classList.add( "lock--wrapper");
            header.classList.add(`${headerSelector.substring(1, headerSelector.length)}--active`);
        }
    });

    close.addEventListener("click", (e) => {
        if(e.currentTarget) {
            burger.classList.toggle(`${burgerSelector.substring(1, burgerSelector.length)}--active`);
            nav.classList.remove(`${navSelector.substring(1, navSelector.length)}--active`);
            body.classList.remove("lock");
            body.classList.remove( "lock--wrapper");
            header.classList.remove(`${headerSelector.substring(1, headerSelector.length)}--active`);
        }
    });

    wrapper.addEventListener("click", (e) => {
        if (e.target && e.target === wrapper) {
            burger.classList.remove(`${burgerSelector.substring(1, burgerSelector.length)}--active`);
            nav.classList.remove(`${navSelector.substring(1, navSelector.length)}--active`);
            body.classList.remove("lock", "lock--wrapper");
            header.classList.remove(`${headerSelector.substring(1, headerSelector.length)}--active`);
        }
    });

    list.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains(linkSelector)) {
            burger.classList.toggle(`${burgerSelector.substring(1, burgerSelector.length)}--active`);
            nav.classList.remove(`${navSelector.substring(1, navSelector.length)}--active`);
            body.classList.remove("lock", "lock--wrapper");
            header.classList.remove(`${headerSelector.substring(1, headerSelector.length)}--active`);
        }
    });
};