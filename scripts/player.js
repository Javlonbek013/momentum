export function player() {
    const playbtn = document.querySelector('.play.player-icon');
    const nextbtn = document.querySelector('.play-next');
    const prevbtn = document.querySelector('.play-prev');
    const audio = new Audio("./assets/sounds/River Flows In You.mp3");
    const tracks = [
        "./assets/sounds/River Flows In You.mp3",
        "./assets/sounds/Summer Wind.mp3",     
        "./assets/sounds/Ennio Morricone.mp3",
        "./assets/sounds/Aqua Caelestis.mp3"     
    ];
    let currentTrackIndex = 0;

    // Play/pause functionality
    playbtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playbtn.style.backgroundImage = "url('./assets/svg/pause.svg')"; 
        } else {
            audio.pause();
            playbtn.style.backgroundImage = "url('./assets/svg/play.svg')"; 
        }
    });

    // Next button functionality
    nextbtn.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length; 
        audio.src = tracks[currentTrackIndex];
        audio.play();
        playbtn.style.backgroundImage = "url('./assets/svg/pause.svg')"; 
    });

    prevbtn.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; 
        audio.src = tracks[currentTrackIndex];
        audio.play();
        playbtn.style.backgroundImage = "url('./assets/svg/pause.svg')"; 
    });
}
