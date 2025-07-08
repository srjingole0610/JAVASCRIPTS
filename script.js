document.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.getElementById('demo-button');
    let count = 0;
    
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