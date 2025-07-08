document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  // Theme toggle functionality
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

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