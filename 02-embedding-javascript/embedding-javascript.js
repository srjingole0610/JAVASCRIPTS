// Inline JavaScript handler
function inlineMessage() {
  document.getElementById("inlineOutput").textContent = "✅ This is an inline JavaScript message!";
}

// Function simulating internal script (linked externally for best practice)
function internalMessage() {
  document.getElementById("internalOutput").textContent = "💡 This mimics internal JavaScript, but comes from an external JS file.";
}

// External JavaScript usage
function externalMessage() {
  document.getElementById("externalOutput").textContent = "🚀 You just triggered a function from an external JavaScript file!";
}
