class Products {
    constructor() {
        this.NameActiveClass = 'products_element__btn_active';
        this.NameClass = 'products_element__btn';
        this.text = 'Добавить в корзину';
        this.textActive = 'Удалить из корзины';

        this.totalText = '';
        this.totalNameClass = ''
    }

    addLocationStorage(element, id) {
        const {pushProducts, products} = localStorageUtil.putProducts(id);
        header.render(products.length)
        
        if (pushProducts) {
            element.classList.add(this.NameActiveClass);
            element.innerHTML = this.textActive;
        } else {
            element.classList.remove(this.NameActiveClass);
            element.innerHTML = this.text;
        }
    }

    render() {
        const products = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price}) => {
            if (products.indexOf(id) === -1) {
                this.totalNameClass = this.NameClass;
                this.totalText = this.text;
            } else {
                this.totalNameClass = this.NameActiveClass;
                this.totalText = this.textActive;
            }


            htmlCatalog += `
            <li class="products_element">
                <img  class="products_element__img" src="${img}">
                <span class="products_element__price" >${price.toLocaleString()}$</span>
                <span class="products_element__name" >${name}</span>
                <button 
                  class="${this.totalNameClass} products_element__btn" 
                  onclick="productsPage.addLocationStorage(this,'${id}')">
                  ${this.totalText}
                </button>
            </li>
            `
        });

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render()