document.addEventListener("DOMContentLoaded", () => {
  const basicTernaryCode = document.getElementById("basicTernaryCode");
  const basicTernaryOutput = document.getElementById("basicTernaryOutput");
  const ternaryVsIfElseCode = document.getElementById("ternaryVsIfElseCode");
  const ternaryVsIfElseOutput = document.getElementById(
    "ternaryVsIfElseOutput"
  );
  const chainedTernaryCode = document.getElementById("chainedTernaryCode");
  const chainedTernaryOutput = document.getElementById("chainedTernaryOutput");
  const ternaryLogicalCode = document.getElementById("ternaryLogicalCode");
  const ternaryLogicalOutput = document.getElementById("ternaryLogicalOutput");

  // Basic Ternary Operator Example
  window.showBasicTernary = function () {
    const code = `const number = 10;
const result = number > 0 ? \`\${number} is positive\` : \`\${number} is zero or negative\`;`;
    const number = 10;
    const result =
      number > 0 ? `${number} is positive` : `${number} is zero or negative`;
    const output = `<p><strong>Number:</strong> ${number}</p>
                    <p><strong>Result:</strong> ${result}</p>`;
                    
    basicTernaryCode.textContent = code;
    basicTernaryOutput.innerHTML = output;
    basicTernaryOutput.classList.add("text-output");
    basicTernaryCode.classList.add("text-code");
  };

  // Ternary vs. if-else Example
  window.showTernaryVsIfElse = function () {
    const code = `const age = 20;
const statusTernary = age >= 18 ? "Adult" : "Minor";
let statusIfElse;
if (age >= 18) {
  statusIfElse = "Adult";
} else {
  statusIfElse = "Minor";
}`;
    const age = 20;
    const statusTernary = age >= 18 ? "Adult" : "Minor";
    let statusIfElse;
    if (age >= 18) {
      statusIfElse = "Adult";
    } else {
      statusIfElse = "Minor";
    }
    const output = `<p><strong>Age:</strong> ${age}</p>
                    <p><strong>Ternary Result:</strong> ${statusTernary}</p>
                    <p><strong>if-else Result:</strong> ${statusIfElse}</p>`;
    ternaryVsIfElseCode.textContent = code;
    ternaryVsIfElseOutput.innerHTML = output;
    ternaryVsIfElseOutput.classList.add("text-output");
    ternaryVsIfElseCode.classList.add("text-code");
  };

  // Chained Ternary Operator Example
  window.showChainedTernary = function () {
    const code = `const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "Below C";`;
    const score = 85;
    const grade =
      score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "Below C";
    const output = `<p><strong>Score:</strong> ${score}</p>
                    <p><strong>Grade:</strong> ${grade}</p>`;
    chainedTernaryCode.textContent = code;
    chainedTernaryOutput.innerHTML = output;
    chainedTernaryOutput.classList.add("text-output");
    chainedTernaryCode.classList.add("text-code");
  };

  // Ternary with Logical Operators Example
  window.showTernaryLogical = function () {
    const code = `const age = 25;
const hasLicense = true;
const canDrive = (age >= 18 && hasLicense) ? "You can drive!" : "You cannot drive."`;
    const age = 25;
    const hasLicense = true;
    const canDrive =
      age >= 18 && hasLicense ? "You can drive!" : "You cannot drive.";
    const output = `<p><strong>Age:</strong> ${age}</p>
                    <p><strong>Has License:</strong> ${hasLicense}</p>
                    <p><strong>Result:</strong> ${canDrive}</p>`;
    ternaryLogicalCode.textContent = code;
    ternaryLogicalOutput.innerHTML = output;
    ternaryLogicalOutput.classList.add("text-output");
    ternaryLogicalCode.classList.add("text-code");
  };
});
