const UsersPage = require('../pageobjects/users.page')

describe('Users for test page', () => {
    it('Load users', async () => {
        await UsersPage.loadData()
    })
    it('Delete user', async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    })
})

