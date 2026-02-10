const generatorBtn = document.getElementById('generator-btn');
const numbersDisplay = document.getElementById('numbers-display');

generatorBtn.addEventListener('click', () => {
    numbersDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('number-circle');
        circle.textContent = number;
        numbersDisplay.appendChild(circle);
    });
});
