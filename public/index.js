const inputField = document.querySelector("input");
const thumbnail = document.querySelector(".thumbnail");
const icon = document.querySelector(".thumbnail img");
const preview = document.querySelector(".preview")
const downloadBtn = document.querySelector(".download-btn");
inputField.addEventListener("keyup", () => {
    let videoUrl = inputField.value;

    if (videoUrl.indexOf("https://www.youtube.com/watch?v=") != -1) {
        let videoId = videoUrl.split("v=")[1].substring(0, 11);
        let thumbUrl = "https://img.youtube.com/vi/" + videoId +"/maxresdefault.jpg";
        preview.src = thumbUrl;
        preview.style.display = "block"
        thumbnail.style.display = "none"
    }
    else if (videoUrl.indexOf("youtu.be/") != -1) {
        let videoId = videoUrl.split("be/")[1].substring(0, 11);
        let thumbUrl = "https://img.youtube.com/vi/" + videoId +"/maxresdefault.jpg";
        preview.src = thumbUrl;
        preview.style.display = "block"
        thumbnail.style.display = "none"
    }
    else if (videoUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
        preview.src = thumbUrl;
        preview.style.display = "block"
        thumbnail.style.display = "none"
    }
    else{
        icon.src = "images/oops.png";
        document.querySelector(".thumbnail p").innerHTML = "Invaild URL"

    }


});

function downloadImage() {
    if (preview.src) {
        const imageUrl = preview.src;
        const proxyUrl = `http://localhost:3000/download-thumbnail?url=${encodeURIComponent(imageUrl)}`;

        const link = document.createElement("a");
        link.href = proxyUrl;
        link.download = "thumbnail.jpg";
        link.click();
    } else {
        alert("No image to download!");
    }
}

downloadBtn.addEventListener("click", downloadImage);
