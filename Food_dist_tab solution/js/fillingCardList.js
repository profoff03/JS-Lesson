"use strict"


class MenuCard {

    constructor(src, alt, title, description, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.price = price;
        this.parentSelector = document.querySelector(parentSelector);
        this.classes = classes;
        this.transfer = 39;
        this.currencyconverter();
    }

    currencyconverter() {
        this.price = this.price * this.transfer;
    }

    checkClassessList(card) {
        if (this.classes.length === 0) {
            this.card = "menu__item";
            card.classList.add(this.card);
        } else {
            this.classes.forEach(className => card.classList.add(className))
        }
    }

    render() {
        const card = document.createElement("div");
        this.checkClassessList(card);
        card.innerHTML = `
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
        `
        this.parentSelector.append(card);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    '"Меню "Фитнес""',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    10,
    ".menu .container",
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    ".menu .container",
    "menu__item",
    "big"
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    ".menu .container",
    "menu__item"
).render();

