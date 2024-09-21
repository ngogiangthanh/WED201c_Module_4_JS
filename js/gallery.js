/* gallery.js */

function upDate(previewPic) {
    // Change the background to image URL
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;

    // Change the text to content
    document.getElementById('image').textContent = previewPic.alt;
}

function unDo() {
    // Reset background image to the original
    document.getElementById('image').style.backgroundImage = 'url("")';

    // Reset text content to the original
    document.getElementById('image').textContent = 'Please hover over an image below to display here!';
}

function addTabIndex() {
    console.log("onload event triggered - adding tabindex"); // Log to console

    // Get all images with class "preview"
    let images = document.querySelectorAll('.preview');

    // Loop through the images and add tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0'); // Make them focusable
    }
}