const {I} = inject();
//const dataSource = require('../factories/Properties');

module.exports = {
    fields: {
        next: '//*[@class = "RveJvd snByac"]',

    },

    navigateUrl()
     {
         I.amOnPage('');
         I.wait(10);
     },
    // login: async function () {
    //     I.fillField('identifier', 'abc@gmail.com');
    //     I.click(this.fields.next);
    //     I.wait(3);
    //     I.fillField('password', 'ndcyiadsdkjasdbs');
    //     I.click(this.fields.next);
    //     I.wait(5);
    //     I.see('Welcome');
    //     let name = await I.grabTextFrom('//*[@id="profileIdentifier"]');
    //     I.see(dataSource.email, name);
    // }
};
