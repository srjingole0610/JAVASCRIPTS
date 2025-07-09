document.addEventListener('DOMContentLoaded', () => {
      const valueTypesOutput = document.getElementById('valueTypesOutput');
      const variableOutput = document.getElementById('variableOutput');
      const typeCoercionOutput = document.getElementById('typeCoercionOutput');
      const scopeHoistingOutput = document.getElementById('scopeHoistingOutput');
  // Value Types Example
  window.showValueTypes = function () {
    const output = `
      <p><strong>Number:</strong> 42 (typeof: ${typeof 42})</p>
      <p><strong>String:</strong> "Hello, World!" (typeof: ${typeof "Hello, World!"})</p>
      <p><strong>Boolean:</strong> true (typeof: ${typeof true})</p>
      <p><strong>Undefined:</strong> ${undefined} (typeof: ${typeof undefined})</p>
      <p><strong>Null:</strong> ${null} (typeof: ${typeof null})</p>
      <p><strong>Symbol:</strong> Symbol("id") (typeof: ${typeof Symbol("id")})</p>
      <p><strong>BigInt:</strong> 12345678901234567890n (typeof: ${typeof 12345678901234567890n})</p>
      <p><strong>Object:</strong> { name: "John" } (typeof: ${typeof { name: "John" }})</p>
    `;
    valueTypesOutput.innerHTML = output;
    valueTypesOutput.classList.add('output-active');
  };

  // Variable Declaration Example
  window.showVariables = function () {
    let name = "John";
    const age = 25;
    var city = "New York";

    const output = `
      <p><strong>let name =</strong> "${name}" (can be reassigned)</p>
      <p><strong>const age =</strong> ${age} (cannot be reassigned)</p>
      <p><strong>var city =</strong> "${city}" (function-scoped, hoisted)</p>
      <p><strong>Reassigning let:</strong> ${name = "Alice"}</p>
      <p><strong>Attempting to reassign const:</strong> Will throw an error if tried</p>
    `;
    document.getElementById('variableOutput').innerHTML = output;
    variableOutput.classList.add('output-active');
  };

  // Type Coercion Example
  window.showTypeCoercion = function () {
    const output = `
      <p><strong>String + Number:</strong> "5" + 3 = "${"5" + 3}"</p>
      <p><strong>String * Number:</strong> "5" * 3 = ${"5" * 3}</p>
      <p><strong>Boolean + Number:</strong> true + 5 = ${true + 5}</p>
      <p><strong>Null + Number:</strong> null + 5 = ${null + 5}</p>
      <p><strong>Undefined + Number:</strong> undefined + 5 = ${undefined + 5}</p>
    `;
    document.getElementById('typeCoercionOutput').innerHTML = output;
    typeCoercionOutput.classList.add('output-active');
  };

  // Scope and Hoisting Example
  window.showScopeHoisting = function () {
    let output = '';
    try {
      output += `<p><strong>var Hoisting:</strong> ${hoistedVar} (accessing hoistedVar before declaration - var variables are hoisted and initialized with undefined)</p>`;
      var hoistedVar = "I am hoisted!";
      output += `<p><strong>After var declaration:</strong> ${hoistedVar}</p>`;
    } catch (e) {
      output += `<p><strong>var Hoisting Error:</strong> ${e.message}</p>`;
    }

    try {
      output += `<p><strong>let in Block Scope:</strong> ${blockScopedLet} (Temporal Dead Zone)</p>`;
      let blockScopedLet = "I am block-scoped!";
    } catch (e) {
      output += `<p><strong>let Hoisting Error:</strong> ${e.message}</p>`;
    }

    function scopeExample() {
      var functionScoped = "Function scope";
      let blockScoped = "Block scope";
      output += `<p><strong>Inside Function Scope (var):</strong> ${functionScoped}</p>`;
      output += `<p><strong>Inside Block Scope (let):</strong> ${blockScoped}</p>`;
    }
    scopeExample();

    document.getElementById('scopeHoistingOutput').innerHTML = output;
    scopeHoistingOutput.classList.add('output-active');
  };
});