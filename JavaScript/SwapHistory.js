document.addEventListener("DOMContentLoaded", function() {
    displaySwaps(); // Initially display swaps, including the static example
    updateCounts(); // Update the swap count based on static and dynamic entries
});

// Function to dynamically display swaps, including a static example
function displaySwaps() {
    const swapTableBody = document.getElementById('swapHistoryBody');
    // Start by displaying the static example
    const staticRowExample = `
        <tr>
            <td>01</td>
            <td>01 Jan 2022</td>
            <td>Sample Swapper</td>
            <td>Example Book Title</td>
        </tr>
    `;
    swapTableBody.innerHTML = staticRowExample; // Add the static example to the table

    // Then add dynamic rows from localStorage
    const swapsCount = parseInt(localStorage.getItem('lastSwapNumber') || 0);
    for (let i = 1; i <= swapsCount; i++) {
        const swap = JSON.parse(localStorage.getItem('swap' + i));
        if (swap) {
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

// Function to update the displayed counts
function updateCounts() {
    const staticExamplesCount = 1; // One static example is included
    const dynamicSwapsCount = parseInt(localStorage.getItem('booksSwappedCount') || 0);
    const totalCount = staticExamplesCount + dynamicSwapsCount;
    document.getElementById('booksSwappedCount').textContent = totalCount;
}

// Function to increment the "Books Swapped" count and update the display
function addSwap() {
    let currentCount = parseInt(localStorage.getItem('booksSwappedCount') || 0);
    localStorage.setItem('booksSwappedCount', currentCount + 1);
    updateCounts(); // Update the count display after adding a swap
}

// Event listener for the "Add Swap" button
document.getElementById('addSwapButton').addEventListener('click', function() {
    document.getElementById('newSwapForm').style.display = 'block';
    document.getElementById('swapNumber').value = parseInt(localStorage.getItem('lastSwapNumber') || '0') + 1;
});

// Function to handle new swap form submission
function submitNewSwap() {
    const swapNumber = document.getElementById('swapNumber').value;
    const swapDate = document.getElementById('swapDate').value;
    const swappedWith = document.getElementById('swappedWith').value;
    const bookName = document.getElementById('bookName').value;

    if (!validateTextFields(swapDate, swappedWith, bookName)) {
        return; // Stop form submission if validation fails
    }

    const newSwap = { swapNumber, swapDate, swappedWith, bookName };
    localStorage.setItem('lastSwapNumber', swapNumber);
    localStorage.setItem('swap' + swapNumber, JSON.stringify(newSwap));
    addSwap(); // Increment the swap count

    // Hide the form and clear its fields after submission
    document.getElementById('newSwapForm').style.display = 'none';
    resetFormFields();

    // Refresh the displayed swaps to include the new entry
    displaySwaps();
}

// Utility function to reset form fields
function resetFormFields() {
    document.getElementById('swapNumber').value = '';
    document.getElementById('swapDate').value = '';
    document.getElementById('swappedWith').value = '';
    document.getElementById('bookName').value = '';
}

// Function to validate text fields
function validateTextFields(swapDate, swappedWith, bookName) {
    const validTextRegex = /^[a-zA-Z\s,'-]+$/;
    if (!swapDate || !validTextRegex.test(swappedWith) || !validTextRegex.test(bookName)) {
        alert("Please enter valid values in all fields.");
        return false;
    }
    return true;
}

document.getElementById('newSwapForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitNewSwap();
});
