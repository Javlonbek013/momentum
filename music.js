const tracks = ['track1.mp3', 'track2.mp3', 'track3.mp3'];
let currentTrackIndex = 0;
const audio = new Audio(tracks[currentTrackIndex]);

const playButton = document.querySelector('.play-button');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing');
    } else {
        audio.pause();
        playButton.classList.remove('playing');
    }
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    audio.play();
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    audio.play();
});
