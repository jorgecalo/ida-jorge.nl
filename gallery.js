// gallery.js

document.addEventListener('DOMContentLoaded', function() {
    // --- YOUR PHOTO ALBUM ---
    const photos = [
        {
            src: 'photos/SMR03706.JPG',
            caption: 'The proposal!' // You can change this caption
        },
        {
            src: 'photos/SMR03865.JPG', // <-- CHANGE THIS FILENAME
            caption: 'The proposal!'
        },
        {
            src: 'photos/SMR03648.JPG', // <-- CHANGE THIS FILENAME
            caption: 'The proposal!'
        },
        {
            src: 'photos/SMR03886.JPG', // <-- CHANGE THIS FILENAME
            caption: 'The proposal!'
        },
        {
            src: 'photos/SMR04191.JPG', // <-- CHANGE THIS FILENAME
            caption: 'Colosseum'
        }
    ];

    // --- GALLERY LOGIC ---
    let currentIndex = 0;
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close')[0];
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    // Clear existing gallery and build it from the photos array
    gallery.innerHTML = ''; 
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        
        // When a thumbnail is clicked, open the modal to that specific image
        img.onclick = function() {
            openModal(index);
        }
        
        gallery.appendChild(img);
    });
    
    // Function to open the modal and display a specific image
    function openModal(index) {
        currentIndex = index;
        modal.style.display = "block";
        showImage(currentIndex);
    }
    
    // Function to update the image and caption in the modal
    function showImage(index) {
        modalImg.src = photos[index].src;
        captionText.innerHTML = photos[index].caption;
    }
    
    // Function to show the next image
    function showNext() {
        currentIndex = (currentIndex + 1) % photos.length; // Wrap around to the start
        showImage(currentIndex);
    }

    // Function to show the previous image
    function showPrevious() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Wrap around to the end
        showImage(currentIndex);
    }
    
    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Assign click events to buttons
    span.onclick = closeModal;
    prevButton.onclick = showPrevious;
    nextButton.onclick = showNext;

    // Add keyboard navigation (arrow keys and Escape)
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === "block") {
            if (event.key === 'ArrowRight') {
                showNext();
            } else if (event.key === 'ArrowLeft') {
                showPrevious();
            } else if (event.key === 'Escape') {
                closeModal();
            }
        }
    });
});