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

    - **`BigInt`** (ES2020): Represents whole numbers larger than `2^53 - 1`, which is the largest number JavaScript can reliably represent with the 
        `Number` type.

        ```javascript
        const largeNumber = 9007199254740991n; // 'n' suffix makes it a BigInt
        
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
