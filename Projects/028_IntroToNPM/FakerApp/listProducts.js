var faker = require('faker');

for(var i = 0; i < 10; i++){
    var adj = faker.hacker.adjective();
    // var adv = faker.company.catchPhraseDescriptor();
    // var adv = faker.company.bsAdjective();
    // var adv = faker.company.catchPhraseNoun();
    var adv = faker.company.catchPhrase();
    var money = faker.commerce.price();

    console.log( adv +" - $" + money);
}