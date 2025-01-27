# Assignment

- [Setup](#setup)
- [Testing Your Code](#testing-your-code)
  - [Submitting On Time](#submitting-on-time)
  - [playground.js](#playgroundjs)
  - [npm test](#npm-test)
- [Questions](#questions)
  - [Question 1:](#question-1)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
npm i
git checkout -b draft
npm t
```

## Testing Your Code

### Submitting On Time

You have to understand that "grades" don't exist at Marcy. We only need performance data in order to know how you're doing, and make sure the people who need help get it as quickly as they can. It's ok if you didn't finish by the deadline! Just show us what you have. We'll have office hours and reviews, and we want to know what you are all struggling with so we can use those meetings effectively. **This is not about grades, its about seeing what you know, and where we can help!**

### playground.js

The most straightforward way to test your code is to test your code by hand as you work. Invoke your functions and use `console.log()` to print out the results. Then, `cd` into the `src/` directory and use the `node <file_name>` command to run your JavaScript files. 

You can also create what's called a "playground" (or "sandbox") file where you import any code you need, and then mess around with that file. We've included one in the `src` directory so you can see it. Run that program using `node src/playground.js`.

### npm test

Before submitting your code, make sure you got things right by running the provided automated tests.

You can do this using the commands:

```sh
npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change
```

You will know that you have "completed" an assignment once you have passed 75% or more of the automated tests!

## Questions

# Question 1 - Circle

Create a class `Circle`. Each instance should have the following properties:
- `radius`
- `color`

Each instance should have the following methods:
- `getArea`
- `getCircumference`
- `draw`
- `changeColor`

# Question 2 - BankAccount
Create a class `BankAccount`. Check out the tests for the methods and properties. But here's a little hint: you need some way to track the balance, but the balance can only be altered by other methods. It isn't visible to the outside world. Do you know how to hide a class property?


# Going Beyond
We've been at Marcy for months now, and you've learned so much already. It's incredible! We're still going to be explaining a lot and teaching you a ton more, but it's time we work on making you "Auto-Didacts." That just means "self-taught learners." And luckily, that simply boils down to figuring out what you *don't* know, and taking the steps to fill in those gaps.

## What *should* you know
This is a crucial question for self learning. It's why note taking is so important in lectures. You need to go back over the topics covered and really be honest with yourself about what you understand.

A good way to test that is to try explaining a topic to someone. If you can't explain it simply, you probably don't know it.

Another strategy is to take examples and problems, and then modify them. So if we asked you to make a `Car` class, you'd make a `Bike` class. If you know how to make a closure that makes a number go up, make a closure that adds things to a list. Then removes them. Then modifies them. You get the idea. Start with something you know, and keep modifying it until you *don't*. Then figure it out!

## A cheat sheet of topics
To be friendly, here's the broad strokes of everything we covered this week:
- Closures
- Closures that specifically return functions
- Factory Functions
- this
- Factory functions with this/closures
- `new`
- Classes
- Private class properties
- Private class methods

Do you understand exactly how those all work? If the answer to that is "no" for any one of them, then you know where to start.

## What's coming up
Now in addition to solidifying knowledge (which is arguably more important here), we should also be thinking about the future. What's coming up? Luckily, this naturally comes up just by Googling and talking to ChatGPT. You'll stumble into related topics. Research those a little bit to help bring clarity.

However, you're enrolled in a school, so "what are we learning next lesson?" is not hypothetical. I'll tell you the topics! After you're sure you understand everything we did this week, take some time to research these:

- Class properties/methods vs instance properties/methods
- the static keyword
- inheritance
- the extends keyword
- why is `this` so weird?
- What are class getters/setters
- Why people have strong opinions against getters/setters

## beyond.js
We have no tests for anything in this file, but we want to see you practice. Write code, write comments, ask questions, then answer them. Do whatever you feel will help you, but do it in this file so we can see.

This is not just a light assignment to give you free time. This assignment is dipping your toe into the pool of self learning and seeing how it feels. Companies want Jrs. who are self reliant. People who can be trusted to take responsibility for understanding something. And like every skill, that takes practice.

So let's start now!
