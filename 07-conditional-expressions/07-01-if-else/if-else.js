document.addEventListener('DOMContentLoaded', () => {

    const basicIfElseCode = document.getElementById('basicIfElseCode');
    const basicIfElseOutput = document.getElementById('basicIfElseOutput');
    const elseIfLogicalCode = document.getElementById('elseIfLogicalCode');
    const elseIfLogicalOutput = document.getElementById('elseIfLogicalOutput');
    const nestedIfElseCode = document.getElementById('nestedIfElseCode');
    const nestedIfElseOutput = document.getElementById('nestedIfElseOutput');
    const truthyFalsyCode = document.getElementById('truthyFalsyCode');
    const truthyFalsyOutput = document.getElementById('truthyFalsyOutput');
  
    
  // Basic if-else Example
  window.showBasicIfElse = function () {
    const code = `const number = 10;
let result;
if (number > 0) {
  result = \`\${number} is positive\`;
} else {
  result = \`\${number} is zero or negative\`;
}`;
    const number = 10;
    let result;
    if (number > 0) {
      result = `${number} is positive`;
    } else {
      result = `${number} is zero or negative`;
    }
    const output = `<p><strong>Number:</strong> ${number}</p>
                    <p><strong>Result:</strong> ${result}</p>`;
    basicIfElseCode.textContent = code;
    basicIfElseOutput.innerHTML = output;
    basicIfElseOutput.classList.add('text-output');
    basicIfElseCode.classList.add('text-code');

  };

  // else if and Logical Operators Example
  window.showElseIfLogical = function () {
    const code = `const score = 85;
let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80 && score < 90) {
  grade = 'B';
} else if (score >= 70 && score < 80) {
  grade = 'C';
} else {
  grade = 'Below C';
}`;
    const score = 85;
    let grade;
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80 && score < 90) {
      grade = 'B';
    } else if (score >= 70 && score < 80) {
      grade = 'C';
    } else {
      grade = 'Below C';
    }
    const output = `<p><strong>Score:</strong> ${score}</p>
                    <p><strong>Grade:</strong> ${grade}</p>
                    <p><strong>Condition:</strong> Used && to check score range</p>`;
    elseIfLogicalCode.textContent = code;
    elseIfLogicalOutput.innerHTML = output;
    elseIfLogicalOutput.classList.add('text-output');
    elseIfLogicalCode.classList.add('text-code');
  };

  // Nested if-else Example
  window.showNestedIfElse = function () {
    const code = `const age = 25;
const hasLicense = true;
let message;
if (age >= 18) {
  if (hasLicense) {
    message = 'You can drive!';
  } else {
    message = 'You are old enough but need a license.';
  }
} else {
  message = 'You are too young to drive.';
}`;
    const age = 25;
    const hasLicense = true;
    let message;
    if (age >= 18) {
      if (hasLicense) {
        message = 'You can drive!';
      } else {
        message = 'You are old enough but need a license.';
      }
    } else {
      message = 'You are too young to drive.';
    }
    const output = `<p><strong>Age:</strong> ${age}</p>
                    <p><strong>Has License:</strong> ${hasLicense}</p>
                    <p><strong>Result:</strong> ${message}</p>`;
    nestedIfElseCode.textContent = code;
    nestedIfElseOutput.innerHTML = output;
    nestedIfElseOutput.classList.add('text-output');
    nestedIfElseCode.classList.add('text-code');
  };

  // Truthy and Falsy Values Example
  window.showTruthyFalsy = function () {
    const code = `const value1 = "";
const value2 = 0;
const value3 = "Hello";
if (value1) {
  result1 = 'truthy';
} else {
  result1 = 'falsy';
}
if (value2) {
  result2 = 'truthy';
} else {
  result2 = 'falsy';
}
if (value3) {
  result3 = 'truthy';
} else {
  result3 = 'falsy';
}`;
    const value1 = "";
    const value2 = 0;
    const value3 = "Hello";
    const output = `
      <p><strong>Value 1 (empty string):</strong> "${value1}" is ${value1 ? 'truthy' : 'falsy'}</p>
      <p><strong>Value 2 (zero):</strong> ${value2} is ${value2 ? 'truthy' : 'falsy'}</p>
      <p><strong>Value 3 (non-empty string):</strong> "${value3}" is ${value3 ? 'truthy' : 'falsy'}</p>
    `;
    truthyFalsyCode.textContent = code;
    truthyFalsyOutput.innerHTML = output;
    truthyFalsyOutput.classList.add('text-output');
    truthyFalsyCode.classList.add('text-code');
  };
});