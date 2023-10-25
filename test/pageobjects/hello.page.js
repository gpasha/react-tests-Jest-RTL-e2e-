const { $ } = require('@wdio/globals')
const Page = require('./page');


class HelloPage extends Page {
    get input() {
        return $('#input-hello');
    }

    get btn() {
        return $('#btn-hello');
    }

    get title() {
        return $('#title-hello');
    }

    async toggleTitleWithInput(inputValue) {
        await this.input.setValue(inputValue);
        await this.btn.click();
    }

    open() {
        return super.open('/hello');
    }
}

module.exports = new HelloPage();
