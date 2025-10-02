import { expect } from '@wdio/globals';
import MenuScreen from '../../pageobjects/MenuScreen';
import HomeScreen from '../../pageobjects/HomeScreen';

describe('Navigation [Smoke Suite]', () => {
    it('should go from Home to Menu and back to Home', async () => {
        await expect(HomeScreen.root).toBeDisplayed();
        await HomeScreen.goToMenu();
        await expect(MenuScreen.root).toBeDisplayed();
    });
});