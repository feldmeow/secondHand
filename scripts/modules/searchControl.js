const searchControl = ({
	selectorBtn,
	selectorClose,
	selectorForm,
	classActive,
	searchInput,
	breakpoint,
}) => {
	const btn = document.querySelector(selectorBtn);
	const close = document.querySelector(selectorClose);
	const form = document.querySelector(selectorForm);
	const input = document.querySelector(searchInput);

	const activateForm = () => {
		form.classList.add(classActive);
		btn.removeEventListener('click', activateForm);
		btn.type = 'submit';
	};

	const deactivateForm = () => {
		form.classList.remove(classActive);
		btn.addEventListener('click', activateForm);
		btn.type = 'button';
		input.value = '';
	};

	if (document.documentElement.clientWidth > breakpoint) {
		btn.addEventListener('click', activateForm);
		close.addEventListener('click', deactivateForm);
	} else {
		btn.type = 'submit';
	}
};

export default searchControl;
