class Cart {
    render() {
        let htmlCart = ''

        let products = localStorageUtil.getProducts()
        CATALOG.forEach(({id, name, img, price})=> {

            if (products.indexOf(id) !== -1) {
                htmlCart += `
                    <img class="cart_elemetn__img" src="${img}"/>
                    <span class="cart_elemetn__name"> ${name}</span>
                    <span class="cart_elemetn__price">${price}</span>
                `
            }
            

        });

        const html = `
        <div class="cart-container">
            ${htmlCart}
        </div>
        `
        ROOT_CART.innerHTML = htmlCart
    }
}

const cart = new Cart()
cart.render()