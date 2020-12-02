// OBJECTS DESTRUCTURING

const person = {
    name: 'Alex',
    age: 34,
    location: {
        city: 'Cluj-Napoca',
        temp: 12   
    }
};

const { name, age, location} = person;
const { city, temp: temperature } = location;

console.log(`${name} is ${age}`);
console.log(`It's ${temperature} degrees in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

// ARRAY DESTRUCTURING

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee,,price] = items;
console.log(`A medium ${coffee} costs ${price}.`);