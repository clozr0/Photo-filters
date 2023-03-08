// All var

let img = document.querySelector("#img");
let imgBox = document.querySelector(".img-box");
let upload = document.querySelector("#upload");
let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayscale = document.querySelector("#grayscale");
let Blur = document.querySelector("#blur");
let hueRotate = document.querySelector("#hue-rotate");
let Download = document.querySelector("#download");
let Reset = document.querySelector("#reset");

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// --------------------------------------------------

function resetValue() {
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    Blur.value = "0";
    hueRotate.value = "0";
    img.style.filter = "none";
}

window.onload = function () {
  Download.style.display = "none";
  Reset.style.display = "none";
  imgBox.style.display = "none";
};

upload.onchange = function () {
  resetValue();
  Download.style.display = "block";
  Reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};

let filters = document.querySelectorAll(".inp");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${Blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

Download.onclick = function () {
  Download.href = canvas.toDataURL();
};
