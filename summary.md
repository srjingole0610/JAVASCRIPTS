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

-   **Scope:**  `let` is **block-scoped**.
    
    -   A variable declared with `let` is only accessible within the block (`{}`) where it is defined. This includes `if` blocks, `for` loops, `while` loops, and function blocks.
        
-   **Hoisting:**  `let` declarations are also hoisted, but they are placed in a "temporal dead zone" (TDZ) from the start of their block until their actual declaration line.
    
    -   Attempting to access a `let` variable before its declaration within its scope will result in a `ReferenceError`. This helps catch potential bugs early.
        
-   **Re-declaration:** A `let` variable **cannot** be re-declared within the same scope. This prevents accidental overwriting of variables.
    
-   **Re-assignment:** A `let` variable can be re-assigned to a new value at any point after its declaration.
    
-   **Recommendation:** Preferred for variables whose values are expected to change during the execution of a program.
    

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

-   **Scope:**  `const` is **block-scoped**, just like `let`.
    
-   **Hoisting:** Similar to `let`, `const` declarations are hoisted but are in a temporal dead zone until their declaration. You must initialize a `const` variable at the time of its declaration.
    
-   **Re-declaration:** A `const` variable **cannot** be re-declared within the same scope.
    
-   **Re-assignment:** A `const` variable **cannot** be re-assigned after its initial assignment. This is its primary distinguishing feature.
    
-   **Important Note for Objects and Arrays:** While the `const` keyword prevents re-assignment of the variable itself, it does _not_ prevent modification of the _contents_ of an object or array that the `const` variable holds. This is because `const` ensures the variable's _reference_ remains constant, not the data it points to (for non-primitive types).
    
-   **Recommendation:** Preferred for variables whose values are not expected to change throughout the program's execution, promoting immutability and making code more predictable and easier to reason about.
    

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
### Summary Comparison:

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
