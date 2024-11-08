document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('oath-popup');
    const closeButton = document.querySelector('.close-button');
    const oathCounter = document.getElementById('oath-counter');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener for close button
    closeButton.addEventListener('click', closeModal);

    // Function to update the oath counter
    function updateOathCounter(count) {
        oathCounter.textContent = count;
    }

    // Simulate receiving a signal from ESP8266
    function simulateESP8266Signal() {
        openModal();
        let count = parseInt(oathCounter.textContent) + 1;
        updateOathCounter(count);
    }

    // Simulate button press after 5 seconds (for testing)
    setTimeout(simulateESP8266Signal, 5000);
});
