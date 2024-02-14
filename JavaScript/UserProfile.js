
function addSwap() {
    let booksSwapped = JSON.parse(localStorage.getItem('booksSwapped')) || [];
    // Logic to add a book to the swapped books array
    // For example:
    // booksSwapped.push(book);
    localStorage.setItem('booksSwapped', JSON.stringify(booksSwapped));
}

// Function to increment the "Wishlist" count
function addWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    // Logic to add a book to the wishlist array
    // For example:
    // wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

document.addEventListener("DOMContentLoaded", function() {
    renderSwappableBooks();
});

function renderSwappableBooks() {
    // Assuming 'swappableBooks' is the key for the books data in localStorage
    let swappableBooks = JSON.parse(localStorage.getItem('swappableBooks')) || [];

    const booksGrid = document.getElementById('booksToSwap');
    swappableBooks.forEach(book => {
        booksGrid.appendChild(createBookHTML(book));
    });
}

function createBookHTML(book) {
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    let img = document.createElement('img');
    img.src = book.imageSrc;
    img.alt = book.altText || 'Book cover';
    img.className = 'book-cover';

    let infoDiv = document.createElement('div');
    infoDiv.className = 'book-info';

    let titleH3 = document.createElement('h3');
    titleH3.className = 'book-title';
    titleH3.textContent = book.title;

    let authorP = document.createElement('p');
    authorP.className = 'book-author';
    authorP.textContent = book.author;

    infoDiv.appendChild(titleH3);
    infoDiv.appendChild(authorP);

    bookDiv.appendChild(img);
    bookDiv.appendChild(infoDiv);

    return bookDiv;
}
