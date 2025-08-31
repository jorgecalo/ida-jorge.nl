// gallery.js

document.addEventListener('DOMContentLoaded', function() {
    // --- YOUR PHOTO ALBUM ---
    // This is your list of 5 photos.
    // Make sure your image files are inside a folder named "photos".
    const photos = [
        {
            src: 'photos/SMR03706.JPG',
            caption: 'Our favorite memory!' // You can change this caption
        },
        {
            src: 'photos/SMR03865.JPG', // <-- CHANGE THIS FILENAME
            caption: 'Add your caption here.'
        },
        {
            src: 'photos/SMR03648.JPG', // <-- CHANGE THIS FILENAME
            caption: 'Add your caption here.'
        },
        {
            src: 'photos/SMR03886.JPG', // <-- CHANGE THIS FILENAME
            caption: 'Add your caption here.'
        },
        {
            src: 'photos/SMR04191.JPG', // <-- CHANGE THIS FILENAME
            caption: 'Add your caption here.'
        }
    ];

    // The code below creates the gallery and makes the photos pop up when clicked.
    // You don't need to change anything below this line.
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close')[0];

    gallery.innerHTML = ''; 

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        
        gallery.appendChild(img);
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});