<div class="tourism video">
    <video
    id="ugandaTourvideo"
    width="100%"
    height="auto"
    controls
    muted
    playsinline
    poster="video-thumbnail.jpg">
</video>

<div class="video-controls">
    <button id="PlayPauseBtn">Pause</button>
    <button id="muteBtn">Unmute</button>
</div>
</div>

<script>
    // Get the video and buttons
    const video = document.getElementById('UgandaTourVideo');
    const PlayPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

    //Auto-play on load but muted - required for mobile autoplay
    window.addEventListener('load', ()=> {
        video.play().catch(err => {
            console.log('Autoplay blocked:',err);
        });
    });

    //play/pause toggle
    playPauseBtn.addEventListener('click',()=>{
        if (video.paused) {
            video.play();
            playPauseBtn.textcontent = 'pause';
        }else{
            video.pause();
            playPauseBtn.textcontent = 'play';
        }
        }
    });

    // Optional: Pause video when it scrolls out of view
    const observer= new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                video.pause();
            }
        });
    });
},{ threshold: 0.5 });

obsever.observe(video);
</script>

<style>
    .tourism-video{
        max-width: 900px;
        margin: 0 auto;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .video-controls {
        position: absolute;
        bottom: 15px;
        left: 15px;
        display: flex;
        gap: 10px;
    }

    .video-controls button {
        background: rgba(0,0,0,0.6);
        color: #fff;
        border: none;
        padding: 8px 14px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .video-controls button:hover {
        background: rgba(249, 211, 66, 0.9);
        color:#000;
    }
</style>
