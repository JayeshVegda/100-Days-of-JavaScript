<h1 align="center">
JavaScript Day - 2 <br>
Topic : Variable
</h1>


# Introduction
In javascript, there are three keywords that are used to declare variables: var, let and const. The var keyword was used to declare variables in javascript before the let and const keywords were introduced. The let and const keywords were introduced in ES6 (ECMAScript 6). ES6 is the latest version of javascript. It was released in 2015. ES6 introduced a lot of new features to javascript. We will learn about some of them in this course.

## Var
- Use for only old code
- not recommended   
- allow Duplicate variable name

## Let
<p>The let keyword is used to declare variables in JavaScript and has block scope. This means that if a variable is declared with let inside a block, it is only accessible within that block.</P>

- Recommended
- Not allow duplicate variable name
- can be accessable

## Const
The const keyword is used to declare variables in JavaScript and is used when you don't want to reassign the variable. The value of a variable declared with const cannot be changed.

- Recommended
- Not allow duplicate variable name
- can not be accessable


## Differences
| 0 | Block scoped | Hoisting | Reassignment | Initialization |
| --- | ----------- | --------- | ------------ | ------------ |
|let	|Yes	|No	|Yes|	Optional|
|var	|No	|Yes	|Yes	|Optional|
|const	|Yes	|No	|No	|Required|

- **Block scoped** : let and const are block-scoped, meaning they are only accessible within the block they were defined in, while var is function-scoped, meaning it is accessible within the entire function it was defined in.

- **Hoisting** : let and const are not hoisted, meaning they cannot be accessed before they are declared, while var is hoisted, meaning it can be accessed before it is declared (although it will have a value of undefined).

- **Reassignment** : let and var can be reassigned to a new value, while const cannot be reassigned.

- **Initialization** : let and var can be declared without being initialized, while const must be initialized with a value when it is declared.

## Conclusion

Variables are an essential part of JavaScript programming. They allow us to store and manipulate data in our code. In JavaScript, we can declare variables using the var, let, and const keywords. While the var keyword has block scope, it can lead to unexpected results and is no longer recommended. Instead, we should use the let and const keywords, with const being the preferred option whenever possible. When declaring variables, we should follow best practices like using descriptive names, using camelCase, declaring variables at the top of their scope, and using const by default. By following these practices, we can make our code more readable and maintainable.