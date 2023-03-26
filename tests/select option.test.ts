// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/core/driver";
import { mainHeader } from "../src/pages/components/main-header.page";
import { inventoryPage } from "../src/pages/inventory.page";
import { LoginPage } from "../src/pages/login.page";
import { items } from "./resources/items";

describe('Feature Login SauceDemo', () => {
    let loginPage: LoginPage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        loginPage = new LoginPage();
        await loginPage.navigateTo('https://flow.bo/customer/account/login/referer/aHR0cHM6Ly9mbG93LmJvLw%2C%2C/');
        await loginPage.setUsername('isajocabet@gmail.com');
        await loginPage.setPassword('Qa.1234*');
        await loginPage.clickButton();
        // loginPage = new LoginPage();
    }, 80000);

    afterAll(async () => {
        // await inventoryPage.addToCartItem('Sauce Labs Backpack');
        // await inventoryPage.addToCartItem('Sauce Labs Bolt T-Shirt');
        await driverInstance.closeDriver();
    });

   
});