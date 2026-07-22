const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');


test('Verify Admin Module Open Successfully', async ({page}) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);


    await page.goto('https://opensource-demo.orangehrmlive.com/');


    await loginPage.login(
        'Admin',
        'admin123'
    );


    await adminPage.openAdminPage();


    const title = await adminPage.verifyAdminPage();


    expect(title).toContain('Admin');

});
