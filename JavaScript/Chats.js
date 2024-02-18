document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.querySelector(".message-input");
  const sendButton = document.querySelector(".send-button");
  const messageList = document.querySelector(".message-list");
  const sidebar = document.querySelector(".sidebar");

  // Define a User class for more structure
  class User {
    constructor(name, profilePic) {
      this.name = name;
      this.profilePic = profilePic;
      this.conversation = []; // Each user has their own conversation array
    }
  }

  // Use the User class to create user objects
  const users = [
    new User("Bob", "path/to/bob-profile-pic.jpg"),
    new User("Eden", "path/to/eden-profile-pic.jpg")
    // Instantiate more users here
  ];

  // Function to append a message to the message list
  function appendMessage(sender, content, time) {
    const messageItem = document.createElement("li");
    messageItem.classList.add("message-item");
    messageItem.innerHTML = `<strong>${sender}:</strong> ${content} <span class="time">${formatTime(time)}</span>`;
    messageList.appendChild(messageItem);
    messageList.scrollTop = messageList.scrollHeight; // Scroll to bottom
  }

  // Function to format time in HH:MM format
  function formatTime(time) {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Function to display messages for a selected user
  function displayMessages(userName) {
    messageList.innerHTML = ''; // Clear existing messages

    // Retrieve conversation for the selected user
    let userObj = users.find(user => user.name === userName);
    if (userObj && userObj.conversation) {
      userObj.conversation.forEach(message => {
        appendMessage(message.sender, message.content, message.time);
      });
    }

    // Update the headline with the selected user's name
    updateSelectedUserName(userName);
  }

  // Function to populate user list
  function populateUserList() {
    sidebar.innerHTML = ''; // Clear existing content

    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Book Swappers";
    sidebar.appendChild(header);

    users.forEach(user => {
      const userLink = document.createElement("a");
      userLink.href = "#";
      userLink.classList.add("nav-link");
      userLink.textContent = user.name;
      sidebar.appendChild(userLink);

      // Add click event listener to each user link
      userLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        const selectedUser = this.textContent;
        displayMessages(selectedUser);
      });
    });
  }

  // Function to update the selected user name in the headline
  function updateSelectedUserName(userName) {
    const selectedUserNameElement = document.getElementById("selected-user-name");
    selectedUserNameElement.textContent = userName;
  }

  // Populate user list initially
  populateUserList();

  // Event listener for sending a message
  sendButton.addEventListener("click", function() {
    const messageContent = messageInput.value.trim();
    if (messageContent !== "") {
      const selectedUser = document.getElementById("selected-user-name").textContent;
      const time = new Date();
      appendMessage("You", messageContent, time); // Assuming sender is "You"

      // Find the user object and add the message to their conversation
      let userObj = users.find(user => user.name === selectedUser);
      if (userObj) {
        userObj.conversation.push({
          sender: "You", // This can be changed to the actual sender if needed
          content: messageContent,
          time: time
        });
      }

      messageInput.value = ""; // Clear the input after sending
    }
  });
});
