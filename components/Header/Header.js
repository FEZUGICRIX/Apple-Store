class Header {
    render(counter) {
    let htmlHeader = `
        <div class="header">
            <div class="header-wrapper" onclick="cart.render()">
                <div class="header__counter">${counter}</div>
                <div class="header__cart"></div>
            </div>
            
        </div>
        `
        
        ROOT_HEADER.innerHTML = htmlHeader;
    };
};

const header = new Header();
let count = localStorageUtil.getProducts()
header.render(count.length);