const user = new WeakMap();

const user1 = { id: 1 };
const user2 = { id: 2 };

user.set(user1, 'adarsh');
user.set(user2, 'ram');

console.log(user.get(user1));
