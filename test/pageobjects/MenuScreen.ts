class MenuScreen {
    get root() { return $('//android.widget.TextView[@text="Settings"]'); }
    get homeButton() { return $('~Home'); }

    async goToHome() {
        await this.homeButton.click();
    }
}

export default new MenuScreen();