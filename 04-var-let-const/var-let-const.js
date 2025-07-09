document.addEventListener('DOMContentLoaded', () => {
    const declarationOutput = document.getElementById('declarationOutput');
    const scopeOutput = document.getElementById('scopeOutput');
    const hoistingOutput = document.getElementById('hoistingOutput');
    const redeclarationOutput = document.getElementById('redeclarationOutput');

  // Declaration and Reassignment Example
  window.showDeclaration = function () {
    let output = '';
    try {
      var varVar = "I am var";
      output += `<p><strong>var varVar =</strong> "${varVar}"</p>`;
      varVar = "I am reassigned var";
      output += `<p><strong>Reassigned var:</strong> "${varVar}"</p>`;

      let letVar = "I am let";
      output += `<p><strong>let letVar =</strong> "${letVar}"</p>`;
      letVar = "I am reassigned let";
      output += `<p><strong>Reassigned let:</strong> "${letVar}"</p>`;

      const constVar = "I am const";
      output += `<p><strong>const constVar =</strong> "${constVar}"</p>`;
      // constVar = "This will fail"; // Uncomment to see error
      output += `<p><strong>Attempting to reassign const:</strong> Will throw an error if tried</p>`;
    } catch (e) {
      output += `<p><strong>Error:</strong> ${e.message}</p>`;
    }
    document.getElementById('declarationOutput').innerHTML = output;
    declarationOutput.classList.add('output');
  };

  // Scope Behavior Example
  window.showScope = function () {
    let output = '';
    if (true) {
      var varScoped = "I am function-scoped";
      let letScoped = "I am block-scoped";
      const constScoped = "I am also block-scoped";
      output += `<p><strong>Inside block:</strong></p>`;
      output += `<p>var: "${varScoped}"</p>`;
      output += `<p>let: "${letScoped}"</p>`;
      output += `<p>const: "${constScoped}"</p>`;
    }
    output += `<p><strong>Outside block:</strong></p>`;
    output += `<p>var: "${varScoped}" (accessible due to function scope)</p>`;
    try {
      output += `<p>let: "${letScoped}" (will throw error)</p>`;
    } catch (e) {
      output += `<p>let: Error - ${e.message} (not accessible outside block)</p>`;
    }
    try {
      output += `<p>const: "${constScoped}" (will throw error)</p>`;
    } catch (e) {
      output += `<p>const: Error - ${e.message} (not accessible outside block)</p>`;
    }
    document.getElementById('scopeOutput').innerHTML = output;
    scopeOutput.classList.add('output');
  };

  // Hoisting and TDZ Example
  window.showHoisting = function () {
    let output = '';
    try {
      output += `<p><strong>var before declaration:</strong> ${varHoisted} (hoisted, undefined)</p>`;
      var varHoisted = "I am hoisted var";
      output += `<p><strong>var after declaration:</strong> ${varHoisted}</p>`;
    } catch (e) {
      output += `<p><strong>var Error:</strong> ${e.message}</p>`;
    }

    try {
      output += `<p><strong>let before declaration:</strong> ${letHoisted} (TDZ, will throw error)</p>`;
      let letHoisted = "I am let";
    } catch (e) {
      output += `<p><strong>let Error:</strong> ${e.message}</p>`;
    }

    try {
      output += `<p><strong>const before declaration:</strong> ${constHoisted} (TDZ, will throw error)</p>`;
      const constHoisted = "I am const";
    } catch (e) {
      output += `<p><strong>const Error:</strong> ${e.message}</p>`;
    }

    document.getElementById('hoistingOutput').innerHTML = output;
    hoistingOutput.classList.add('output');
  };

  // Redeclaration Example
  window.showRedeclaration = function () {
    let output = '';
    var varRedeclare = "First var";
    var varRedeclare = "Redeclared var";
    output += `<p><strong>var redeclaration:</strong> "${varRedeclare}" (allowed)</p>`;

    try {
      let letRedeclare = "First let";
      // let letRedeclare = "This will fail"; // Uncomment to see error
      output += `<p><strong>let redeclaration:</strong> Will throw an error if tried</p>`;
    } catch (e) {
      output += `<p><strong>let Error:</strong> ${e.message}</p>`;
    }

    try {
      const constRedeclare = "First const";
      // const constRedeclare = "This will fail"; // Uncomment to see error
      output += `<p><strong>const redeclaration:</strong> Will throw an error if tried</p>`;
    } catch (e) {
      output += `<p><strong>const Error:</strong> ${e.message}</p>`;
    }

    document.getElementById('redeclarationOutput').innerHTML = output;
    redeclarationOutput.classList.add('output');
  };
});