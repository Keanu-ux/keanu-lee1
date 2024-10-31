// gallery.js
$(document).ready(function () {
    const images = [
        "image_50725377.JPG",
        "image_67527681.JPG",
        "image_123650291.JPG",
        "image_123650291 (1).JPG"
    ];

    let currentIndex = 0;

    function showImage(index) {
        $('#gallery-image').attr('src', images[index]);
    }

    $('#next-arrow').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    $('#prev-arrow').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Initialize with the first image
    showImage(currentIndex);
});
