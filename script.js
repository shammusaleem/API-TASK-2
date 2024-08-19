function getDogImage() {
    console.log('Fetching a new dog image...'); // Debugging step
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the entire response to check if it has the image URL
            document.getElementById('dog-image').src = data.message; // Assign the image source
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

getDogImage(); // Call the function to load the first image
