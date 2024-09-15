function createSecondLines() {
    const secondLinesContainer = document.querySelector('.second-lines');
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            // Create the thin lines for seconds
            const line = document.createElement('div');
            line.style.transform = `rotate(${i * 6}deg)`;
            secondLinesContainer.appendChild(line);
        } else if (i > 0) { // Skip the 12 o'clock position
            // Create thicker lines for minutes
            const line = document.createElement('div');
            line.classList.add('minute-line');
            line.style.transform = `rotate(${i * 6}deg)`;
            secondLinesContainer.appendChild(line);
        }
    }
}

function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // Convert to 12-hour format

    // Calculate the rotation angles for each hand
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    // Update the position of each clock hand
    document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

createSecondLines();
setInterval(setTime, 1000);
setTime();