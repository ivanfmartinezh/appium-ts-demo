class HomeScreen {
    get root () { return $('~HomeScreenDescription'); }
    get menuButton () { return $('//android.widget.TextView[@text="Menu"]'); }

    async goToMenu() {
        await this.menuButton.click();
    }
}

export default new HomeScreen();