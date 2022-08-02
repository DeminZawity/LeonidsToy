// ---------------------------------------------------------------------------EXERCISE ONE
// const toys = [
//   {
//     id: 1,
//     name: "Rubber Duck",
//     price: 2.99,
//     inventory: 50,
//   },
//   {
//     id: 2,
//     name: "Robot",
//     price: 39.99,
//     inventory: 30,
//   },
//   {
//     id: 3,
//     name: "Doll House",
//     price: 49.99,
//     inventory: 15,
//   },
//   {
//     id: 4,
//     name: "Teddy Bear",
//     price: "9.99",
//     inventory: 25,
//   },
// ];
// ---------------------------------------------------------------------------EXERCISE TWO AND THREE
// const rubberDuck = { id: 1, name: "Rubber Duck", price: 2.99, inventory: 50 };
// const robot = { id: 2, name: "Robot", price: 39.99, inventory: 30 };
// const dollHouse = { id: 3, name: "Doll House", price: 49.99, inventory: 15 };
// const teddyBear = { id: 4, name: "Teddy Bear", price: "9.99", inventory: 25 };
// const toys = [rubberDuck, robot, dollHouse, teddyBear];
// console.log(toys);
// ---------------------------------------------------------------------------EXERCISE FOUR
// const rubberDuck = { id: 1, name: "Rubber Duck", price: 2.99, inventory: 50 };
// const robot = { id: 2, name: "Robot", price: 39.99, inventory: 30 };
// const dollHouse = { id: 3, name: "Doll House", price: 49.99, inventory: 15 };
// const teddyBear = { id: 4, name: "Teddy Bear", price: "9.99", inventory: 25 };
// const toys = [rubberDuck, robot, dollHouse, teddyBear];

// for (const toy of toys) {
//   console.log(toy.name);
// }
// ---------------------------------------------------------------------------EXERCISE FIVE
// const rubberDuck = { id: 1, name: "Rubber Duck", price: 2.99, inventory: 50 };
// const robot = { id: 2, name: "Robot", price: 39.99, inventory: 30 };
// const dollHouse = { id: 3, name: "Doll House", price: 49.99, inventory: 15 };
// const teddyBear = { id: 4, name: "Teddy Bear", price: "9.99", inventory: 25 };
// const toys = [rubberDuck, robot, dollHouse, teddyBear];

// const airplane = { id: 5, name: "Airplane", price: 19.99, inventory: 40 };
// const playDoh = { id: 6, name: "Play Doh", price: 3.99, inventory: 100 };

// toys.push(airplane, playDoh);

// for (const toy of toys) {
//   console.log(toy.name);
// }
// ---------------------------------------------------------------------------EXERCISE SIX
// const rubberDuck = { id: 1, name: "Rubber Duck", price: 2.99, inventory: 50 };
// const robot = { id: 2, name: "Robot", price: 39.99, inventory: 30 };
// const dollHouse = { id: 3, name: "Doll House", price: 49.99, inventory: 15 };
// const teddyBear = { id: 4, name: "Teddy Bear", price: "9.99", inventory: 25 };
// const toys = [rubberDuck, robot, dollHouse, teddyBear];

// const airplane = { id: 5, name: "Airplane", price: 19.99, inventory: 40 };
// const playDoh = { id: 6, name: "Play Doh", price: 3.99, inventory: 100 };

// toys.push(airplane, playDoh);

// for (const toy of toys) {
//   console.log(toy.name), console.log(toy.price), console.log(toy.inventory);
// }
// ---------------------------------------------------------------------------EXERCISE SEVEN
const rubberDuck = { id: 1, name: "Rubber Duck", price: 2.99, inventory: 50 };
const robot = { id: 2, name: "Robot", price: 39.99, inventory: 30 };
const dollHouse = { id: 3, name: "Doll House", price: 49.99, inventory: 15 };
const teddyBear = { id: 4, name: "Teddy Bear", price: "9.99", inventory: 25 };
const toys = [rubberDuck, robot, dollHouse, teddyBear];

const airplane = { id: 5, name: "Airplane", price: 19.99, inventory: 40 };
const playDoh = { id: 6, name: "Play Doh", price: 3.99, inventory: 100 };

toys.push(airplane, playDoh);

for (const toy of toys) {
  toy.price = toy.price * 1.05;
  console.log(`The ${toy.name} currently costs ${toy.price}.`);
}
