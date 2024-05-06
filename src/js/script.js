'use strict';

import { burger } from "./components/burger";
import { slider } from "./components/slider";
import { headerScroll } from "./components/scroll";
import { btnGoUp } from "./components/goUp";
import { dynamicAdaptive } from "./components/dynamicAdaptive";
import { accordion } from "./components/accordion";
import { modals } from "./components/modals";

// import a plugin

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'fslightbox';

window.addEventListener('DOMContentLoaded', () => {
  burger('.header', '.header__burger', '.header__mobile-nav', '.header__nav-list--burger',
    'header__nav-link--burger', '.header__btn-close');
  headerScroll();
  slider();
  btnGoUp();
  dynamicAdaptive();
  modals();
  accordion(
    ".faq__list",
    "faq__item-head",
    ".faq__item",
    "faq__item--active"
  );
  accordion(
    ".videos__list",
    "videos__item-head",
    ".videos__item",
    "videos__item--active"
  );
});

