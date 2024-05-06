import Swiper, {Autoplay, Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

export const slider = () => {
    new Swiper('.thinks__slider', {
        autoplay: {
            delay: 6000,
            pauseOnMouseEnter: true,
        },

        navigation: {
            nextEl: '.thinks__btn-prev',
            prevEl: '.thinks__btn-next',
        },

        speed: 1000,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
    });
};