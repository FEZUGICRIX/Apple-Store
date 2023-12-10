class Header {
    render(counter) {


        let htmlHeader = `
        <div class="header">
            <div class="header__counter">${counter}</div>
            <div class="header__cart"></div>
        </div>
        `

        ROOT_HEADER.innerHTML = htmlHeader;
    };
};

const header = new Header();
header.render(localStorageUtil.getProducts().length);