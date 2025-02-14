let slapCounter = 0;
let hugCounter = 0;

// Show pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Default to show Letters Page
showPage('letters');

// Slap & Hug TUT
function slapTUT() {
    let face = document.getElementById('face');
    face.style.transform = "rotate(-20deg)";
    setTimeout(() => face.style.transform = "rotate(0deg)", 100);
    playSound('slap.mp3');
    
    slapCounter++;
    document.getElementById("slapCount").textContent = slapCounter;
}

function hugTUT() {
    let face = document.getElementById('face');
    face.style.transform = "scale(1.2)";
    setTimeout(() => face.style.transform = "scale(1)", 300);
    playSound('hug.mp3');

    hugCounter++;
    document.getElementById("hugCount").textContent = hugCounter;
}

// Play sound effect
function playSound(file) {
    let audio = new Audio(file);
    audio.play();
}
