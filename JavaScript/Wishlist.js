document.addEventListener("DOMContentLoaded", function() {
    // Show the form when the "Add to Wishlist" button is clicked
    document.getElementById('showAddBookForm').addEventListener('click', function() {
        document.getElementById('addBookForm').style.display = 'block';
    });

    // Handle form submission
    document.getElementById('addBookForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        if (validateFormFields()) { // Perform validation
            addBookToWishlist(); // Add book to wishlist if validation passes
        }
    });
});

function validateFormFields() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const coverUrl = document.getElementById('bookCover').value;

    // Text validation for title and author fields
    const textRegex = /^[a-zA-Z0-9\s,'-:.]+$/;
    if (!textRegex.test(title) || !textRegex.test(author)) {
        alert("Please enter valid title and author names. Only letters, numbers, spaces, and ', - : . characters are allowed.");
        return false;
    }

    // URL validation for cover image (if provided)
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?.(jpg|jpeg|png|gif)$/i;
    if (coverUrl && !urlRegex.test(coverUrl)) {
        alert("Please enter a valid URL for the cover image. Only images are allowed (jpg, jpeg, png, gif).");
        return false;
    }

    return true; // All validations passed
}

function addBookToWishlist() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const coverUrl = document.getElementById('bookCover').value || 'placeholder-image-url.jpg'; // Provide a default cover URL if none is provided

    // Construct the new book HTML with the "Book Details" button
    const newBookHtml = `
        <div class="book">
            <img src="${coverUrl}" alt="${title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
                <a href="BookDetails.html" class="details-button">Book Details</a>
            </div>
        </div>
    `;

    // Add the new book to the wishlist section
    document.getElementById('wishlist').innerHTML += newBookHtml;

    // Clear the form and hide it
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookCover').value = '';
    document.getElementById('addBookForm').style.display = 'none';
}

function updateCounts() {
    document.getElementById('wishlistCount').textContent = localStorage.getItem('wishlistCount') || 0;
}

// Initialize the counts on page load
document.addEventListener("DOMContentLoaded", function() {
    updateCounts();
});
