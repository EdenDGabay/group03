document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    document.getElementById('categoryTitle').textContent = `Category: ${category}`;
    displayBooksByCategory(category);
});

function displayBooksByCategory(categoryName) {
    const booksGrid = document.getElementById('booksContainer');
    booksGrid.innerHTML = ''; // Clear existing content

    // Assuming swappableBooks is available globally or imported
    const filteredBooks = swappableBooks.filter(book => book.category === categoryName);

    // Display filtered books
    filteredBooks.forEach(book => {
        booksGrid.appendChild(createBookItem(book));
    });
}

