import Swiper from './swiper-bundle.esm.browser.min.js';
const slider = ({
	selectorSlider,
	selectorPagination: el,
	bulletClass,
	bulletActiveClass,
}) => {
	new Swiper(selectorSlider, {
		autoplay: true,
		loop: true,
		effect: 'coverflow',
		pagination: {
			el,
			type: 'bullets',
			bulletClass,
			bulletActiveClass,
			clickable: true,
		},
	});
};

export default slider;
