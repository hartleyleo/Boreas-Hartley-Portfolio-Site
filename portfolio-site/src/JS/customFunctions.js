/**
 * Gets the average rgb value of every pixel in the image and returns it as an rgb value.
 *
 * @param imagePath the path to the image being referrenced
 * @returns The averaged rgb value of the entire image
 */
function calculateAverageRGB(imagePath) {
    return new Promise((resolve, reject) => {
    
        // Image object to store image data into 
        const img = new Image();

        // Allow cross-origin access to the image to avoid modern browser server issues
        img.crossOrigin = "Anonymous";
        img.onload = () => {

            // Creates an invisible canvas to load the image element into
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
    
            // Draws the image onto the invisible canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // Loops through the entire image pixel by pixel and adds the rgb values of each pixel
            let r = 0;
            let g = 0;
            let b = 0;
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            for (let i = 0; i < imageData.length; i += 4) {
                r += imageData[i];
                g += imageData[i + 1];
                b += imageData[i + 2];
            }
    
            // Averages the rgb values
            const pixelCount = imageData.length / 4;
            const avgR = Math.round(r / pixelCount);
            const avgG = Math.round(g / pixelCount);
            const avgB = Math.round(b / pixelCount);
    
            resolve({ r: avgR, g: avgG, b: avgB });
        };
        img.src = imagePath;
    });

}

export default calculateAverageRGB;