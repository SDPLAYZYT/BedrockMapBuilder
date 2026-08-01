const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

input.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const img = new Image();

    img.onload = function () {

        preview.src = img.src;
        preview.style.display = "block";

        ctx.clearRect(0,0,128,128);

        ctx.drawImage(img,0,0,128,128);

        status.innerText = "Image Loaded Successfully";

    };

    img.src = URL.createObjectURL(file);

});

function convertImage(){

    status.innerText = "Preparing Image...";

}
