// scripts.js

let isModoVidaActive = false;
let timerInterval;

function toggleModoVida() {
    isModoVidaActive = !isModoVidaActive;
    const status = document.getElementById('status');
    const shield = document.querySelector('.shield-icon');
    const qrSection = document.getElementById('qr-section');
    const criticalData = document.getElementById('critical-data');
    const activateBtn = document.getElementById('activate-btn');

    if (isModoVidaActive) {
        status.textContent = 'Modo Vida: Active';
        shield.classList.add('active');
        qrSection.classList.remove('hidden');
        criticalData.classList.remove('hidden');
        activateBtn.textContent = 'Deactivate Modo Vida';
        startTimer();
    } else {
        status.textContent = 'Modo Vida: Inactive';
        shield.classList.remove('active');
        qrSection.classList.add('hidden');
        criticalData.classList.add('hidden');
        activateBtn.textContent = 'Activate Modo Vida';
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = '10:00';
    }
}

function startTimer() {
    let time = 600; // 10 minutos en segundos
    timerInterval = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (time <= 0) {
            toggleModoVida();
        }
    }, 1000);
}
