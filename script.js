document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(
        ".hero-video-container .hero-video"
    );

    if (videos.length === 0) return;

    let currentIndex = 0;
    let timer;

    const duration = 5000;

    function playVideo(index) {
        // Arrêter toutes les vidéos
        videos.forEach((video) => {
            video.pause();
            video.classList.remove("active");
            video.currentTime = 0;
        });

        // Activer la vidéo sélectionnée
        const currentVideo = videos[index];

        currentVideo.classList.add("active");
        currentVideo.muted = true;
        currentVideo.playsInline = true;

        currentVideo.play()
            .then(() => {
                console.log("Vidéo en lecture :", index + 1);
            })
            .catch((error) => {
                console.error("Erreur de lecture vidéo :", error);
            });

        // Programmer la prochaine vidéo
        clearTimeout(timer);

        timer = setTimeout(() => {
            currentIndex = (currentIndex + 1) % videos.length;
            playVideo(currentIndex);
        }, duration);
    }

    // Démarrer le diaporama vidéo
    playVideo(currentIndex);
});



