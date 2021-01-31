const person = { name: 'Jack', age: 17, job: 'facebook', address: 'Rajshahi', phone: "0172727" };

// in the following line, between the curly brackets, the object name is the same as the key name, so it will be assigned as that

const { phone, job } = person;

const address = person.address;

console.log(phone, job);

const friends = ['sakib', 'nasir', 'salman', 'shahrukh'];

const [chotoFriend, nextFriend] = friends;

console.log(chotoFriend, nextFriend);