document.addEventListener('DOMContentLoaded', () => {
  // Existing functionality
  window.showGreeting = function () {
    document.getElementById('greetingOutput').textContent = 'Hello, welcome to JavaScript!';
  };

  window.showVariables = function () {
    let name = 'John';
    const age = 25;
    var city = 'New York';

    const output = `
      <p><strong>let name =</strong> "${name}"</p>
      <p><strong>const age =</strong> ${age}</p>
      <p><strong>var city =</strong> "${city}"</p>
    `;

    document.getElementById('variableOutput').innerHTML = output;
  };

  window.calculateSum = function () {
    function sum(a, b) {
      return a + b;
    }
    document.getElementById('functionOutput').textContent = `Result: ${sum(5, 3)}`;
  };
});