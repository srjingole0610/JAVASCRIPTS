document.addEventListener('DOMContentLoaded', () => {

  // Basic For Loop Example
  window.showBasicFor = function () {
    const code = `let result = "";
for (let i = 1; i <= 5; i++) {
  result += i + " ";
}`;
    let result = "";
    for (let i = 1; i <= 5; i++) {
      result += i + " ";
    }
    const output = `<p><strong>Result:</strong> ${result.trim()}</p>`;
    document.getElementById('basicForCode').textContent = code;
    document.getElementById('basicForOutput').innerHTML = output;
  };

  // Array Iteration Example
  window.showArrayFor = function () {
    const code = `const fruits = ["Apple", "Banana", "Orange"];
let result = "";
for (let i = 0; i < fruits.length; i++) {
  result += fruits[i] + ", ";
}`;
    const fruits = ["Apple", "Banana", "Orange"];
    let result = "";
    for (let i = 0; i < fruits.length; i++) {
      result += fruits[i] + ", ";
    }
    const output = `<p><strong>Fruits:</strong> ${fruits.join(", ")}</p>
                    <p><strong>Result:</strong> ${result.slice(0, -2)}</p>`;
    document.getElementById('arrayForCode').textContent = code;
    document.getElementById('arrayForOutput').innerHTML = output;
  };

  // Break and Continue Example
  window.showBreakContinue = function () {
    const code = `let result = "";
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  result += i + " ";
}`;
    let result = "";
    for (let i = 1; i <= 5; i++) {
      if (i === 3) continue;
      if (i === 5) break;
      result += i + " ";
    }
    const output = `<p><strong>Result:</strong> ${result.trim()}</p>
                    <p><strong>Note:</strong> Skipped 3 (continue), stopped at 5 (break)</p>`;
    document.getElementById('breakContinueCode').textContent = code;
    document.getElementById('breakContinueOutput').innerHTML = output;
  };

  // Nested For Loop Example
  window.showNestedFor = function () {
    const code = `let result = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    result += \`\${i} * \${j} = \${i * j}, \`;
  }
}`;
    let result = "";
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        result += `${i} * ${j} = ${i * j}, `;
      }
    }
    const output = `<p><strong>Multiplication Table:</strong> ${result.slice(0, -2)}</p>`;
    document.getElementById('nestedForCode').textContent = code;
    document.getElementById('nestedForOutput').innerHTML = output;
  };
});