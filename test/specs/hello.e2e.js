const { expect } = require('@wdio/globals')
const HelloPage = require('../pageobjects/hello.page')

describe('Hello page', () => {
    it('should show Hello World block', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.title).toBeExisting()
        await HelloPage.btn.click()
        await expect(HelloPage.title).not.toBeExisting()
    })
    it('should NOT show Hello World block', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('random text...')
        await expect(HelloPage.title).not.toBeExisting()
    })
})

