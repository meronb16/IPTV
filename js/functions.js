function screenSize() {
    let width  = window.screen.width;
    let height = window.screen.height;
    let size   = {"width": width, "height": height};

    return size;
} 

function fullScreen() {
    let frame = document.querySelector('html');
    frame.requestFullscreen();
}