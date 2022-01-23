const dropDown = ({ dropTitle, activeSelectorTo, activeClass, breakpoint }) => {
	const btns = document.querySelectorAll(dropTitle);
	const targetSelectors = document.querySelectorAll(activeSelectorTo);

	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (document.documentElement.clientWidth <= breakpoint) {
				const parentSelect = btn.closest(activeSelectorTo);
				parentSelect.classList.toggle(activeClass);

				targetSelectors.forEach((select) => {
					if (select !== parentSelect) {
						select.classList.remove(activeClass);
					}
				});
			}
		});
	});
};
export default dropDown;
