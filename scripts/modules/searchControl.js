const searchControl = ({
	activateBtn,
	closeBtn,
	selectorSearch,
	classActivate,
	searchInput,
}) => {
	const btnActive = document.querySelector(activateBtn);
	const btnClose = document.querySelector(closeBtn);
	const searchForm = document.querySelector(selectorSearch);
	const input = document.querySelector(searchInput);

	btnActive.addEventListener('click', () => {
		searchForm.classList.add(classActivate);
	});
	btnClose.addEventListener('click', () => {
		searchForm.classList.remove(classActivate);
		input.value = '';
	});
	document.addEventListener('click', (event) => {
		if (!event.target.closest(selectorSearch)) {
			searchForm.classList.remove(classActivate);
		}
	});
};

export default searchControl;
