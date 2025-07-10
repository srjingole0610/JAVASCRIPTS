document.addEventListener('DOMContentLoaded', () => {
    const primitiveTypesOutput = document.getElementById('primitiveTypesOutput');
    const numberBigIntOutput = document.getElementById('numberBigIntOutput');
    const stringCoercionOutput = document.getElementById('stringCoercionOutput');
    const otherPrimitivesOutput = document.getElementById('otherPrimitivesOutput');

  // Primitive Types Example
  window.showPrimitiveTypes = function () {
    const output = `
      <p><strong>Number:</strong> 42 (typeof: ${typeof 42})</p>
      <p><strong>String:</strong> "Hello, World!" (typeof: ${typeof "Hello, World!"})</p>
      <p><strong>Boolean:</strong> true (typeof: ${typeof true})</p>
      <p><strong>Undefined:</strong> ${undefined} (typeof: ${typeof undefined})</p>
      <p><strong>Null:</strong> ${null} (typeof: ${typeof null})</p>
      <p><strong>Symbol:</strong> Symbol("id") (typeof: ${typeof Symbol("id")})</p>
      <p><strong>BigInt:</strong> 12345678901234567890n (typeof: ${typeof 12345678901234567890n})</p>
    `;
    document.getElementById('primitiveTypesOutput').innerHTML = output;
    primitiveTypesOutput.classList.add('text-output');
  };

  // Number vs. BigInt Example
  window.showNumberBigInt = function () {
    const largeNumber = 9007199254740991; // Max safe integer for Number
    const bigIntNumber = 9007199254740991n;a
    const output = `
      <p><strong>Number:</strong> ${largeNumber} (typeof: ${typeof largeNumber})</p>
      <p><strong>Number + 1:</strong> ${largeNumber + 1} (precision issue)</p>
      <p><strong>BigInt:</strong> ${bigIntNumber} (typeof: ${typeof bigIntNumber})</p>
      <p><strong>BigInt + 1n:</strong> ${bigIntNumber + 1n} (exact)</p>
      <p><strong>Number * 2:</strong> ${largeNumber * 2} (may lose precision)</p>
      <p><strong>BigInt * 2n:</strong> ${bigIntNumber * 2n} (exact)</p>
    `;
    document.getElementById('numberBigIntOutput').innerHTML = output;
    numberBigIntOutput.classList.add('text-output');
  };

  // String Operations and Coercion Example
  window.showStringCoercion = function () {
    const output = `
      <p><strong>String Concatenation:</strong> "Hello" + " World" = "${"Hello" + " World"}"</p>
      <p><strong>String Method:</strong> "hello".toUpperCase() = "${"hello".toUpperCase()}"</p>
      <p><strong>Coercion (+):</strong> "5" + 3 = "${"5" + 3}"</p>
      <p><strong>Coercion (*):</strong> "5" * 3 = ${"5" * 3}</p>
      <p><strong>Coercion (==):</strong> "5" == 5 = ${"5" == 5}</p>
      <p><strong>Coercion (===):</strong> "5" === 5 = ${"5" === 5}</p>
    `;
    document.getElementById('stringCoercionOutput').innerHTML = output;
    stringCoercionOutput.classList.add('text-output');
  };

  // Boolean, Undefined, Null, Symbol Example
  window.showOtherPrimitives = function () {
    const sym1 = Symbol('id');
    const sym2 = Symbol('id');
    const output = `
      <p><strong>Boolean:</strong> true (typeof: ${typeof true})</p>
      <p><strong>Boolean Operation:</strong> true && false = ${true && false}</p>
      <p><strong>Undefined:</strong> ${undefined} (typeof: ${typeof undefined})</p>
      <p><strong>Null:</strong> ${null} (typeof: ${typeof null})</p>
      <p><strong>Symbol:</strong> Symbol("id") (typeof: ${typeof sym1})</p>
      <p><strong>Symbol Uniqueness:</strong> Symbol('id') === Symbol('id') = ${sym1 === sym2}</p>
    `;
    document.getElementById('otherPrimitivesOutput').innerHTML = output;
    otherPrimitivesOutput.classList.add('text-output');
  };
});