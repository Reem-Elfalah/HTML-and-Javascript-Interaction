// 1-
// What message will eventually be alerted? After how long?
// var name = "Window";
// var alice = {
// name: "Alice",
// sayHi: function() {
// alert(this.name + " says hi");
// }
// };
// var bob = { name: "Bob" };

// setTimeout(alice.sayHi.call(bob), 1000);
// Answer Choices:
// Window says hi, after 1 second
// Window says hi, immediately
// Alice says hi, after 1 second
// Alice says hi, immediately
// Bob says hi, after 1 second
// Bob says hi, immediately
// 2-
// Write a line of code that uses .call (from Function.prototype.call) to alert the string "Alice says hello!"

// function sayHello () {
// alert(this.name + " says hello!");
// }
// var alice = { name: "Alice" };
// // ???
// 3-
// After running the following code, what will be the value of result?

// var x = 10;
// var puzzle = function (amount) {
// this.x += amount;
// return this.x;
// };

// var result = 50 - puzzle(20);
// 4-
// After running the following code, what will be the value of result?

// window.name = 'window'

// var alice = {
// name: 'Alice',
// greet: function () {
// return "Hi I am " + this.name
// }
// }

// var bob = {
// name: 'Bob',
// greet: alice.greet
// }

// var greet = alice.greet
// var result = greet()
// Answer Choices:
// "Hi I am Alice"
// "Hi I am Bob"
// "Hi I am window"
// "Hi I am undefined"
// 5-
// Fill the following survey INDIVIDULLY, you can read the passage (in the survey) in pairs, but make sure you fill the survey individully, we trust that each one will answer on his own
// HERE

// 6-
// After running the following code, what will be the value of result?

// var obj1 = { x: 10 };

// var obj2 = Object.create(obj1);

// var obj3 = Object.create(obj2);

// var result = obj3.x + 10;
// Answer Choices:
// 10
// 20
// 30
// NaN
// 7-
// What message will eventually be alerted? After how long?

// var name = "Window";
// var alice = {
// name: "Alice",
// sayHi: function() {
// alert(this.name + " says hi");
// }
// };
// var bob = { name: "Bob" };

// setTimeout(alice.sayHi.bind(alice), 1000);
// Answer Choices:
// Window says hi, after 1 second
// Window says hi, immediately
// Alice says hi, after 1 second
// Alice says hi, immediately
// Window says hi, after 1 second
// Bob says hi, immediately
// 8-
// Which of the following are reasons why we might reuse code?

// Answer Choices:
// modularize our code for reuse and composition
// centralize code to simplify maintenance
// reduce errors and repetition
// DRY - don't repeat yourself (developer efficacy)