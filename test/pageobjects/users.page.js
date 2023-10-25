const { browser, $ } = require('@wdio/globals')
const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        console.log('loadingTitle: ', $('#users-loading'))
        return $('#users-loading');
    }

    get getUsersList() {
        console.log('getUsersList: ', $('#users-list'))
        return $('#users-list');
    }

    get usersItems() {
        console.log('usersItems: ', browser.react$$('User'))
        // return browser.$$('.user-component')
        return browser.react$$('User');
    }

    async loadData() {
        try {
            await this.open()
            await this.loadingTitle.waitForDisplayed({ timeout: 3000 });
            await this.getUsersList.waitForDisplayed({ timeout: 3000 });
        } catch (error) {
            throw new Error('Could not upload users!')
        }
    }

    async deleteUser() {
        try {
            const usersItems = await this.usersItems.length
            if (!usersItems) {
                throw new Error('Users did not find')
            }
            await this.usersItems[0].$('#user-delete').click()
            // use setTimeout to add delay (usersItemsAfterDelete = 0 without delay)
            setTimeout(async () => {
                const usersItemsAfterDelete = await this.usersItems.length
                if (usersItems - usersItemsAfterDelete !== 1) {
                    throw new Error('Could not delete the user')
                }
            }, 0)
        } catch (error) {
            throw new Error('Could not delete user! ' + error.message)
        }
    }

    open() {
        return super.open('/usersfortest');
    }
}

module.exports = new UsersPage();
