/* eslint-disable max-classes-per-file */
class Circle {
  constructor(radius, color){
    this.radius = radius;
    this.color = color;
  }
  /*
  There's different ways to get the same solution.
  To get the area of a circle, we multiply PI by the radius squared.
  Math.PI gives us the value of PI, and we square the radius using **, which acts as an exponent.
  Another option is to use Math.pow(), which takes two arguments: a number and the exponent, and returns the result.
  You could also square the radius by multiplying it by itself (this.radius * this.radius), but that only works for squaring.
  */
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  draw(){
    return `Drawing a ${this.color} circle.`
  }
  /*
  The `this` keyword refers to the current instance of the class.
  Here, we used `this.color` to access the color property of the instance and
  then assigned it a new value, just like you'd update a property in an object.
  */
  changeColor(newColor){
    this.color = newColor;
    return newColor;
  }
 }
 
 
 class BankAccount {
  /*
  A hashtag (#) before a property name indicates that the property is private
  This means it can only be used inside the class it’s defined in.
  The static keyword makes the property part of the class, not the objects created from it.
  This means that you can use the property with the class name, but not with individual objects.
  For example, you would use BankAccount.#total instead of this.#total to access it.
  */
  #balance;
  static #total = 0;
  constructor(firstName, lastName, balance = 0){
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
    BankAccount.#total += balance;
  }
  showBalance(){
    /*
    toFixed allows you format a number to a specific number of decimal places.
    In this case, it makes sure the balance has two decimal places.
    */
    return `Your balance is ${this.#balance.toFixed(2)}`;
  }
  deposit(amount){
    this.#balance += amount;
    BankAccount.#total += amount;
    return `Your balance is ${this.#balance.toFixed(2)}`;
  }
  withdraw(amount){
    if(amount < this.#balance){
      this.#balance -= amount;
      BankAccount.#total -= amount;
      return `Your balance is ${this.#balance.toFixed(2)}`;c
    } else {
      return "You do not have enough funds.";
    }
  }
  /*
  Static methods work the same way as static properties.
  This means they belong to the class itself, not to individual objects created from the class.
  For example, you can call BankAccount.getTotalHoldings() without needing an instance.
  */
  static getTotalHoldings(){
     return BankAccount.#total;
  }
 }
 
 
 module.exports = {
  Circle,
  BankAccount,
 }; 