document.addEventListener("DOMContentLoaded", () => {

    const basicForCode = document.getElementById("basicForCode");
    const basicForOutput = document.getElementById("basicForOutput");
    const arrayForCode = document.getElementById("arrayForCode");
    const arrayForOutput = document.getElementById("arrayForOutput");
    const breakContinueCode = document.getElementById("breakContinueCode");
    const breakContinueOutput = document.getElementById("breakContinueOutput");
    const nestedForCode = document.getElementById("nestedForCode");
    const nestedForOutput = document.getElementById("nestedForOutput");

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
    basicForCode.textContent = code;
    basicForOutput.innerHTML = output;
    basicForOutput.classList.add("text-output");
    basicForCode.classList.add("text-code");
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
    arrayForCode.textContent = code;
    arrayForOutput.innerHTML = output;
    arrayForOutput.classList.add("text-output");
    arrayForCode.classList.add("text-code");
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
    breakContinueCode.textContent = code;
    breakContinueOutput.innerHTML = output;
    breakContinueOutput.classList.add("text-output");
    breakContinueCode.classList.add("text-code");
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
    const output = `<p><strong>Multiplication Table:</strong> ${result.slice(
      0,
      -2
    )}</p>`;
    nestedForCode.textContent = code;
    nestedForOutput.innerHTML = output;
    nestedForOutput.classList.add("text-output");
    nestedForCode.classList.add("text-code");
  };
});
