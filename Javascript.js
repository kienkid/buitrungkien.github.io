function changeVideo(videoId) {
    const mainVideo = document.getElementById("main-video");
    mainVideo.src = "https://www.youtube.com/embed/" + videoId;
}