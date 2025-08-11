// // create an object car
// const car = {
//   make: "Toyota",
//   model: "Rave4",
//   color: "Black",
//   year: 2025,
//   speed: 100,
//   moveDirection: {
//     letf: true,
//     right: false,
//     forward: false,
//     backward: false
//   },
//   acceleration: function (speed) {
//     this.speed = speed;
//   },
//   move: function (left, right, forward, backward) {
//     this.moveDirection.letf = left;
//     this.moveDirection.right = right;
//     this.moveDirection.forward = forward;
//     this.moveDirection.backward = backward;

//   }
// }

// Create a class vehicule 
class Vehicule {
  constructor(make, model, color, year, speed, moveDirection) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.speed = speed;
    this.moveDirection = {
      left: moveLeft,
      right: moveRight,
      forward: moveFoward,
      backward: moveBackward
    }
  }
  moveDirection(left, right, forward, backward) {
    this.moveDirection.letf = left;
    this.moveDirection.right = right;
    this.moveDirection.forward = forward;
    this.moveDirection.backward = backward;
  }
}