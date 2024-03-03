// import $ from 'jquery';

function loadJSON(filePath) {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                try {
                    // Parse JSON data from the response
                    var jsonData = JSON.parse(this.responseText);
                    // Extract descriptions from the array of objects
                    const descriptions = jsonData.images_descriptions.map(item => item.description);
                    // Resolve the promise with the descriptions
                    resolve(descriptions);
                } catch (error) {
                    // If there's an error parsing JSON, reject the promise
                    reject(error);
                }
            }
        };

        // Prepare the request
        xhttp.open("GET", filePath, true);

        // Send the request
        xhttp.send();
    });
}

function loadXML(filePath) {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                try {
                    // Parse XML data from the response
                    var xmlDoc = this.responseXML;
                    // Extract titles from the XML structure
                    const titles = [];
                    const imageNodes = xmlDoc.getElementsByTagName("image");
                    for (let i = 0; i < imageNodes.length; i++) {
                        const titleNode = imageNodes[i].getElementsByTagName("title")[0];
                        if (titleNode) {
                            titles.push(titleNode.textContent);
                        }
                    }
                    // Resolve the promise with the titles
                    resolve(titles);
                } catch (error) {
                    // If there's an error parsing XML, reject the promise
                    reject(error);
                }
            }
        };

        // Prepare the request
        xhttp.open("GET", filePath, true);
        xhttp.setRequestHeader("Content-Type", "text/xml");

        // Send the request
        xhttp.send();
    });
}


// function loadHTML(filePath) {
//     var xhttp = new XMLHttpRequest();

//     // Update element 
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             document.getElementById("info-body-container").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", filePath, true);
//     xhttp.send();
// }

// function loadJQHTML(filePath) {
//     $('#info-body-container').load(filePath);
// }


export {loadJSON, loadXML};
