class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    };

    getProducts() {
        const productLocalStorage = localStorage.getItem(this.keyName)
        if (productLocalStorage !== null) {
            return JSON.parse(productLocalStorage);
        }
    }

    putProducts(id) {
        let pushProducts = false;
        let products = this.getProducts();
        let index = products.indexOf(id)

        if (index === -1) {
            pushProducts = true
            products.push(id)
        } else {
            products.splice(index, 1)
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return {
            pushProducts: pushProducts,
            products: products
        };
    };
};

const localStorageUtil = new LocalStorageUtil();
