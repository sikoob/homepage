function checkScroll() {
    const videos = document.querySelectorAll(".hero__video");

    for(const video of videos) {
        const boundingRect = video.getBoundingClientRect();
        const visible = (boundingRect.top + boundingRect.height > 0 &&
            boundingRect.top < window.innerHeight);

        if (visible) {
            video.play();
        } else {
            video.pause();
        }
    }
}