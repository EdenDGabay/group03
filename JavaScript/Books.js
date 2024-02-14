function Book(title, author, category, description, imageSrc, altText) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.description = description;
    this.imageSrc = imageSrc;
    this.altText = altText;
}

// Example Book instance creation
let exampleBook = new Book(
  "The Great Escape",
  "Paul Brickhill",
  "Adventure",
  "This book is known for its thrilling plot and suspenseful storyline. It keeps readers on the edge of their seats with unexpected twists and turns. A popular choice for those who enjoy a gripping reading experience. This thriller is also believed to have a number of thought-provoking themes, making it a great choice for book club discussions. Dive into the suspense and unravel the mystery.",
  "../img/TheGreatEscapeCover.jpg", // Fixed src assignment
  "Cover image of The Great Escape"
);

// Initialize wishlistBooks array
let wishlistBooks = [];

// Initialize swappableBooks array - Declaration moved here to ensure it's only declared once
let swappableBooks = [
  {title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", category: "Finance", cover: "../img/RichDadPoorDadBook.jpg"},
  {title: "The Butterfly Effect", author: "Andy Andrews", category: "Self-help", cover: "../img/TheButterflyEffectBook.jpg"},
  {title: "Eragon", author: "Christopher Paolini", category: "Fantasy", cover: "../img/EragonBook.jpg"}
];

// Function to create and return a book HTML element
function createBookHTML(book) {
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    // Other element creation and setup...
    return bookDiv;
}

// Function to render all books on the wishlist
function renderWishlist() {
    let wishlistSection = document.getElementById('wishlist');
    wishlistBooks.forEach(function(book) {
        wishlistSection.appendChild(createBookHTML(book));
    });
}

// Function to create and return a book item HTML element for swappable books
function createBookItem(book) {
    let div = document.createElement('div');
    // Other element creation and setup...
    return div;
}

// Function to render user's swappable books
function renderSwappableBooks() {
    const booksGrid = document.getElementById('booksToSwap');
    if (!booksGrid) {
        console.error('The #booksToSwap element does not exist on this page.');
        return;
    }
    swappableBooks.forEach(function(book) {
        booksGrid.appendChild(createBookItem(book));
    });
}

// DOMContentLoaded listeners combined to ensure streamlined execution
document.addEventListener("DOMContentLoaded", function() {
    renderWishlist();
    renderSwappableBooks();

    // Assuming exampleBook or another book object is to be displayed somewhere specifically
    if (document.getElementById('bookImage')) {
        document.getElementById('bookImage').src = exampleBook.imageSrc;
        document.getElementById('bookImage').alt = exampleBook.altText;
        document.getElementById('bookTitle').textContent = exampleBook.title;
        document.getElementById('bookAuthor').textContent = exampleBook.author;
        document.getElementById('bookCategory').textContent = exampleBook.category;
        document.getElementById('bookDescription').textContent = exampleBook.description;
    }
});
