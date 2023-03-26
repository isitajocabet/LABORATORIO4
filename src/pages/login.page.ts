import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    // Locators //*[@id="email"] , //*[@title="Contraseña"], //*[@id="send2" and contains(@class, "action login primary")]
    private username: string = '//*[@id="email"] ';
    private password: string = '//*[@title="Contraseña"]';
    private loginButton: string = '//*[@id="send2" and contains(@class, "action login primary")]';

    constructor(){
        super();
    }

    async setUsername(text: string) {
        //this.driver.startDriver();

        // ElementAction.setText(locator, text)
        await this.driver.Page.fill(this.username, text);
    }

    async setPassword(text: string) {
        await this.driver.Page.fill(this.password, text);
    }

    async clickButton() {
        // page.click(locator); 
        await this.driver.Page.click(this.loginButton);
    }

    async Login(username: string, password: string) {
        await this.driver.Page.fill(this.username, username);
        await this.driver.Page.fill(this.password, password);
        await this.driver.Page.click(this.loginButton);
        //await this.driver.Page.waitForTimeout(10000);
    }
}
