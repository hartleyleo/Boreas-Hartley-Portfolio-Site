/**
 * Converts three values into a useable rgb value
 *
 * @returns A CSS useable RGB value
//  */
// function convertToRGB(promiseObject){
//     r = Math.floor(r);
//     g = Math.floor(g);
//     b = Math.floor(b);
//     return ["rgb(",r,",",g,",",b,")"].join("");
// }

/**
 * Gets the average rgb value of every pixel in the image and returns it as an rgb value.
 *
 * @returns The averaged rgb value of the entire image
 */
function calculateAverageRGB(imagePath) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Allow cross-origin access to the image
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
  
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        let r = 0, g = 0, b = 0;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        for (let i = 0; i < imageData.length; i += 4) {
          r += imageData[i];
          g += imageData[i + 1];
          b += imageData[i + 2];
        }
  
        const pixelCount = imageData.length / 4;
        const avgR = Math.round(r / pixelCount);
        const avgG = Math.round(g / pixelCount);
        const avgB = Math.round(b / pixelCount);
  
        resolve({ r: avgR, g: avgG, b: avgB });
      };
      img.src = imagePath;
    });

    // promiseObject.then(result => {
    //     const { r, g, b } = result;
    //     const rgbValue = `rgb(${r}, ${g}, ${b})`;
    //     console.log(rgbValue); 
    // });

}
  

export default calculateAverageRGB;