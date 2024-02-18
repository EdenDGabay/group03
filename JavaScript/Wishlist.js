document.addEventListener("DOMContentLoaded", function() {
    // Show the form when the "Add to Wishlist" button is clicked
    document.getElementById('showAddBookForm').addEventListener('click', function() {
        document.getElementById('addBookForm').style.display = 'block';
    });

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

    const textRegex = /^[a-zA-Z0-9\s,'-:.]+$/;
    if (!textRegex.test(title) || !textRegex.test(author)) {
        alert("Please enter valid title and author names. Only letters, numbers, spaces, and ', - : . characters are allowed.");
        return false;
    }

    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?.(jpg|jpeg|png|gif)$/i;
    if (coverUrl && !urlRegex.test(coverUrl)) {
        alert("Please enter a valid URL for the cover image. Only images are allowed (jpg, jpeg, png, gif).");
        return false;
    }

    return true;
}

function addBookToWishlist() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const coverUrl = document.getElementById('bookCover').value || 'placeholder-image-url.jpg'; // Provide a default cover URL

    const newBookHtml = `
        <div class="book">
            <img src="${coverUrl}" alt="${title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </div>
        </div>
    `;

    document.getElementById('wishlist').innerHTML += newBookHtml;

    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookCover').value = '';
    document.getElementById('addBookForm').style.display = 'none';
}

function updateCounts() {
    document.getElementById('wishlistCount').textContent = localStorage.getItem('wishlistCount') || 0;
}

document.addEventListener("DOMContentLoaded", function() {
    updateCounts();
});
