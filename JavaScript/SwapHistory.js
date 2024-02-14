// Function to update the displayed counts
function updateCounts() {
    document.getElementById('booksSwappedCount').textContent = localStorage.getItem('booksSwappedCount') || 0;
}

// Initialize the counts on page load
document.addEventListener("DOMContentLoaded", function() {
    updateCounts();
});

// Function to increment the "Books Swapped" count
function addSwap() {
    let currentCount = parseInt(localStorage.getItem('booksSwappedCount') || 0);
    localStorage.setItem('booksSwappedCount', currentCount + 1);
    updateCounts();
}

// Event listener to show the form
document.getElementById('addSwapButton').addEventListener('click', function() {
    document.getElementById('newSwapForm').style.display = 'block';
    // Disable the Swap Number field and automatically set the next swap number
    document.getElementById('swapNumber').value = parseInt(localStorage.getItem('lastSwapNumber') || '0') + 1;
});

// Function to handle the new swap submission
function submitNewSwap() {
    const swapNumber = document.getElementById('swapNumber').value;
    const swapDate = document.getElementById('swapDate').value;
    const swappedWith = document.getElementById('swappedWith').value;
    const bookName = document.getElementById('bookName').value;

    if (!validateTextFields()) {
        return; // Stop form submission if validation fails
    }

    // Save the new swap information in localStorage
    const newSwap = { swapNumber, swapDate, swappedWith, bookName };
    localStorage.setItem('lastSwapNumber', swapNumber);
    localStorage.setItem('swap' + swapNumber, JSON.stringify(newSwap));

    // Increment the swap count
    addSwap();

    // Reset the form fields and hide the form
    document.getElementById('newSwapForm').style.display = 'none';
    document.getElementById('newSwapForm').reset();

    // Dynamically update the swap history table without reloading the page
    displaySwaps();
}

// Dynamically generate and display swap history
function displaySwaps() {
    const swapTableBody = document.querySelector('.swap-table tbody');
    swapTableBody.innerHTML = ''; // Clear existing rows
    const swapsCount = parseInt(localStorage.getItem('lastSwapNumber') || 0);
    for (let i = 1; i <= swapsCount; i++) {
        const swap = JSON.parse(localStorage.getItem('swap' + i));
        if (swap) { // Check if swap data exists
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${swap.swapNumber}</td>
                <td>${swap.swapDate}</td>
                <td>${swap.swappedWith}</td>
                <td>${swap.bookName}</td>
            `;
            swapTableBody.appendChild(row);
        }
    }
}

// Initialize the swap history and counts when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    updateCounts();
    displaySwaps();
});

// Function to validate text fields
function validateTextFields() {
    const swappedWithName = document.getElementById('swappedWith').value;
    const bookName = document.getElementById('bookName').value;

    // Regular expression for valid text (letters, spaces, and common punctuation)
    const validTextRegex = /^[a-zA-Z\s,'-]+$/;

    // Test the 'swappedWith' field
    if (!validTextRegex.test(swappedWithName)) {
        alert("Please enter a valid name in the 'Swapped With' field.");
        return false;
    }

    // Test the 'bookName' field
    if (!validTextRegex.test(bookName)) {
        alert("Please enter a valid book name.");
        return false;
    }

    return true; // All validations passed
}

// Remember to bind the submitNewSwap function to the form's submit button without parentheses
// This ensures the function is called when the button is clicked, not when the script is loaded
document.getElementById('newSwapForm').onsubmit = submitNewSwap;

