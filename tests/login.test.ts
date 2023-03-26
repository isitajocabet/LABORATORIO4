// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";

describe('Feature Login SauceDemo', () => {
    let loginPage: LoginPage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        loginPage = new LoginPage();  
        // loginPage = new LoginPage();
    }, 80000);

    afterAll(async () => {
        //await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.navigateTo('https://flow.bo/customer/account/login/referer/aHR0cHM6Ly9mbG93LmJvLw%2C%2C/');
    });

    it('Sets Username', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.setUsername('isajocabet@gmail.com');
    });

    it('Sets Password', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.setPassword('Qa.1234*');
    });

    it('Clicks login Button', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.clickButton();
    });
});