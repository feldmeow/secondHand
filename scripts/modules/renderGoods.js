import serviceGoods from '../service/serviceGoods.js';

const createCard = ({ id, title, image, price, discountPrice }) => {
	const li = document.createElement('li');
	li.classList.add('goods__item');
	li.insertAdjacentHTML(
		'beforeend',
		`<article class="item">
              <img src="./${image}" alt="${title}" class="item__img">
              <button class="item__fav-btn" data-id="${id}">
                <svg width="28px" height="24px">
                  <use xlink:href="#heart" />
                </svg>
              </button>
              <div class="item__control-wrapper">
                <h3 class="item__title">${title}</h3>
                <button class="item__to-cart" data-id="${id}">В корзину</button>
                <p class="item__price">${
									discountPrice
										? `${discountPrice} ₽
                  <span class="item__price-old">${price} ₽</span>`
										: `${price} ₽`
								}
                </p>
                <button class="item__description-btn" data-id="${id}">Подробнее</button>
              </div>
            </article>`
	);
	return li;
};

const renderCards = (parent) => {
	return (data) => {
		parent.append(...data.map(createCard));
	};
};

const renderGoods = (query) => {
	const list = document.querySelector('.goods__list');
	list.textContent = '';

	serviceGoods(renderCards(list), query);
};

export default renderGoods;
