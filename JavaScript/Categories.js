document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const categoryTitleElement = document.getElementById('categoryTitle');
    if (category) {
        categoryTitleElement.textContent = category;
    } else {
        categoryTitleElement.textContent = "Categories";
    }

    const booksByCategory = {
        "Mystery": [
            {title: "The Da Vinci Code", author: "Dan Brown", category: "Mystery", imageSrc: "../img/DaVinciCode.jpg", altText: "The Da Vinci Code cover image"},
            {title: "Gone Girl", author: "Gillian Flynn", category: "Mystery", imageSrc: "../img/GoneGirl.jpg", altText: "Gone Girl cover image"},

        ],
        "Fantasy": [
            {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Fantasy", imageSrc: "../img/HPSorcerereStone.jpg", altText: "Harry Potter and the Sorcerer's Stone cover image"},
            {title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", imageSrc: "../img/TheHobbit.jpg", altText: "The Hobbit cover image"},

        ],
        "Biography": [
            {title: "Steve Jobs", author: "Walter Isaacson", category: "Biography", imageSrc: "../img/Steve Jobs.jpg", altText: "Steve Jobs cover image"},
            {title: "Educated", author: "Tara Westover", category: "Biography", imageSrc: "../img/EducatedBiography.jpg", altText: "Educated cover image"},

        ],
        "Horror": [
            {title: "The Shining", author: "Stephen King", category: "Horror", imageSrc: "../img/TheShining.jpg", altText: "The Shining cover image"},
            {title: "Dracula", author: "Bram Stoker", category: "Horror", imageSrc: "../img/Dracula.jpg", altText: "Dracula cover image"},

        ],
        "Romance": [
            {title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", imageSrc: "../img/PrideAndPrejudice.jpg", altText: "Pride and Prejudice cover image"},
            {title: "The Notebook", author: "Nicholas Sparks", category: "Romance", imageSrc: "../img/TheNotebook.jpg", altText: "The Notebook cover image"},

        ],
        "Comedy": [
            {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", category: "Comedy", imageSrc: "../img/TheHitchhikersGuideToTheGalaxy.jpg", altText: "The Hitchhiker's Guide to the Galaxy cover image"},
            {title: "Good Omens", author: "Terry Pratchett & Neil Gaiman", category: "Comedy", imageSrc: "../img/GoodOmens.jpg", altText: "Good Omens cover image"},

        ],
        "Adventure": [
            {title: "The Adventures of Tom Sawyer", author: "Mark Twain", category: "Adventure", imageSrc: "../img/TheAdventuresOfTomSawyer.jpg", altText: "The Adventures of Tom Sawyer cover image"},
            {title: "Treasure Island", author: "Robert Louis Stevenson", category: "Adventure", imageSrc: "../img/TreasureIsland.jpg", altText: "Treasure Island cover image"},

        ],
        "Science Fiction": [
            {title: "Dune", author: "Frank Herbert", category: "Science Fiction", imageSrc: "../img/Dune.jpg", altText: "Dune cover image"},
            {title: "The War of the Worlds", author: "H.G. Wells", category: "Science Fiction", imageSrc: "../img/TheWarOfTheWorlds.jpg", altText: "The War of the Worlds cover image"},

        ],
        "History": [
            {title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", imageSrc: "../img/SapiensABriefHistoryOfHumankind.jpg", altText: "Sapiens: A Brief History of Humankind cover image"},
            {title: "The Wright Brothers", author: "David McCullough", category: "History", imageSrc: "../img/TheWrightBrothers.jpg", altText: "The Wright Brothers cover image"},

        ],
    };

function createBookHTML(book) {
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    let img = document.createElement('img');
    img.src = book.imageSrc;
    img.alt = book.altText;
    img.className = 'book-cover';

    let infoDiv = document.createElement('div');
    infoDiv.className = 'book-info';
    let titleH3 = document.createElement('h3');
    titleH3.className = 'book-title';
    titleH3.textContent = book.title;
    let authorP = document.createElement('p');
    authorP.className = 'book-author';
    authorP.textContent = book.author;

    let detailsButton = document.createElement('a');
    detailsButton.className = 'details-button';
    detailsButton.textContent = 'Book Details';
    detailsButton.href = 'BookDetails.html';
    detailsButton.style.display = 'block';
    detailsButton.style.marginTop = '10px';
    detailsButton.style.textDecoration = 'none';
    detailsButton.style.backgroundColor = '#a87a4c';
    detailsButton.style.color = 'white';
    detailsButton.style.padding = '10px 15px';
    detailsButton.style.borderRadius = '5px';

    infoDiv.appendChild(titleH3);
    infoDiv.appendChild(authorP);
    bookDiv.appendChild(img);
    bookDiv.appendChild(infoDiv);
    bookDiv.appendChild(detailsButton);

    return bookDiv;
}

    function displayBooksByCategory(category) {
        let categoryBooksContainer = document.getElementById('categoryBooks');
        categoryBooksContainer.innerHTML = '';

        const books = booksByCategory[category] || [];

        books.forEach(book => {
            categoryBooksContainer.appendChild(createBookHTML(book));
        });
    }

    displayBooksByCategory(category);
});
