function toggleModoVida() {
    isModoVidaActive = !isModoVidaActive;
    const status = document.getElementById('status');
    const shield = document.querySelector('.shield-icon');
    const qrSection = document.getElementById('qr-section');
    const qrPlaceholder = document.getElementById('qr-placeholder');
    const criticalData = document.getElementById('critical-data');
    const activateBtn = document.getElementById('activate-btn');

    if (isModoVidaActive) {
        status.textContent = 'Modo Vida: Active';
        shield.classList.add('active');
        qrSection.classList.remove('hidden');
        criticalData.classList.remove('hidden');
        activateBtn.textContent = 'Deactivate Modo Vida';
        
        // Generar QR dinámicamente
        qrPlaceholder.innerHTML = ''; // Limpiar el placeholder
        QRCode.toCanvas(qrPlaceholder, 'https://example.com/emergency-data', { width: 100 }, (error) => {
            if (error) console.error(error);
        });

        startTimer();
    } else {
        status.textContent = 'Modo Vida: Inactive';
        shield.classList.remove('active');
        qrSection.classList.add('hidden');
        criticalData.classList.add('hidden');
        activateBtn.textContent = 'Activate Modo Vida';
        qrPlaceholder.innerHTML = ''; // Limpiar el QR
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = '10:00';
    }
}
