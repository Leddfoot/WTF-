console.log('Change the webpack entry back to src/app.js to get back to the regular app')



// OBJECT DESTRUCTURING. note that the publisher.name is reassigned to publisherName
// There is also a default value so 2 things going on there
const book = {
  title: 'Redux is the Devil',
  author: 'shitty programmer',
  publisher: {
    name: 'Hell Publishing Inc.'
  }
};
//***************************************************************

const {name: publisherName = 'self-published'} = book.publisher;
console.log(publisherName);

const address = ['Halsåsen 23', '1397', 'Nesøya', 'Norge']
const [street, zip, town, countryOfOrigin] = address;

console.log(street);
console.log(zip);

console.log(`You are currently located at ${address[0]} on the beautiful island of ${address[2]}.` );

//EVEN COOLER
const addressWhereIOnlyCareAboutTheCountry = ['Halsåsen 23', '1397', 'Nesøya', 'Norge']
const [, , , country = 'optionalDefaultCountry'] = addressWhereIOnlyCareAboutTheCountry;
console.log(`It's fucking amazingly hard to get a job in ${country}`);
