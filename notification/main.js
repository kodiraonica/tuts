const progress = document.getElementById("progress");
const notification = document.getElementById("notification")
let width = 100;
const interval = setInterval(() => {
    width -= 1;
    progress.style.width = `${width}%`

    if (width <= 0) {
        clearInterval(interval);
        notification.style.display = "none"
    }
}, 50)