document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Update the page headline dynamically
    const categoryTitleElement = document.getElementById('categoryTitle');
    if (category) {
        categoryTitleElement.textContent = category; // Set the category name as the headline
    } else {
        categoryTitleElement.textContent = "Categories"; // Default headline if no category is selected
    }

    // Sample book objects for each category
    const booksByCategory = {
        "Mystery": [
            {title: "The Da Vinci Code", author: "Dan Brown", category: "Mystery", imageSrc: "../img/DaVinciCode.jpg", altText: "The Da Vinci Code cover image"},
            {title: "Gone Girl", author: "Gillian Flynn", category: "Mystery", imageSrc: "../img/GoneGirl.jpg", altText: "Gone Girl cover image"},
            // Add more books for Mystery category as needed
        ],
        "Fantasy": [
            {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Fantasy", imageSrc: "../img/HPSorcerereStone.jpg", altText: "Harry Potter and the Sorcerer's Stone cover image"},
            {title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", imageSrc: "../img/TheHobbit.jpg", altText: "The Hobbit cover image"},
            // Add more books for Fantasy category as needed
        ],
        "Biography": [
            {title: "Steve Jobs", author: "Walter Isaacson", category: "Biography", imageSrc: "../img/Steve Jobs.jpg", altText: "Steve Jobs cover image"},
            {title: "Educated", author: "Tara Westover", category: "Biography", imageSrc: "../img/EducatedBiography.jpg", altText: "Educated cover image"},
            // Add more books for Biography category as needed
        ],
        "Horror": [
            {title: "The Shining", author: "Stephen King", category: "Horror", imageSrc: "../img/TheShining.jpg", altText: "The Shining cover image"},
            {title: "Dracula", author: "Bram Stoker", category: "Horror", imageSrc: "../img/Dracula.jpg", altText: "Dracula cover image"},
            // Add more books for Horror category as needed
        ],
        "Romance": [
            {title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", imageSrc: "../img/PrideAndPrejudice.jpg", altText: "Pride and Prejudice cover image"},
            {title: "The Notebook", author: "Nicholas Sparks", category: "Romance", imageSrc: "../img/TheNotebook.jpg", altText: "The Notebook cover image"},
            // Add more books for Romance category as needed
        ],
        "Comedy": [
            {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", category: "Comedy", imageSrc: "../img/TheHitchhikersGuideToTheGalaxy.jpg", altText: "The Hitchhiker's Guide to the Galaxy cover image"},
            {title: "Good Omens", author: "Terry Pratchett & Neil Gaiman", category: "Comedy", imageSrc: "../img/GoodOmens.jpg", altText: "Good Omens cover image"},
            // Add more books for Comedy category as needed
        ],
        "Adventure": [
            {title: "The Adventures of Tom Sawyer", author: "Mark Twain", category: "Adventure", imageSrc: "../img/TheAdventuresOfTomSawyer.jpg", altText: "The Adventures of Tom Sawyer cover image"},
            {title: "Treasure Island", author: "Robert Louis Stevenson", category: "Adventure", imageSrc: "../img/TreasureIsland.jpg", altText: "Treasure Island cover image"},
            // Add more books for Adventure category as needed
        ],
        "Science Fiction": [
            {title: "Dune", author: "Frank Herbert", category: "Science Fiction", imageSrc: "../img/Dune.jpg", altText: "Dune cover image"},
            {title: "The War of the Worlds", author: "H.G. Wells", category: "Science Fiction", imageSrc: "../img/TheWarOfTheWorlds.jpg", altText: "The War of the Worlds cover image"},
            // Add more books for Science Fiction category as needed
        ],
        "History": [
            {title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", imageSrc: "../img/SapiensABriefHistoryOfHumankind.jpg", altText: "Sapiens: A Brief History of Humankind cover image"},
            {title: "The Wright Brothers", author: "David McCullough", category: "History", imageSrc: "../img/TheWrightBrothers.jpg", altText: "The Wright Brothers cover image"},
            // Add more books for History category as needed
        ],
    };

    // Function to create and return a book HTML element
    function createBookHTML(book) {
        let bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        // Create and set up book cover image
        let img = document.createElement('img');
        img.src = book.imageSrc;
        img.alt = book.altText;
        img.className = 'book-cover';

        // Create and set up book info
        let infoDiv = document.createElement('div');
        infoDiv.className = 'book-info';
        let titleH3 = document.createElement('h3');
        titleH3.className = 'book-title';
        titleH3.textContent = book.title;
        let authorP = document.createElement('p');
        authorP.className = 'book-author';
        authorP.textContent = book.author;

        // Append elements to bookDiv
        infoDiv.appendChild(titleH3);
        infoDiv.appendChild(authorP);
        bookDiv.appendChild(img);
        bookDiv.appendChild(infoDiv);

        return bookDiv;
    }

    // Function to render books based on category
    function displayBooksByCategory(category) {
        let categoryBooksContainer = document.getElementById('categoryBooks');
        categoryBooksContainer.innerHTML = ''; // Clear previous content

        // Get sample books for the selected category
        const books = booksByCategory[category] || [];

        // Create and append book elements to categoryBooksContainer
        books.forEach(book => {
            categoryBooksContainer.appendChild(createBookHTML(book));
        });
    }

    // Display books based on the selected category
    displayBooksByCategory(category);
});
