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

const {name: publisherName = 'self-published'} = book.publisher;
console.log(publisherName);
