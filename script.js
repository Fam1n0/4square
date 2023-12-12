document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const originalImage = new Image();
            originalImage.onload = function() {
                const canvas = document.getElementById('imageCanvas');
                const ctx = canvas.getContext('2d');

                const size = Math.max(originalImage.width, originalImage.height);
                canvas.width = size * 2;
                canvas.height = size * 2;

                // Original image
                ctx.drawImage(originalImage, 0, 0, size, size);

                // 90 degrees rotated
                ctx.save();
                ctx.translate(size * 2, 0);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(originalImage, 0, 0, size, size);
                ctx.restore();

                // 180 degrees rotated
                ctx.save();
                ctx.translate(size * 2, size * 2);
                ctx.rotate(Math.PI);
                ctx.drawImage(originalImage, 0, 0, size, size);
                ctx.restore();

                // 270 degrees rotated
                ctx.save();
                ctx.translate(0, size * 2);
                ctx.rotate(-Math.PI / 2);
                ctx.drawImage(originalImage, 0, 0, size, size);
                ctx.restore();
            };
            originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
