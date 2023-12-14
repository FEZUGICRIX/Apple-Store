class Cart {
    closeCartMenu() {
        ROOT_CART.innerHTML = '';
    }

    render() {
        let htmlCartTableRow = '';
        let totalSum = 0;

        let products = localStorageUtil.getProducts();
        CATALOG.forEach(({ id, name, img, price, rating }) => {

            if (products.indexOf(id) !== -1) {
                totalSum += price;
                htmlCartTableRow += `
                <tr class="cart-row">
                    <td><img class="cart_elemetn__img" src="${img}"/></td>
                    <td class="cart__elements_name-rating">
                        <span class="cart_elemetn__name">${name}</span>
                        <span class="products_element__rating-star">${rating}  <span class="star"></span></span>
                        <div class="input-group">
                            <button class="input-group__minus">-</button>
                            <input class="input" data-price="${price}" value="5"></input>
                            <button class="input-group__plus">+</button>
                        </div>
                    </td>           
                    <td>
                        <span class="cart_elemetn__price">${price.toLocaleString()}$</span>
                    </td>
                </tr>`;
            }
        });

        const html = `
        <div class="cart-container">
                <div class="close__close" onclick="cart.closeCartMenu()"></div>
                <table style="width: 100%;">
                    <th>Корзина:</th>
                    ${htmlCartTableRow}
                </table>
                <hr><br>
                    
                <div class="cart_elemetn__price">
                Итого:
                <span id="totalPrice"></span>$
                </div>

                <button class="products_element__btn" style="width=100%;">Заказать</button>
                </div>
                `;
        ROOT_CART.innerHTML = html;
        this.productsCounter();
    }

    productsCounter() {
        let totalPrice = 0;
        const inputSelector = (input) => Number(input.value) * Number(input.dataset.price);
        const totalPriceId = document.getElementById('totalPrice');

        const init = () => {
            [...document.querySelectorAll('.cart-row')].forEach((basketItem) => {
                totalPrice += inputSelector(basketItem.querySelector('.input'));
            });
            
            totalPriceId.textContent = totalPrice.toLocaleString();
        };
        init();
    } 
}

const cart = new Cart();