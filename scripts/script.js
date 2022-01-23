import burgerMenu from './modules/burgerMenu.js';
import searchControl from './modules/searchControl.js';
import dropDown from './modules/dropDown.js';
import slider from './modules/slider.js';

burgerMenu({
	selectorMenu: '.navigation',
	selectorBtn: '.navigation__btn',
	classActive: 'navigation_active',
	selectorClose: '.navigation__link, .header__btn',
	parentSelector: '.header',
});

searchControl({
	activateBtn: '.search__button',
	closeBtn: '.search__close',
	selectorSearch: '.header__search',
	classActivate: 'search_active',
	searchInput: '.search__input',
});

dropDown({
	dropTitle: '.footer__subtitle',
	activeSelectorTo: '.footer__nav-item',
	activeClass: 'footer__item-active',
	breakpoint: 630,
});

slider();
document.addEventListener('click', (e) => e.preventDefault());
