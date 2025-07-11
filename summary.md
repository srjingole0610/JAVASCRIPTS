# Javascript Summary for Revision

## Introduction

Welcome to the **JavaScript Summary for Revision**!
This document is a concise, revision-friendly reference to the essential JavaScript concepts, best practices, and code examples you need while building web projects or preparing for interviews.

Whether you're a beginner or an experienced developer, use this summary to quickly review key JavaScript topics, syntax, and real-world tips.

---

## Table of Contents

- [Introduction to JavaScript](#1-introduction-to-javascript)
- [Embedding JavaScript in HTML](#2-embedding-javascript-in-html-script-tag)
- [JavaScript Values and Variables](#3-javascript-values-and-variables)

## 1. Introduction to JavaScript

JavaScript is a **versatile, high-level, and interpreted programming language** primarily used to make web pages interactive. Alongside HTML and CSS, it is one of the three core technologies of the World Wide Web. It enables dynamic content, multimedia control, animated images, and much more.

### What is JavaScript used for?

1. **Web Development (Frontend):**
    - **Interactivity:** Adding dynamic behavior to web pages (e.g., form validation, interactive maps, animations, sliders).
    - **DOM Manipulation:** Modifying the structure, style, and content of a web page after it has loaded.
    - **Asynchronous Operations:** Making requests to servers without reloading the entire page (AJAX, Fetch API).
    - **Single-Page Applications (SPAs):** Building complex web applications that load a single HTML page and dynamically update content as the user interacts (e.g., React, Angular, Vue.js).
2. **Web Development (Backend - Node.js):**
    - **Server-Side Logic:** Building server applications, APIs, and microservices.
    - **Database Interaction:** Connecting to databases (e.g., MongoDB, PostgreSQL).
    - **Real-time Applications:** Creating chat applications, live dashboards, etc.
3. **Mobile App Development:**
    - Using frameworks like React Native to build cross-platform mobile applications.
4. **Desktop App Development:**
    - **Cross-Platform Frameworks:** Using frameworks like Electron to build cross-platform desktop applications.
    - **Databases:** Storing and managing data (e.g., SQLite, PostgreSQL)

### Key Concepts in JavaScript

- **Variables:** Containers for storing data (e.g., `let`, `const`, `var`).
- **Data Types:** Different types of values JavaScript can work with (e.g., `string`, `number`, `boolean`, `object`, `array`, `null`, `undefined`).
- **Operators:** Symbols that perform operations on values and variables (e.g., arithmetic, assignment, comparison, logical).
- **Control Flow:** Statements that control the order of execution (e.g., `if/else`, `switch`, `for`, `while`).
- **Functions:** Blocks of reusable code that perform a specific task.
- **Objects:** Collections of key-value pairs, representing real-world entities.
- **Arrays:** Ordered lists of values.
- **DOM (Document Object Model):** A programming interface for HTML and XML documents. It represents the page structure and allows JavaScript to access and manipulate it.
- **Events:** Actions that happen in the browser (e.g., `click`, `mouseover`, `keydown`), which JavaScript can listen for and respond to.

### Basic JavaScript Syntax Example

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/

// Declare a variable
let message = "Hello, JavaScript!";

// Log to the console
console.log(message);

// Define a function
function greet(name) {
  return `Hello, ${name}!`;
}

// Call the function and log the result
console.log(greet("World"));

// Manipulate the DOM (example)
// document.getElementById('myElement').textContent = 'New Content';

```

### How JavaScript is Executed

- **Browser:** JavaScript code is executed by the browser's JavaScript engine (e.g., V8 for Chrome, SpiderMonkey for Firefox).
- **Node.js:** Node.js is a runtime environment that allows JavaScript to be executed outside of a web browser, typically on a server.

### Further Learning

- **MDN Web Docs:** A comprehensive resource for web technologies.
- **freeCodeCamp:** Interactive coding lessons and projects.
- **The Odin Project:** A full-stack curriculum for web development.

## 2. Embedding JavaScript in HTML (`<script>` tag)

JavaScript code is integrated into HTML documents using the `<script>` tag. This tag tells the browser that the content within it, or the file it points to, is JavaScript code that needs to be executed. There are several ways to embed JavaScript:

### 1. Internal JavaScript (Inline Script)

You can place JavaScript code directly within the HTML document using `<script>` tags. This is suitable for small amounts of script that are specific to a single HTML page.

- **Placement:** Typically placed within the `<head>` or `<body>` section of the HTML.
- **In `<head>`:** Scripts here are executed before the page content is rendered. This can be useful for functions or variables that need to be available globally early on, but can block page rendering if the script is large or performs complex operations.
- **At the end of `<body>`:** This is generally the recommended practice. Scripts placed here execute after the HTML content has been parsed and rendered, ensuring that all HTML elements are available for manipulation by JavaScript. This prevents blocking the rendering of the page.

- **Syntax:**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Internal JavaScript Example</title>
        <script>
            // JavaScript code here
            console.log("Script in head executed!");
        </script>
    </head>
    <body>
        <h1>Hello from HTML!</h1>
        <p id="demo">This text will be changed by JavaScript.</p>
    
        <script>
            // JavaScript code here
            document.getElementById('demo').textContent = 'This text was changed by internal JavaScript!';
            console.log("Script at end of body executed!");
        </script>
    </body>
    </html>
    
    ```

### 2. External JavaScript

For larger projects, or when you want to reuse JavaScript code across multiple HTML pages, it's best to place your JavaScript in separate `.js` files. This keeps your HTML clean and improves maintainability and caching.

- **Syntax:** Use the `src` attribute of the `<script>` tag to specify the path to your external JavaScript file.
- **Example:**

    Let's say you have a file named `script.js` with the following content:

    ```javascript
    // script.js
    console.log("Hello from external JavaScript!");
    
    function changeHeading() {
        document.querySelector('h1').textContent = 'Heading changed by external JS!';
    }
    
    // Call the function when the page loads
    window.onload = changeHeading;
    
    ```

  Then, in your HTML file:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>External JavaScript Example</title>
        <!-- Link to external JavaScript file -->
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Original Heading</h1>
        <p>This page uses an external JavaScript file.</p>
    </body>
    </html>
    
    ```

    **Note:** The `script.js` file should be in the same directory as your HTML file, or you should provide the correct relative or absolute path.

### 3. Inline Event Handlers (Discouraged)

JavaScript can also be embedded directly into HTML attributes as event handlers. While possible, this practice is generally **discouraged** as it mixes HTML structure with JavaScript behavior, making the code harder to read, maintain, and debug.

- **Syntax:**

    ```javascript
    <button onclick="alert('Button clicked!');">Click Me</button>
    
    ```

- **Best Practice Alternative:** Attach event listeners using JavaScript itself (e.g., `addEventListener`).

    ```javascript
    <button id="myButton">Click Me (Better Way)</button>
    <script>
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Button clicked using addEventListener!');
        });
    </script>
    
    ```

### Important Attributes for `<script>` Tag

- **`src`:** Specifies the URL of an external script file.
- **`type`:** (Deprecated for JavaScript) Historically used to indicate the scripting language (e.g., `type="text/javascript"`). Modern browsers assume JavaScript by default, so it's usually omitted.
- **`defer`:** (Boolean attribute) Specifies that the script should be executed after the HTML document has been parsed. This is similar to placing the script at the end of the `<body>`, but it can be used in the `<head>`. The order of execution for deferred scripts is maintained.

    ```javascript
    <script src="script.js" defer></script>
    
    ```

- **`async`:** (Boolean attribute) Specifies that the script should be executed asynchronously (in parallel with parsing the HTML). The script will execute as soon as it's downloaded, without waiting for the HTML parsing to complete or for other scripts. The order of execution for async scripts is _not_ guaranteed.

    ```javascript
    <script src="script.js" async></script>
    
    ```

### Key Considerations

- **Performance:** Placing `<script>` tags at the end of the `<body>` or using `defer` or `async` attributes helps improve page load performance by preventing JavaScript from blocking the rendering of HTML content.
- **Separation of Concerns:** Keep HTML (structure), CSS (presentation), and JavaScript (behavior) in separate files for better organization and maintainability.
- **Error Handling:** Be mindful of where your scripts are placed, especially if they manipulate the DOM. If a script tries to access an element that hasn't been parsed yet, it will result in an error.

## 3. JavaScript Values and Variables

In JavaScript, **values** are the fundamental pieces of data that a program works with, while **variables** are named containers used to store and manage these values. Understanding how values are represented and how variables hold them is crucial for writing any JavaScript code.

### JavaScript Values (Data Types)

JavaScript is a dynamically typed language, meaning you don't have to explicitly declare the data type of a variable. The type is determined automatically at runtime. JavaScript has several built-in data types:

1.**Primitive Values:** These are simple, immutable data types.

- **`String`**: Represents textual data. Enclosed in single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` `` for template literals).

    ```javascript
        let greeting = "Hello, world!";
        let name = 'Alice';
        let message = `You are ${2025 - 2000} years old.`; // Template literal
        console.log(greeting); // Output: "Hello, world!"
        console.log(name); // Output: 'Alice'
        console.log(message); // Output: "You are 25 years old."

        ```
- **`Number`**: Represents both integer and floating-point numbers.

    ```javascript
        let age = 30;
        let price = 99.99;
        let bigNumber = 1e6; // 1,000,000
        
        ```
        
- **`Boolean`**: Represents a logical entity and can have two values: `true` or `false`.

    ```javascript
        let isActive = true;
        let hasPermission = false;
        
        ```
        
- **`Undefined`**: Represents a variable that has been declared but has not yet been assigned a value.

    ```javascript
        let quantity; // quantity is undefined
        console.log(quantity); // Output: undefined
        
        ```
        
- **`Null`**: Represents the intentional absence of any object value. It's a primitive value.

    ```javascript
        let selectedItem = null; // No item selected
        
        ```
        
- **`Symbol`** (ES6): Represents a unique identifier.

    ```javascript
        const id = Symbol('uniqueId');
        const anotherId = Symbol('uniqueId');
        console.log(id === anotherId); // Output: false
        
        ```

- **`BigInt`** (ES2020): Represents whole numbers larger than `2^53 - 1`, which is the largest number JavaScript can reliably represent with the `Number` type.

    ```javascript
        const largeNumber = 9007199254740991n; // 'n' suffix makes it a BigInt  
        console.log(largeNumber); // Output: 9007199254740991n

    ```

2.**Non-Primitive (Reference) Value:**

- **`Object`**: A complex data type that allows you to store collections of data and more complex entities. Objects are mutable and are stored by reference.

- **Plain Objects**: Key-value pairs.

    ```javascript
            let person = {
                firstName: "John",
                lastName: "Doe",
                age: 30
            };
            
            ```
            
- **Arrays**: Ordered lists of values (a special type of object).

    ```javascript
            let colors = ["red", "green", "blue"];
            let numbers = [1, 2, 3, 4, 5];
            
            ```
            
- **Functions**: Callable objects that execute a block of code.

    ```javascript
            function add(a, b) {
                return a + b;
            }
            
            ```
            

### JavaScript Variables

Variables are used to store data values. Before using a variable, it must be declared. JavaScript provides three keywords for declaring variables: `var`, `let`, and `const`.

1. **`var` (Legacy Declaration)**

    - **Scope:** Function-scoped. If declared outside a function, it's global. If declared inside a function, it's local to that function.
    - **Hoisting:**  `var` declarations are "hoisted" to the top of their scope, meaning you can use a `var` variable before it's declared in the code (though its value will be `undefined`).
    - **Re-declaration:** Can be re-declared within the same scope without an error.
    - **Re-assignment:** Can be re-assigned.
    - **Recommendation:** Generally discouraged in modern JavaScript due to its confusing scoping rules (lack of block-scoping).

    ```javascript
    var x = 10;
    function exampleVar() {
        var x = 20; // Different x, function-scoped
        console.log(x); // Output: 20
        if (true) {
            var y = 30; // Still function-scoped, not block-scoped
        }
        console.log(y); // Output: 30 (y is accessible here)
    }
    exampleVar();
    console.log(x); // Output: 10
    
    ```

2. **`let` (Modern Declaration - ES6+)**
    - **Scope:** Block-scoped. Variables declared with `let` are only accessible within the block (`{}`) where they are defined.
    - **Hoisting:**  `let` declarations are also hoisted, but they are in a "temporal dead zone" until their actual declaration. This means you cannot access them before they are declared in the code.
    - **Re-declaration:** Cannot be re-declared within the same scope.
    - **Re-assignment:** Can be re-assigned.
    - **Recommendation:** Preferred for variables whose values might change.

    ```javascript
    let a = 10;
    function exampleLet() {
        let a = 20; // Different a, function-scoped
        console.log(a); // Output: 20
        if (true) {
            let b = 30; // Block-scoped
            console.log(b); // Output: 30
        }
        // console.log(b); // Error: b is not defined (outside its block)
    }
    exampleLet();
    console.log(a); // Output: 10
    
    ```

3. **`const` (Modern Declaration - ES6+)**
    - **Scope:** Block-scoped, similar to `let`.
    - **Hoisting:** Similar to `let`, in a temporal dead zone until declared.
    - **Re-declaration:** Cannot be re-declared within the same scope.
    - **Re-assignment:** Cannot be re-assigned _after_ its initial assignment. You must initialize a `const` variable when you declare it.
    - **Important Note for Objects/Arrays:** While the `const` variable itself cannot be re-assigned, if it holds an object or an array, the _contents_ of that object or array _can_ be modified.
    - **Recommendation:** Preferred for variables whose values are not expected to change, promoting immutability and making code more predictable.

    ```javascript
    const PI = 3.14159;
    // PI = 3.14; // Error: Assignment to constant variable.
    
    const user = { name: "Jane", age: 25 };
    user.age = 26; // This is allowed (modifying object content)
    console.log(user); // Output: { name: "Jane", age: 26 }
    
    // user = { name: "John" }; // Error: Assignment to constant variable.
    
    const numbers = [1, 2, 3];
    numbers.push(4); // This is allowed (modifying array content)
    console.log(numbers); // Output: [1, 2, 3, 4]
    // numbers = [10, 20]; // Error: Assignment to constant variable.
    ```

### Key Takeaways

- **Values** are the data, categorized into primitive and non-primitive types.
- **Variables** are named containers for values.
- Use `let` for variables that will be re-assigned.
- Use `const` for variables that should not be re-assigned (and for objects/arrays whose reference should not change).
- Avoid `var` in new code.
- Understanding scope (`block` vs. `function`) is crucial for avoiding bugs.

## 4. JavaScript Variable Declarations: `var`, `let`, and `const`

In JavaScript, variables are used to store data values. The way you declare a variable significantly impacts its **scope**, **hoisting behavior**, and whether it can be **re-declared** or **re-assigned**. Modern JavaScript (ES6 and later) introduced `let` and `const` to address some of the complexities and potential pitfalls associated with the older `var` keyword.

### 1. `var` (Legacy Declaration)

`var` was the only way to declare variables in JavaScript before ES6. While still functional, it has certain characteristics that make it less predictable and prone to errors in larger codebases, leading to its general discouragement in modern development.

1. **Scope:**  `var` is **function-scoped**.

    - If declared inside a function, it's local to that function and not accessible outside it.
    - If declared outside any function, it's global and accessible throughout the entire script.
    - Crucially, `var` does _not_ respect block scope (e.g., `if` blocks, `for` loops).

2. **Hoisting:**  `var` declarations are "hoisted" to the top of their containing function or global scope during the compilation phase. This means the declaration is processed before the code execution.

    - You can use a `var` variable before its physical declaration in the code. However, its value will be `undefined` until the line where it's assigned a value is executed.
    - **Re-declaration:** A `var` variable can be re-declared within the same scope without causing an error. This can lead to accidental overwriting of variables.
    - **Re-assignment:** A `var` variable can be re-assigned to a new value at any point after its declaration.
    - **Recommendation:** Generally **discouraged** in modern JavaScript due to its confusing scoping rules and the potential for unexpected behavior, especially with hoisting and re-declaration.

**Example:**

```javascript
// Global scope
var globalVar = "I am global";
console.log(globalVar); // Output: I am global

function exampleVar() {
    // Function scope
    var funcVar = "I am function-scoped";
    console.log(funcVar); // Output: I am function-scoped

    if (true) {
        var blockVar = "I am block-scoped?"; // Actually function-scoped due to var
        console.log(blockVar); // Output: I am block-scoped?
    }
    console.log(blockVar); // Output: I am block-scoped? (Accessible outside the if block)

    // Re-declaration is allowed
    var funcVar = "I am re-declared";
    console.log(funcVar); // Output: I am re-declared
}

exampleVar();
// console.log(funcVar); // Error: funcVar is not defined (outside function scope)
// console.log(blockVar); // Error: blockVar is not defined (outside function scope)

// Hoisting example
console.log(hoistedVar); // Output: undefined (declaration is hoisted, but not assignment)
var hoistedVar = "I was hoisted";
console.log(hoistedVar); // Output: I was hoisted

```

### 2. `let` (Modern Declaration - ES6+)

`let` was introduced in ES6 (ECMAScript 2015) to provide block-scoping, offering more predictable variable behavior than `var`.

- **Scope:**  `let` is **block-scoped**.

  - A variable declared with `let` is only accessible within the block (`{}`) where it is defined. This includes `if` blocks, `for` loops, `while` loops, and function blocks.

- **Hoisting:**  `let` declarations are also hoisted, but they are placed in a "temporal dead zone" (TDZ) from the start of their block until their actual declaration line.

  - Attempting to access a `let` variable before its declaration within its scope will result in a `ReferenceError`. This helps catch potential bugs early.

- **Re-declaration:** A `let` variable **cannot** be re-declared within the same scope. This prevents accidental overwriting of variables.

- **Re-assignment:** A `let` variable can be re-assigned to a new value at any point after its declaration.

- **Recommendation:** Preferred for variables whose values are expected to change during the execution of a program.

**Example:**

```javascript
let counter = 0;
console.log(counter); // Output: 0

function exampleLet() {
    let funcLet = "I am function-scoped with let";
    console.log(funcLet); // Output: I am function-scoped with let

    if (true) {
        let blockLet = "I am truly block-scoped";
        console.log(blockLet); // Output: I am truly block-scoped
    }
    // console.log(blockLet); // Error: blockLet is not defined (outside its block)

    // let funcLet = "Re-declaring is not allowed"; // Error: Identifier 'funcLet' has already been declared
}

exampleLet();

// Temporal Dead Zone example
// console.log(tdzVar); // Error: Cannot access 'tdzVar' before initialization
let tdzVar = "I am in the TDZ until here";
console.log(tdzVar); // Output: I am in the TDZ until here

```

### 3. `const` (Modern Declaration - ES6+)

`const` was also introduced in ES6, primarily for declaring constants or variables whose values should not change after initialization.

- **Scope:**  `const` is **block-scoped**, just like `let`.

- **Hoisting:** Similar to `let`, `const` declarations are hoisted but are in a temporal dead zone until their declaration. You must initialize a `const` variable at the time of its declaration.

- **Re-declaration:** A `const` variable **cannot** be re-declared within the same scope.

- **Re-assignment:** A `const` variable **cannot** be re-assigned after its initial assignment. This is its primary distinguishing feature.

- **Important Note for Objects and Arrays:** While the `const` keyword prevents re-assignment of the variable itself, it does _not_ prevent modification of the _contents_ of an object or array that the `const` variable holds. This is because `const` ensures the variable's _reference_ remains constant, not the data it points to (for non-primitive types).

- **Recommendation:** Preferred for variables whose values are not expected to change throughout the program's execution, promoting immutability and making code more predictable and easier to reason about.

**Example:**

```javascript
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// PI = 3.0; // Error: Assignment to constant variable.

function exampleConst() {
    const MY_CONSTANT = "Fixed value";
    console.log(MY_CONSTANT); // Output: Fixed value

    if (true) {
        const innerConst = "Another fixed value";
        console.log(innerConst); // Output: Another fixed value
    }
    // console.log(innerConst); // Error: innerConst is not defined (outside its block)
}

exampleConst();

// Modifying object/array content with const
const user = {
    name: "Alice",
    age: 30
};
user.age = 31; // Allowed: Modifying a property of the object
console.log(user); // Output: { name: "Alice", age: 31 }

// user = { name: "Bob", age: 25 }; // Error: Assignment to constant variable.

const numbers = [1, 2, 3];
numbers.push(4); // Allowed: Adding an element to the array
console.log(numbers); // Output: [1, 2, 3, 4]

// numbers = [5, 6]; // Error: Assignment to constant variable.

```

### Summary Comparison

| Feature         | `var`                          | `let`                                     | `const`                                               |
|-----------------|--------------------------------|--------------------------------------------|--------------------------------------------------------|
| **Scope**       | Function-scoped                | Block-scoped                               | Block-scoped                                           |
| **Hoisting**    | Yes (initializes to `undefined`) | Yes (in Temporal Dead Zone until declared) | Yes (in Temporal Dead Zone until declared)             |
| **Re-declaration** | Yes                         | No                                         | No                                                     |
| **Re-assignment**  | Yes                         | Yes                                        | No (for primitive values; allowed for objects/arrays)  |
| **Initialization** | Optional                   | Optional                                   | Required                                               |
| **Best Practice**  | Avoid in new code           | Use when value changes                     | Use when value is constant                             |

## 5.  Primitive Data Types in JavaScript

JavaScript categorizes data into two main types: **primitive** and **non-primitive (or object)**. Primitive data types are fundamental, immutable values that are not objects and have no methods. When you assign a primitive value to a variable, you're directly storing that value.

There are seven primitive data types in JavaScript:

1. `string`
2. `number`
3. `bigint`
4. `boolean`
5. `undefined`
6. `symbol`
7. `null`

Let's explore each one in detail with examples.

### 1. `string`

A `string` represents a sequence of characters, such as text. Strings are immutable, meaning once a string is created, its content cannot be changed. Any operation that appears to modify a string actually creates a new string.

**Characteristics:**

- Enclosed in single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``).
- Backticks allow for template literals, which support embedded expressions (interpolation) and multi-line strings.

**Examples:**

```javascript
// Single quotes
let firstName = 'John';
console.log(typeof firstName); // Output: "string"

// Double quotes
let lastName = "Doe";
console.log(typeof lastName);  // Output: "string"

// Template literals (backticks)
let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting); // Output: "Hello, John Doe!"

let multiLineString = `This is a
multi-line
string.`;
console.log(multiLineString);

// Immutability example
let originalString = "hello";
originalString.toUpperCase(); // This does NOT change originalString
console.log(originalString); // Output: "hello"

let newString = originalString.toUpperCase();
console.log(newString);     // Output: "HELLO"

```

### 2. `number`

The `number` type represents both integer and floating-point numbers. JavaScript uses a 64-bit floating-point format (IEEE 754 standard).

**Characteristics:**

- Supports standard arithmetic operations.
- Special numeric values: `Infinity` (positive infinity), `-Infinity` (negative infinity), and `NaN` (Not-a-Number). `NaN` results from invalid mathematical operations (e.g., `0 / 0`).

**Examples:**

```javascript
// Integer
let age = 30;
console.log(typeof age); // Output: "number"

// Floating-point number
let price = 19.99;
console.log(typeof price); // Output: "number"

// Arithmetic operations
let sum = age + price;
console.log(sum); // Output: 49.99

// Special numeric values
let result1 = 10 / 0;
console.log(result1); // Output: Infinity

let result2 = -10 / 0;
console.log(result2); // Output: -Infinity

let result3 = "hello" / 2;
console.log(result3); // Output: NaN
console.log(typeof result3); // Output: "number" (NaN is still a number type)

```

### 3. `bigint`

`bigint` is a relatively new primitive type (introduced in ES2020) that can represent whole numbers larger than 253−1 (the maximum safe integer for `number` type) or smaller than −(253−1).

**Characteristics:**

- Created by appending `n` to an integer literal or by calling the `BigInt()` constructor.
- Cannot be mixed with `number` types in arithmetic operations directly. You must convert one to the other explicitly.

**Examples:**

```javascript
// Creating a BigInt
let largeNumber = 9007199254740991n; // Appending 'n'
console.log(typeof largeNumber); // Output: "bigint"

let evenLargerNumber = BigInt("9007199254740991234567890");
console.log(evenLargerNumber); // Output: 9007199254740991234567890n

// Regular number vs BigInt
let maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger); // Output: 9007199254740991

let beyondSafe = maxSafeInteger + 1;
console.log(beyondSafe); // Output: 9007199254740992 (accurate)

let beyondSafePlusOne = maxSafeInteger + 2;
console.log(beyondSafePlusOne); // Output: 9007199254740992 (inaccurate due to precision limits)

let correctBeyondSafePlusOne = BigInt(maxSafeInteger) + 2n;
console.log(correctBeyondSafePlusOne); // Output: 9007199254740993n (accurate)

// Cannot mix BigInt and Number directly
// let mixedSum = largeNumber + 10; // Throws TypeError: Cannot mix BigInt and other types

let convertedSum = largeNumber + BigInt(10);
console.log(convertedSum); // Output: 9007199254741001n

```

### 4. `boolean`

The `boolean` type represents a logical entity and can have only two values: `true` or `false`. It is fundamental for conditional logic.

**Characteristics:**

- Used in conditional statements (`if`, `else if`, `else`), loops (`for`, `while`), and logical operations (`&&`, `||`, `!`).
- Many values can be implicitly converted to booleans in a "truthy" or "falsy" context.

**Falsy Values:**

- `false
- `0` (number zero)
- `-0` (negative zero)
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

All other values are considered "truthy."

**Examples:**

```javascript
let isActive = true;
console.log(typeof isActive); // Output: "boolean"

let hasPermission = false;
console.log(typeof hasPermission); // Output: "boolean"

if (isActive) {
    console.log("User is active.");
} else {
    console.log("User is inactive.");
}

// Truthy and Falsy examples
if ("hello") { // "hello" is truthy
    console.log("This will run.");
}

if (0) { // 0 is falsy
    console.log("This will NOT run.");
}

if ([]) { // Empty array is truthy (even though it's empty)
    console.log("Empty array is truthy.");
}

if ({}) { // Empty object is truthy
    console.log("Empty object is truthy.");
}

```

### 5. `undefined`

The `undefined` type signifies that a variable has been declared but has not yet been assigned a value. It's also the default return value for functions that don't explicitly return anything.

**Characteristics:**

- Automatically assigned to newly declared variables that are not initialized.
- A function that doesn't have a `return` statement explicitly returns `undefined`.
- Accessing a non-existent object property also yields `undefined`.

**Examples:**

```javascript
let myVariable; // Declared but not initialized
console.log(myVariable); // Output: undefined
console.log(typeof myVariable); // Output: "undefined"

function doNothing() {
    // No return statement
}
let result = doNothing();
console.log(result); // Output: undefined

let myObject = {
    name: "Alice"
};
console.log(myObject.age); // Output: undefined (property 'age' does not exist)

// Comparing with undefined
console.log(myVariable === undefined); // Output: true

```

### 6. `symbol`

The `symbol` type (introduced in ES6/ES2015) is a unique and immutable data type that can be used as the key of an object property. Each `Symbol` value is unique, even if created with the same description.

**Characteristics:**

- Created using the `Symbol()` constructor (not `new Symbol()`).
- Primarily used to create unique object property keys to avoid name collisions, especially when extending objects or working with third-party code.
- Symbols are not enumerable by `for...in` loops or `Object.keys()`, `Object.values()`, `Object.entries()`. They can be found using `Object.getOwnPropertySymbols()`.

**Examples:**

```javascript
// Creating Symbols
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1);        // Output: Symbol(id)
console.log(id2);        // Output: Symbol(id)
console.log(id1 === id2); // Output: false (they are unique)
console.log(typeof id1); // Output: "symbol"

// Using Symbols as object keys
let user = {
    name: "Bob",
    [id1]: 123
};

user[id2] = 456; // This creates a new property with a different Symbol key

console.log(user);
// Output: { name: 'Bob', [Symbol(id)]: 123, [Symbol(id)]: 456 }

console.log(user[id1]); // Output: 123
console.log(user[id2]); // Output: 456

// Symbols are not enumerated by standard methods
for (let key in user) {
    console.log(key); // Output: name
}

console.log(Object.keys(user)); // Output: ["name"]
console.log(Object.getOwnPropertySymbols(user)); // Output: [Symbol(id), Symbol(id)]

```

### 7. `null`

The `null` type represents the intentional absence of any object value. It is a primitive value.

**Characteristics:**

- It's a "placeholder" for "no value" or "nothing."
- It's often used to explicitly indicate that a variable currently holds no meaningful object reference.
- A long-standing quirk in JavaScript is that `typeof null` returns `"object"`. This is a historical bug and does not mean `null` is an object.

**Examples:**

```javascript
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: "object" (historical quirk, not an actual object)

let userProfile = {
    name: "Charlie",
    email: "charlie@example.com",
    phone: null // Explicitly indicating no phone number
};

console.log(userProfile.phone); // Output: null

// Difference between null and undefined
let a;
let b = null;

console.log(a == b);  // Output: true (loose equality, null and undefined are considered equal)
console.log(a === b); // Output: false (strict equality, different types)

```

### Immutability of Primitives

A key concept for primitive types is their **immutability**. This means that the value itself cannot be changed after it's created. When you perform an operation that seems to modify a primitive, you are actually creating a _new_ primitive value.

**Example:**

```javascript
let myString = "hello";
myString = myString + " world"; // This doesn't modify "hello"; it creates a new string "hello world"
                               // and assigns it to myString.

let myNumber = 10;
myNumber = myNumber + 5; // This doesn't modify 10; it creates a new number 15
                         // and assigns it to myNumber.

```

Understanding primitive data types is fundamental to grasping how JavaScript manages values and memory, especially when contrasting them with non-primitive (object) types, which are mutable and passed by reference.

## 6. Operators and Expressions in JavaScript

In JavaScript, **operators** are special symbols or keywords that perform operations on one or more values (called **operands**) and return a result. **Expressions** are combinations of values, variables, operators, and function calls that JavaScript can evaluate to produce a single value. Essentially, operators are the building blocks that allow you to create meaningful expressions.

Understanding operators and expressions is crucial for writing any functional JavaScript code, as they enable computation, comparison, logical decision-making, and more.

### What is an Expression?

An **expression** is any valid unit of code that resolves to a value. This means that when JavaScript encounters an expression, it evaluates it and produces a result.

**Examples of Expressions:**

- `10` (a literal value, which is an expression)
- `"hello"` (a string literal)
- `x` (a variable, which evaluates to its stored value)
- `10 + 5` (an arithmetic expression)
- `x > 5` (a comparison expression)
- `myFunction()` (a function call expression)
- `a = b + c` (an assignment expression)

#### Types of Operators

JavaScript provides a rich set of operators, which can be categorized based on the type of operation they perform and the number of operands they take.

##### 1. Assignment Operators

Assignment operators are used to assign values to variables. The most common is the simple assignment operator (`=`). There are also compound assignment operators that combine an arithmetic or bitwise operation with assignment.

| Operator | Example     | Equivalent to | Description                                               |
|----------|-------------|----------------|-----------------------------------------------------------|
| `=`      | `x = 10`    | –              | Assigns the value of the right operand to the left operand. |
| `+=`     | `x += 5`    | `x = x + 5`    | Adds the right operand to the left operand and assigns the result. |
| `-=`     | `x -= 3`    | `x = x - 3`    | Subtracts the right operand from the left operand and assigns the result. |
| `*=`     | `x *= 2`    | `x = x * 2`    | Multiplies the left operand by the right operand and assigns the result. |
| `/=`     | `x /= 4`    | `x = x / 4`    | Divides the left operand by the right operand and assigns the result. |
| `%=`     | `x %= 3`    | `x = x % 3`    | Assigns the remainder of the division.                    |
| `**=`    | `x **= 2`   | `x = x ** 2`   | Assigns the result of exponentiation.                     |

**Examples:**

```javascript
let a = 10;
console.log(a); // Output: 10

a += 5; // a is now 15
console.log(a); // Output: 15

a *= 2; // a is now 30
console.log(a); // Output: 30

let b = 7;
b %= 3; // b is now 1 (remainder of 7 / 3)
console.log(b); // Output: 1

```

#### 2. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Description                             |
|----------|-----------------------------------------|
| `+`      | Addition                                |
| `-`      | Subtraction                             |
| `*`      | Multiplication                          |
| `/`      | Division                                |
| `%`      | Modulus (remainder of division)         |
| `**`     | Exponentiation (ES2016)                 |
| `++`     | Increment (increments operand by 1)     |
| `--`     | Decrement (decrements operand by 1)     |

**Note on `++` and `--`:**

- **Prefix (`++x`, `--x`):** Increments/decrements the value _before_ using it in the expression.
- **Postfix (`x++`, `x--`):** Increments/decrements the value _after_ using it in the expression.

**Examples:**

```javascript
let num1 = 20;
let num2 = 5;

console.log(num1 + num2); // Output: 25
console.log(num1 - num2); // Output: 15
console.log(num1 * num2); // Output: 100
console.log(num1 / num2); // Output: 4
console.log(num1 % num2); // Output: 0 (20 divided by 5 has no remainder)
console.log(2 ** 3);      // Output: 8 (2 to the power of 3)

let i = 0;
console.log(++i); // Output: 1 (i becomes 1, then used)
console.log(i);   // Output: 1

let j = 0;
console.log(j++); // Output: 0 (j is used as 0, then becomes 1)
console.log(j);   // Output: 1

```

#### 3. Comparison Operators

Comparison operators compare two values and return a `boolean` (`true` or `false`) result.

| Operator | Description                                                       |
|----------|-------------------------------------------------------------------|
| `==`     | Equal to (checks value, performs type coercion)                   |
| `===`    | Strict equal to (checks value AND type, no type coercion)         |
| `!=`     | Not equal to (checks value, performs type coercion)               |
| `!==`    | Strict not equal to (checks value AND type, no type coercion)     |
| `>`      | Greater than                                                      |
| `<`      | Less than                                                         |
| `>=`     | Greater than or equal to                                          |
| `<=`     | Less than or equal to                                             |

  **Important Note on `==` vs. `===`:**

- `==` (loose equality) attempts to convert the operands to the same type before comparison. This can lead to unexpected results (e.g., `0 == false` is `true`).
- `===` (strict equality) compares values without type conversion. If the types are different, it returns `false`. This is generally preferred for predictability.

**Examples:**

```javascript
let x = 10;
let y = "10";
let z = 20;

console.log(x == y);   // Output: true (value is same, type coercion happens)
console.log(x === y);  // Output: false (value is same, but types are different)

console.log(x != z);   // Output: true
console.log(x !== y);  // Output: true

console.log(x > 5);    // Output: true
console.log(z < 15);   // Output: false
console.log(x >= 10);  // Output: true
console.log(z <= 20);  // Output: true

```

#### 4. Logical Operators

Logical operators are used to combine or negate boolean expressions. They often return a boolean value, but can also return one of the operand values.

| Operator | Description                                                                                      |
|----------|--------------------------------------------------------------------------------------------------|
| `&&`     | Logical AND (returns `true` if both operands are truthy; otherwise, returns the first falsy operand or the last operand) |
| `||`     | Logical OR (returns `true` if at least one operand is truthy; otherwise, returns the last falsy operand) |
| `!`      | Logical NOT (inverts the boolean value of the operand)                                           |

**Short-Circuit Evaluation:**  `&&` and `||` perform "short-circuit evaluation."

- For `&&`, if the first operand is falsy, the second operand is not evaluated.
- For `||`, if the first operand is truthy, the second operand is not evaluated.

**Examples:**

```javascript
let age = 25;
let hasLicense = true;

// Logical AND
console.log(age > 18 && hasLicense); // Output: true (both conditions are true)
console.log(age < 18 && hasLicense); // Output: false (first condition is false)

// Logical OR
console.log(age > 30 || hasLicense); // Output: true (hasLicense is true)
console.log(age < 18 || !hasLicense); // Output: false (both conditions are false)

// Logical NOT
console.log(!hasLicense); // Output: false (inverts true)

// Short-circuiting example
let user = null;
let userName = user && user.name; // user is null (falsy), so user.name is not accessed
console.log(userName); // Output: null

let defaultName = user || "Guest"; // user is null (falsy), so "Guest" is returned
console.log(defaultName); // Output: "Guest"

```

#### 5. Bitwise Operators (Advanced)

Bitwise operators perform operations on the binary representations of numbers. They are less commonly used in typical web development but are important for low-level operations or specific algorithms.

| Operator | Description                          |
|----------|--------------------------------------|
| `&`      | Bitwise AND                          |
| `|`      | Bitwise OR                           |
| `^`      | Bitwise XOR                          |
| `~`      | Bitwise NOT                          |
| `<<`     | Left shift                           |
| `>>`     | Sign-propagating right shift         |
| `>>>`    | Zero-fill right shift                |

**Example:**

```javascript
let num = 5;  // Binary: 0101
let mask = 3; // Binary: 0011

console.log(num & mask); // Output: 1 (Binary: 0001)
console.log(num | mask); // Output: 7 (Binary: 0111)
console.log(num << 1);   // Output: 10 (Binary: 1010 - shifts bits left by 1)

```

#### 6. String Operators

The `+` operator can also be used for string concatenation.

| Operator | Description                               |
|----------|-------------------------------------------|
| `+`      | Concatenates (joins) two or more strings. |

  **Examples:**

```javascript
let greeting = "Hello";
let name = "World";
let message = greeting + " " + name + "!";
console.log(message); // Output: "Hello World!"

let numString = "10" + 5; // Number 5 is coerced to a string "5"
console.log(numString);   // Output: "105"
console.log(typeof numString); // Output: "string"

```

#### 7. Unary Operators

Unary operators operate on a single operand.

| Operator  | Description                                                               |
|-----------|---------------------------------------------------------------------------|
| `+`       | Unary plus (attempts to convert operand to a number)                      |
| `-`       | Unary negation (negates the operand)                                      |
| `typeof`  | Returns a string indicating the data type of the operand                  |
| `delete`  | Deletes an object's property or an element from an array                  |
| `void`    | Evaluates an expression and returns `undefined`                           |

**Examples:**

```javascript
let strNum = "123";
console.log(+strNum);       // Output: 123 (converted to number)
console.log(typeof +strNum); // Output: "number"

let val = 50;
console.log(-val);          // Output: -50

let myVar = "some text";
console.log(typeof myVar);  // Output: "string"
console.log(typeof 123);    // Output: "number"
console.log(typeof true);   // Output: "boolean"

let myObject = { a: 1, b: 2 };
console.log(myObject.a);    // Output: 1
delete myObject.a;
console.log(myObject.a);    // Output: undefined

console.log(void(1 + 2));   // Output: undefined (evaluates 1+2, but returns undefined)

```

#### 8.Conditional (Ternary) Operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands. It's a shorthand for an `if...else` statement.

**Syntax:**  `condition ? expressionIfTrue : expressionIfFalse`

**Examples:**

```javascript
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

let price = 100;
let discount = (price > 50) ? price * 0.10 : 0;
console.log(discount); // Output: 10

```

#### 9. `instanceof` Operator

The `instanceof` operator checks if an object is an instance of a particular class or constructor function.

**Syntax:**  `object instanceof constructor`

**Examples:**

```javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array);  // Output: true
console.log(arr instanceof Object); // Output: true (arrays are objects)

let date = new Date();
console.log(date instanceof Date);  // Output: true
console.log(date instanceof Object); // Output: true

```

#### 10. `in` Operator

The `in` operator checks if a specified property is in an object (either directly or inherited through the prototype chain).

**Syntax:**  `propertyName in objectName`

**Examples:**

```javascript
let car = { make: "Toyota", model: "Camry" };

console.log("make" in car);    // Output: true
console.log("year" in car);    // Output: false
console.log("toString" in car); // Output: true (inherited from Object.prototype)

let fruits = ["apple", "banana", "cherry"];
console.log(0 in fruits);     // Output: true (index 0 exists)
console.log(3 in fruits);     // Output: false (index 3 does not exist)
console.log("length" in fruits); // Output: true (arrays have a 'length' property)

```

#### Operator Precedence and Associativity

When multiple operators are present in an expression, their evaluation order is determined by:

1. **Precedence:** Operators with higher precedence are evaluated before operators with lower precedence (e.g., multiplication `*` has higher precedence than addition `+`).
2. **Associativity:** If operators have the same precedence, associativity (left-to-right or right-to-left) determines the order of evaluation.

You can use parentheses `()` to override the default operator precedence.

**Example:**

```javascript
let result = 5 + 3 * 2; // Multiplication (3 * 2 = 6) happens first, then addition (5 + 6 = 11)
console.log(result); // Output: 11

let resultWithParentheses = (5 + 3) * 2; // Addition (5 + 3 = 8) happens first, then multiplication (8 * 2 = 16)
console.log(resultWithParentheses); // Output: 16

```

Understanding operators and expressions is foundational to writing effective and predictable JavaScript code. They are the tools you use to manipulate data and control the flow of your programs.

## 7. Conditional Expressions

### 7.1 If-Else Statements in JavaScript

Conditional statements are fundamental control flow structures in JavaScript that allow you to execute different blocks of code based on whether a specified condition evaluates to `true` or `false`. The `if-else` statement is the most common way to implement conditional logic.

#### 1. The `if` Statement

The `if` statement executes a block of code if a specified condition is `true`.

**Syntax:**

```javascript
if (condition) {
    // Code to be executed if the condition is true
}

```

**Explanation:**

- `condition`: An expression that evaluates to a boolean (`true` or `false`) value. If the expression is not a boolean, JavaScript will implicitly convert it to one (truthy/falsy).
- The code inside the curly braces `{}` (the "if block") will only run if the `condition` is `true`.

**Examples:**

```javascript
let temperature = 25;

if (temperature > 20) {
    console.log("It's a warm day!");
}
// Output: It's a warm day!

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome back, user!");
}
// Output: Welcome back, user!

let score = 75;
if (score >= 70) {
    console.log("You passed the test.");
}
// Output: You passed the test.

```

#### 2. The `else` Statement

The `else` statement provides an alternative block of code to execute if the `if` condition evaluates to `false`.

**Syntax:**

```javascript
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}

```

**Explanation:**

- If the `condition` in the `if` statement is `true`, the `if` block executes.
- If the `condition` is `false`, the `else` block executes. Only one of these blocks will ever run.

**Examples:**

```javascript
let hour = 10;

if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
// Output: Good morning! (since 10 < 12 is true)

let age = 16;

if (age >= 18) {
    console.log("You are old enough to vote.");
} else {
    console.log("You are not yet old enough to vote.");
}
// Output: You are not yet old enough to vote. (since 16 >= 18 is false)

```

#### 3. The `else if` Statement

The `else if` statement allows you to test multiple conditions sequentially. If the initial `if` condition is `false`, JavaScript moves to the `else if` condition. You can have multiple `else if` blocks.

**Syntax:**

```javascript
if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition1 is false AND condition2 is true
} else if (condition3) {
    // Code to be executed if condition1 and condition2 are false AND condition3 is true
} else {
    // Code to be executed if none of the above conditions are true
}

```

**Explanation:**

- JavaScript evaluates conditions from top to bottom.
- The first `if` or `else if` block whose condition evaluates to `true` will execute, and then the entire `if-else if-else` structure is exited.
- The final `else` block is optional and acts as a catch-all if none of the preceding `if` or `else if` conditions are met.

**Examples:**

```javascript
let grade = 85;

if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else if (grade >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: Grade: B (since 85 >= 90 is false, but 85 >= 80 is true)

let day = "Wednesday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else if (day === "Wednesday") {
    console.log("It's hump day!");
} else {
    console.log("It's a weekday.");
}
// Output: It's hump day!

```

#### 4. Nested `if-else` Statements

You can nest `if-else` statements inside other `if-else` blocks to handle more complex conditional logic.

**Example:**

```javascript
let userRole = "admin";
let isActiveUser = true;

if (userRole === "admin") {
    if (isActiveUser) {
        console.log("Admin access granted.");
    } else {
        console.log("Admin account is inactive.");
    }
} else if (userRole === "editor") {
    console.log("Editor access granted.");
} else {
    console.log("Guest access.");
}
// Output: Admin access granted.

```

#### Omitting Curly Braces (Single Statement)

If an `if`, `else if`, or `else` block contains only a single statement, you can optionally omit the curly braces. However, it's generally recommended to always use curly braces for clarity and to prevent potential bugs when adding more statements later.

**Example (not recommended practice):**

```javascript
let value = 10;

if (value > 5)
    console.log("Value is greater than 5."); // Single statement, no braces
else
    console.log("Value is 5 or less.");

```

#### Best Practices for `if-else`

- **Use curly braces:** Always use curly braces `{}` for `if`, `else if`, and `else` blocks, even for single statements, to improve readability and prevent errors.
- **Indent consistently:** Use consistent indentation to clearly show the structure of your conditional blocks.
- **Keep conditions clear:** Make your conditions as clear and concise as possible.
- **Avoid deep nesting:** Too many nested `if-else` statements can make code hard to read and maintain. Consider refactoring with early returns, `switch` statements, or logical operators if nesting becomes excessive.
- **Use strict equality (`===`):** Prefer `===` over `==` to avoid unexpected type coercion issues.

Understanding and effectively using `if-else` statements is fundamental to controlling the flow of execution in your JavaScript programs, allowing them to make decisions and respond dynamically to different conditions.

### 7.2 Ternary Operator in JavaScript

The **ternary operator** (also known as the **conditional operator**) is JavaScript's only operator that takes three operands. It provides a concise way to write conditional expressions, often serving as a shorthand for simple `if-else` statements.

#### Syntax

The syntax of the ternary operator is as follows:

```javascript
condition ? expressionIfTrue : expressionIfFalse;

```

**Explanation:**

- `condition`: An expression that evaluates to a boolean (`true` or `false`) value.
- `expressionIfTrue`: The value or expression that will be returned if the `condition` is `true`.
- `expressionIfFalse`: The value or expression that will be returned if the `condition` is `false`.

The operator evaluates the `condition`. If it's `true`, it returns the value of `expressionIfTrue`. If it's `false`, it returns the value of `expressionIfFalse`.

#### How it Works (and why it's called "Ternary")

The term "ternary" refers to the fact that the operator requires **three** operands. Most operators are either unary (like `!`, `typeof`, `++`) taking one operand, or binary (like `+`, `-`, `==`) taking two operands.

The ternary operator is an **expression**, which means it always produces a value. This is a key difference from an `if-else`  _statement_, which performs an action but doesn't necessarily produce a value itself (though the blocks within it can contain expressions that do).

#### Examples

##### Basic Usage (Simple `if-else` replacement)

```javascript
let age = 20;
let status;

// Using if-else statement
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
console.log(status); // Output: Adult

// Using ternary operator
let statusTernary = (age >= 18) ? "Adult" : "Minor";
console.log(statusTernary); // Output: Adult

let temperature = 15;
let weatherMessage = (temperature > 20) ? "It's warm!" : "It's cool.";
console.log(weatherMessage); // Output: It's cool.

```

#### Assigning Values Based on Condition

```javascript
let isLoggedOut = false;
let buttonText = isLoggedOut ? "Log In" : "Log Out";
console.log(buttonText); // Output: Log Out

let stock = 0;
let message = (stock > 0) ? "In Stock" : "Out of Stock";
console.log(message); // Output: Out of Stock

```

#### Returning Values from Functions

The ternary operator is often used within `return` statements for concise function logic.

```javascript
function getMax(a, b) {
    return (a > b) ? a : b;
}
console.log(getMax(10, 5));  // Output: 10
console.log(getMax(3, 12));  // Output: 12

function getGreeting(isMorning) {
    return isMorning ? "Good morning!" : "Good evening!";
}
console.log(getGreeting(true));  // Output: Good morning!
console.log(getGreeting(false)); // Output: Good evening!

```

#### Chaining Ternary Operators (Simulating `else if`)

While possible, chaining ternary operators can quickly become unreadable and is generally discouraged for complex conditions. For multiple conditions, `if-else if-else` or `switch` statements are usually clearer.

```javascript
let score = 75;

// Chained ternary (less readable for multiple conditions)
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(grade); // Output: B

// Equivalent if-else if-else (more readable)
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(grade); // Output: B

```

#### Using Ternary Operator in JSX (React)

The ternary operator is particularly popular in front-end frameworks like React for conditionally rendering elements within JSX.

```javascript
// Example in a React-like context (conceptual, not runnable pure JS)
/*
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}
*/

```

#### Best Practices

- **Simplicity is Key:** Use the ternary operator for simple, single-line conditional assignments or returns where an `if-else` statement would be unnecessarily verbose.
- **Readability Over Conciseness:** If the condition or the expressions become complex, or if you have more than two outcomes, prefer `if-else if-else` statements or `switch` statements for better readability.
- **Avoid Nesting/Chaining:** Deeply nested or long chained ternary operators are hard to debug and understand.
- **Parentheses for Clarity:** Use parentheses around the `condition` if it involves multiple logical or comparison operators to ensure correct evaluation order.
- **Side Effects:** Be mindful of side effects. While the expressions can contain operations with side effects, it's generally cleaner to keep the expressions simple values or function calls that return values.

The ternary operator is a powerful tool for writing more compact and expressive JavaScript code, especially for straightforward conditional logic.

### 7.3 Switch Statement in JavaScript

The `switch` statement is a control flow statement that allows you to execute different blocks of code based on the value of a single expression. It provides an alternative to long `if-else if-else` chains when you have many possible execution paths determined by a single variable or expression.

#### Syntax

The basic syntax of the `switch` statement is as follows:

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break; // Important: Exits the switch statement
    case value2:
        // Code to execute if expression === value2
        break;
    case valueN:
        // Code to execute if expression === valueN
        break;
    default:
        // Code to execute if expression doesn't match any case
        // (Optional)
}

```

**Explanation:**

- `expression`: The value or variable whose value will be compared against the `case` values. This expression is evaluated once.
- `case valueN`: Each `case` defines a specific value to compare against the `expression`. The comparison is a strict equality (`===`) check.
- `break`: The `break` keyword is crucial. It terminates the `switch` statement, preventing "fall-through" to subsequent `case` blocks. Without `break`, execution would continue to the next `case` until a `break` is encountered or the end of the `switch` block is reached.
- `default`: The `default` keyword is optional. If none of the `case` values match the `expression`, the code inside the `default` block will be executed. It's similar to the final `else` block in an `if-else if-else` chain.

#### How it Works

1.The `expression` inside the `switch` parentheses is evaluated once.
2.The result of the `expression` is then compared strictly (`===`) with the `value` of each `case` clause.
3.If a match is found, the code block associated with that `case` is executed.
4.Execution continues until a `break` statement is encountered, which exits the `switch` block.
5.If no `case` matches the `expression` and a `default` clause is present, the code inside the `default` block is executed.
6.If no `case` matches and there is no `default` clause, no code within the `switch` statement is executed.

#### Examples

##### Basic Usage with `break`

```javascript
let dayOfWeek = 3; // 1 for Monday, 2 for Tuesday, etc.

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday.");
        break;
    case 2:
        console.log("It's Tuesday.");
        break;
    case 3:
        console.log("It's Wednesday.");
        break;
    case 4:
        console.log("It's Thursday.");
        break;
    case 5:
        console.log("It's Friday.");
        break;
    case 6:
        console.log("It's Saturday.");
        break;
    case 7:
        console.log("It's Sunday.");
        break;
    default:
        console.log("Invalid day number.");
}
// Output: It's Wednesday.

```

##### Using `default`

```javascript
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("I don't know this fruit.");
}
// Output: I don't know this fruit.

```

##### Fall-through (Omitting `break`)

Omitting `break` statements causes "fall-through," where execution continues into the next `case` block. This can be useful for grouping multiple cases that should execute the same code.

```javascript
let month = "January";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("It's Winter.");
        break;
    case "March":
    case "April":
    case "May":
        console.log("It's Spring.");
        break;
    default:
        console.log("Season unknown.");
}
// Output: It's Winter. (January falls through to the Winter block)

```

##### Multiple Statements per Case

Each `case` block can contain multiple statements.

```javascript
let command = "start";
let statusMessage = "";

switch (command) {
    case "start":
        statusMessage = "Application is starting...";
        console.log("Initializing services.");
        break;
    case "stop":
        statusMessage = "Application is stopping...";
        console.log("Shutting down services.");
        break;
    default:
        statusMessage = "Unknown command.";
}
console.log(statusMessage);
// Output:
// Initializing services.
// Application is starting...

```

#### When to Use `switch` vs. `if-else if-else`

- **`switch` is generally preferred when:**
- You are comparing a single expression against multiple distinct, constant values.
- The comparisons are based on strict equality (`===`).
- You want to group multiple cases that share the same code logic (using fall-through).
- It can make the code more readable and organized than a long `if-else if-else` chain.
- **`if-else if-else` is generally preferred when:**
- You need to check a range of values (e.g., `if (age > 18 && age < 65)`).
- You need to check complex conditions involving logical operators (`&&`, `||`, `!`).
- The conditions involve different variables or expressions. 

#### Best Practices

- **Always use `break`:** Unless you specifically intend for fall-through behavior, always include a `break` statement at the end of each `case` block to prevent unintended execution of subsequent cases.
- **Include a `default`:** It's good practice to include a `default` case to handle unexpected values for the `expression`, making your code more robust.
- **Keep `case` values simple:** The `case` values should be simple, constant expressions. Complex expressions or variable comparisons are better suited for `if-else if-else`.
- **Avoid complex logic within `case` blocks:** If a `case` block becomes too large or complex, consider extracting that logic into a separate function to maintain readability.
- **Consistent Indentation:** Maintain consistent indentation for clarity.

The `switch` statement is a valuable tool for managing conditional logic, especially when dealing with a fixed set of possible values for a single variable or expression.
