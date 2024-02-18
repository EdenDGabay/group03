document.addEventListener("DOMContentLoaded", function() {
    renderSwappableBooks();

    const addBookButton = document.getElementById('showAddBookForm');
    const addBookForm = document.getElementById('addBookForm');

    addBookButton.addEventListener('click', () => {
        if (addBookForm.style.display === 'none') {
            addBookForm.style.display = 'block';
        } else {
            addBookForm.style.display = 'none';
        }
    });

    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addBookToSwaplist();
    });
});

function renderSwappableBooks() {
    let swappableBooks = JSON.parse(localStorage.getItem('swappableBooks')) || [];

    const booksGrid = document.getElementById('booksToSwap');
    swappableBooks.forEach(book => {
        booksGrid.appendChild(createBookHTML(book));
    });
}

function addBookToSwaplist() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const coverUrl = document.getElementById('bookCover').value || '';

    if (!isValidUrl(coverUrl)) {
        alert('Please enter a valid URL for the book cover image.');
        return;
    }

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

    const booksGrid = document.getElementById('booksToSwap');
    booksGrid.innerHTML += newBookHtml;

    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookCover').value = '';
    document.getElementById('addBookForm').style.display = 'none';

    const addBookMessage = document.getElementById('addBookMessage');
    addBookMessage.style.display = 'block';

    setTimeout(function() {
        addBookMessage.style.display = 'none';
    }, 5000);
}

function createBookHTML(book) {
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';

    let img = document.createElement('img');
    img.src = book.imageSrc;
    img.alt = book.altText || 'Book cover';
    img.className = 'book-cover';

    let titleH3 = document.createElement('h3');
    titleH3.className = 'book-title';
    titleH3.textContent = book.title;

    let authorP = document.createElement('p');
    authorP.className = 'book-author';
    authorP.textContent = book.author;

    let detailsButton = document.createElement('a');
    detailsButton.className = 'details-button'; // Reuse the class for styling buttons
    detailsButton.href = 'BookDetailsPage.html'; // The link to your Book Details page
    detailsButton.textContent = 'Book Details';

    bookDiv.appendChild(img);
    bookDiv.appendChild(titleH3);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(detailsButton);

    return bookDiv;
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}
