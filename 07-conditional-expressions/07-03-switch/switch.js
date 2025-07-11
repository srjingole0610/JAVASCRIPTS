document.addEventListener('DOMContentLoaded', () => {

    const basicSwitchCode = document.getElementById('basicSwitchCode');
    const basicSwitchOutput = document.getElementById('basicSwitchOutput');
    const switchVsIfElseCode = document.getElementById('switchVsIfElseCode');
    const switchVsIfElseOutput = document.getElementById('switchVsIfElseOutput');
    const fallThroughCode = document.getElementById('fallThroughCode');
    const fallThroughOutput = document.getElementById('fallThroughOutput');
    const defaultCaseCode = document.getElementById('defaultCaseCode');
    const defaultCaseOutput = document.getElementById('defaultCaseOutput');


  // Basic Switch Statement Example
  window.showBasicSwitch = function () {
    const code = `const day = "Monday";
let message;
switch (day) {
  case "Monday":
    message = "Start of the work week!";
    break;
  case "Friday":
    message = "Almost weekend!";
    break;
  default:
    message = "Another day.";
}`;
    const day = "Monday";
    let message;
    switch (day) {
      case "Monday":
        message = "Start of the work week!";
        break;
      case "Friday":
        message = "Almost weekend!";
        break;
      default:
        message = "Another day.";
    }
    const output = `<p><strong>Day:</strong> ${day}</p>
                    <p><strong>Result:</strong> ${message}</p>`;
    basicSwitchCode.textContent = code;
    basicSwitchOutput.innerHTML = output;
    basicSwitchCode.classList.add("text-code");
    basicSwitchOutput.classList.add("text-output");
  };

  // Switch vs. if-else Example
  window.showSwitchVsIfElse = function () {
    const code = `const grade = "B";
let messageSwitch;
switch (grade) {
  case "A":
    messageSwitch = "Excellent!";
    break;
  case "B":
    messageSwitch = "Good job!";
    break;
  default:
    messageSwitch = "Keep trying.";
}
let messageIfElse;
if (grade === "A") {
  messageIfElse = "Excellent!";
} else if (grade === "B") {
  messageIfElse = "Good job!";
} else {
  messageIfElse = "Keep trying.";
}`;
    const grade = "B";
    let messageSwitch;
    switch (grade) {
      case "A":
        messageSwitch = "Excellent!";
        break;
      case "B":
        messageSwitch = "Good job!";
        break;
      default:
        messageSwitch = "Keep trying.";
    }
    let messageIfElse;
    if (grade === "A") {
      messageIfElse = "Excellent!";
    } else if (grade === "B") {
      messageIfElse = "Good job!";
    } else {
      messageIfElse = "Keep trying.";
    }
    const output = `<p><strong>Grade:</strong> ${grade}</p>
                    <p><strong>Switch Result:</strong> ${messageSwitch}</p>
                    <p><strong>if-else Result:</strong> ${messageIfElse}</p>`;
    switchVsIfElseCode.textContent = code;
    switchVsIfElseOutput.innerHTML = output;
    switchVsIfElseCode.classList.add("text-code");
    switchVsIfElseOutput.classList.add("text-output");
  };

  // Fall-Through Behavior Example
  window.showFallThrough = function () {
    const code = `const value = 1;
let message = "Value is: ";
switch (value) {
  case 1:
  case 2:
    message += "1 or 2";
    break;
  case 3:
    message += "3";
    break;
  default:
    message += "other";
}`;
    const value = 1;
    let message = "Value is: ";
    switch (value) {
      case 1:
      case 2:
        message += "1 or 2";
        break;
      case 3:
        message += "3";
        break;
      default:
        message += "other";
    }
    const output = `<p><strong>Value:</strong> ${value}</p>
                    <p><strong>Result:</strong> ${message}</p>`;
    fallThroughCode.textContent = code;
    fallThroughOutput.innerHTML = output;
    fallThroughCode.classList.add("text-code");
    fallThroughOutput.classList.add("text-output");
  };

  // Switch with Default Case Example
  window.showDefaultCase = function () {
    const code = `const fruit = "Apple";
let message;
switch (fruit) {
  case "Banana":
    message = "Yellow and curved!";
    break;
  case "Orange":
    message = "Citrus delight!";
    break;
  default:
    message = "Unknown fruit.";
}`;
    const fruit = "Apple";
    let message;
    switch (fruit) {
      case "Banana":
        message = "Yellow and curved!";
        break;
      case "Orange":
        message = "Citrus delight!";
        break;
      default:
        message = "Unknown fruit.";
    }
    const output = `<p><strong>Fruit:</strong> ${fruit}</p>
                    <p><strong>Result:</strong> ${message}</p>`;
    defaultCaseCode.textContent = code;
    defaultCaseOutput.innerHTML = output;
    defaultCaseCode.classList.add("text-code");
    defaultCaseOutput.classList.add("text-output");
  };
});