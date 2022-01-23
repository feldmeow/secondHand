const burgerMenu = ({ classActive, selectorBtn, selectorMenu }) => {
	const btn = document.querySelector(selectorBtn);
	const menu = document.querySelector(selectorMenu);

	btn.addEventListener('click', () => {
		menu.classList.toggle(classActive);
	});
};

export default burgerMenu;
