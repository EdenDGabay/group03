document.addEventListener("DOMContentLoaded", function() {
    renderSwappableBooks();
});

const swappableBooks = [
    { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", category: "Finance", cover: "../img/RichDadPoorDadBook.jpg" },
    { title: "The Butterfly Effect", author: "Andy Andrews", category: "Self-help", cover: "../img/TheButterflyEffectBook.jpg" },
    { title: "Eragon", author: "Christopher Paolini", category: "Fantasy", cover: "../img/EragonBook.jpg" }
];

function displayBooksByCategory(categoryName) {
    const booksGrid = document.getElementById('booksToSwap');
    booksGrid.innerHTML = '';

    const filteredBooks = swappableBooks.filter(book => book.category === categoryName);
    filteredBooks.forEach(book => {
        booksGrid.appendChild(createBookItem(book));
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.getAttribute('id');
            displayBooksByCategory(categoryName);
        });
    });
});


