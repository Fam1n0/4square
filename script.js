document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const originalImage = new Image();
            originalImage.onload = function() {
                const imageContainer = document.getElementById('imageContainer');
                imageContainer.innerHTML = '';

                // Original image
                imageContainer.appendChild(createRotatedImage(originalImage.src, 0));

                // 90 degrees rotated
                imageContainer.appendChild(createRotatedImage(originalImage.src, 90));

                // 180 degrees rotated
                imageContainer.appendChild(createRotatedImage(originalImage.src, 180));

                // 270 degrees rotated
                imageContainer.appendChild(createRotatedImage(originalImage.src, 270));
            };
            originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function createRotatedImage(src, rotation) {
    const img = document.createElement('img');
    img.src = src;
    img.style.transform = `rotate(${rotation}deg)`;
    return img;
}
