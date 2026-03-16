const generatorBtn = document.getElementById('generator-btn');
const numbersDisplay = document.getElementById('numbers-display');
const themeToggle = document.getElementById('theme-toggle');

// Load saved theme from localStorage or default to light
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
} else {
    document.body.classList.add('light-mode'); // Default theme
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

generatorBtn.addEventListener('click', () => {
    numbersDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.textContent = number;
            numbersDisplay.appendChild(circle);
        }, index * 300); // 300ms delay for each number
    });
});
