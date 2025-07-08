// Get DOM elements
const body = document.body;
const heading = document.createElement('h1');
const paragraph = document.createElement('p');

// Set content
heading.textContent = 'Welcome to My Page';
paragraph.textContent = 'This is a basic JavaScript demo page.';

// Add styles
heading.style.color = '#333';
heading.style.textAlign = 'center';
paragraph.style.margin = '20px';

// Add elements to page
body.appendChild(heading);
body.appendChild(paragraph);

// Add click event
heading.addEventListener('click', () => {
    alert('You clicked the heading!');
});

// Simple counter
let count = 0;
const button = document.createElement('button');
button.textContent = 'Click me: 0';
button.style.display = 'block';
button.style.margin = '20px auto';

button.addEventListener('click', () => {
    count++;
    button.textContent = `Click me: ${count}`;
});

body.appendChild(button);
