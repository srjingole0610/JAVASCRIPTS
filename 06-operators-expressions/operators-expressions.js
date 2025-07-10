document.addEventListener('DOMContentLoaded', () => {

    const arithmeticOutput = document.getElementById('arithmeticOutput');
    const comparisonOutput = document.getElementById('comparisonOutput');
    const logicalOutput = document.getElementById('logicalOutput');
    const assignmentTernaryOutput = document.getElementById('assignmentTernaryOutput');
  // Arithmetic Operators Example
  window.showArithmetic = function () {
    const a = 10;
    const b = 3;
    const output = `
      <p><strong>Addition:</strong> ${a} + ${b} = ${a + b}</p>
      <p><strong>Subtraction:</strong> ${a} - ${b} = ${a - b}</p>
      <p><strong>Multiplication:</strong> ${a} * ${b} = ${a * b}</p>
      <p><strong>Division:</strong> ${a} / ${b} = ${a / b}</p>
      <p><strong>Modulus:</strong> ${a} % ${b} = ${a % b}</p>
      <p><strong>Exponentiation:</strong> ${a} ** ${b} = ${a ** b}</p>
      <p><strong>Increment:</strong> ${a}++ = ${a + 1}</p>
    `;
    arithmeticOutput.innerHTML = output;
    arithmeticOutput.classList.add('text-output');
  };

  // Comparison Operators Example
  window.showComparison = function () {
    const num = 5;
    const str = "5";
    const output = `
      <p><strong>Loose Equality (==):</strong> ${num} == "${str}" = ${num == str}</p>
      <p><strong>Strict Equality (===):</strong> ${num} === "${str}" = ${num === str}</p>
      <p><strong>Greater Than (>):</strong> ${num} > 3 = ${num > 3}</p>
      <p><strong>Less Than or Equal (<=):</strong> ${num} <= 5 = ${num <= 5}</p>
      <p><strong>Not Equal (!=):</strong> ${num} != "${str}" = ${num != str}</p>
      <p><strong>Strict Not Equal (!==):</strong> ${num} !== "${str}" = ${num !== str}</p>
    `;
    comparisonOutput.innerHTML = output;
    comparisonOutput.classList.add('text-output');
  };

  // Logical Operators Example
  window.showLogical = function () {
    const x = true;
    const y = false;
    const output = `
      <p><strong>AND (&&):</strong> ${x} && ${y} = ${x && y}</p>
      <p><strong>OR (||):</strong> ${x} || ${y} = ${x || y}</p>
      <p><strong>NOT (!):</strong> !${x} = ${!x}</p>
      <p><strong>Short-Circuit AND:</strong> ${x} && ${y} || true = ${x && y || true}</p>
      <p><strong>Short-Circuit OR:</strong> ${x} || ${y} && false = ${x || y && false}</p>
    `;
    logicalOutput.innerHTML = output;
    logicalOutput.classList.add('text-output');
  };

  // Assignment and Ternary Operators Example
  window.showAssignmentTernary = function () {
    let x = 10;
    const output = `
      <p><strong>Assignment (=):</strong> x = ${x}</p>
      <p><strong>Add and Assign (+=):</strong> x += 5 = ${x += 5}</p>
      <p><strong>Multiply and Assign (*=):</strong> x *= 2 = ${x *= 2}</p>
      <p><strong>Ternary (x > 20 ?):</strong> x > 20 ? "Large" : "Small" = ${x > 20 ? "Large" : "Small"}</p>
      <p><strong>typeof:</strong> typeof x = ${typeof x}</p>
    `;
    assignmentTernaryOutput.innerHTML = output;
    assignmentTernaryOutput.classList.add('text-output');
  };
});