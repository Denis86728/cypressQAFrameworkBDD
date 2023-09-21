const { driverLocation } = require("selenium-webdriver/common/seleniumManager");

describe('First test', () => {
    it('Navigate to Cloning screen', async () => {

    //click on Animation button 
        $('~Animation').click()
    //click on Cloning button 
        $('~Cloning').click()
    //assert if title contains text
       await expect($('android.widget.TextView')).toHaveText('Animation/Cloning');
    })
});