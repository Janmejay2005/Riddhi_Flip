let totalRotation = 0;

function flipCoin() {
    const coin = document.getElementById('coin');
    const statusText = document.getElementById('statusText');
    
    // 1. Get current values from the input boxes
    const labelA = document.getElementById('sideA').value || "Heads";
    const labelB = document.getElementById('sideB').value || "Tails";
    
    // 2. Update the text physically on the coin faces
    document.getElementById('displayA').innerText = labelA;
    document.getElementById('displayB').innerText = labelB;

    statusText.innerText = "Spinning...";

    // 3. Logic: Decide result (0 = Side A, 1 = Side B)
    const result = Math.floor(Math.random() * 2); 
    
    // 4. Animation: 
    // We add at least 5 full spins (1800deg) plus the result 
    // to ensure it always looks like a vigorous toss.
    const extraSpins = (Math.floor(Math.random() * 5) + 5) * 360; 
    const resultRotation = result === 0 ? 0 : 180;
    
    totalRotation += extraSpins + resultRotation;
    
    coin.style.transform = `rotateY(${totalRotation}deg)`;

    // 5. Update text after the 2s animation ends
    setTimeout(() => {
        // We check if the final rotation is a multiple of 360
        const landedOnA = (totalRotation / 180) % 2 === 0;
        statusText.innerText = landedOnA ? `It's ${labelA}!` : `It's ${labelB}!`;
    }, 2000);
}