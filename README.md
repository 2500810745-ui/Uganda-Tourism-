<div class="tourism-video">
  <video 
    id="ugandaTourVideo"
    width="100%" 
    height="auto"
    controls 
    muted 
    playsinline
    poster="video-thumbnail.jpg">
    
    <source src="uganda-tour.mp4" type="video/mp4">
    <source src="uganda-tour.webm" type="video/webm">
    
    Your browser does not support the video tag.
  </video>

  <div class="video-controls">
    <button id="playPauseBtn">Pause</button>
    <button id="muteBtn">Unmute</button>
  </div>
</div>

<script>
// Get the video and buttons
const video = document.getElementById('ugandaTourVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

// Auto-play on load but muted - required for mobile autoplay
window.addEventListener('load', () => {
  video.play().catch(err => {
    console.log('Autoplay blocked:', err);
  });
});

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Mute/Unmute toggle
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});

// Optional: Pause video when it scrolls out of view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      video.pause();
    }
  });
}, { threshold: 0.5 });
