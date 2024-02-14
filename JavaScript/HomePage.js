document.addEventListener("DOMContentLoaded", function() {
    // Assuming you've defined swappableBooks and the function to create book items
    renderSwappableBooks(); // This will now only set up the initial state if needed
});

const swappableBooks = [
    { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", category: "Finance", cover: "../img/RichDadPoorDadBook.jpg" },
    { title: "The Butterfly Effect", author: "Andy Andrews", category: "Self-help", cover: "../img/TheButterflyEffectBook.jpg" },
    { title: "Eragon", author: "Christopher Paolini", category: "Fantasy", cover: "../img/EragonBook.jpg" }
    // Add more books here, ensuring the 'category' field matches your category names exactly.
];

function displayBooksByCategory(categoryName) {
    const booksGrid = document.getElementById('booksToSwap');
    booksGrid.innerHTML = ''; // Clear existing books

    const filteredBooks = swappableBooks.filter(book => book.category === categoryName);
    filteredBooks.forEach(book => {
        booksGrid.appendChild(createBookItem(book));
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Attach click events to category elements programmatically
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.getAttribute('id'); // Use the ID as the category name
            displayBooksByCategory(categoryName);
        });
    });
});


