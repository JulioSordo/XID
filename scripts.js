// scripts.js

let isLiveModeActive = false;
let timerInterval;

function toggleLiveMode() {
    isLiveModeActive = !isLiveModeActive;
    const status = document.getElementById('status');
    const shield = document.querySelector('.shield-icon');
    const qrSection = document.getElementById('qr-section');
    const criticalData = document.getElementById('critical-data');
    const activateBtn = document.getElementById('activate-btn');

    if (isLiveModeActive) {
        status.textContent = 'Live Mode: Active';
        shield.classList.add('active');
        qrSection.classList.remove('hidden');
        criticalData.classList.remove('hidden');
        activateBtn.textContent = 'Deactivate Live Mode';
        startTimer();
    } else {
        status.textContent = 'Live Mode: Inactive';
        shield.classList.remove('active');
        qrSection.classList.add('hidden');
        criticalData.classList.add('hidden');
        activateBtn.textContent = 'Activate Live Mode';
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = '10:00';
    }
}

function startTimer() {
    let time = 600; // 10 minutes in seconds
    timerInterval = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (time <= 0) {
            toggleLiveMode();
        }
    }, 1000);
}
