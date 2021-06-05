window.addEventListener('load', ()=>{
    const urlVideo = window.localStorage.getItem('url');
    const video = document.getElementById('video');
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.attachMedia(video);
        hls.loadSource(urlVideo);
    };
});
