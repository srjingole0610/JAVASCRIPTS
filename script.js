document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const demoButton = document.getElementById('demo-button');
    let count = 0;

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    // Interactive demo button
    demoButton.addEventListener('click', () => {
        count++;
        demoButton.textContent = `Click me: ${count}`;
        demoButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            demoButton.style.transform = 'scale(1)';
        }, 200);
    });
});