document.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.getElementById('demo-button');
    
    // Ensure demo-button exists before adding event listener
    if (!demoButton) {
        console.error('Demo button element not found');
        return;
    }

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