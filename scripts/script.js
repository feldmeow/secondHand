import burgerMenu from './modules/burgerMenu.js';
import searchControl from './modules/searchControl.js';
import dropDown from './modules/dropDown.js';
import slider from './modules/slider.js';
import renderGoods from './modules/renderGoods.js';
import interceptLink from './modules/interceptLink.js';

burgerMenu({
	selectorMenu: '.navigation',
	selectorBtn: '.navigation__btn',
	classActive: 'navigation_active',
	selectorClose: '.navigation__link, .header__btn',
	parentSelector: '.header',
});

searchControl({
	selectorBtn: '.search__button',
	selectorClose: '.search__close',
	selectorForm: '.header__search',
	classActive: 'search_active',
	searchInput: '.search__input',
	breakpoint: 760,
});

dropDown({
	dropTitle: '.footer__subtitle',
	activeSelectorTo: '.footer__nav-item',
	activeClass: 'footer__item-active',
	breakpoint: 630,
});

slider({
	selectorSlider: '.hero__slider',
	selectorPagination: '.hero__slider-pagination',
	bulletClass: 'hero__slider-line',
	bulletActiveClass: 'hero__slider-line_active',
});

renderGoods(location.search);
interceptLink();
