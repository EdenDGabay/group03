document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.querySelector(".message-input");
  const sendButton = document.querySelector(".send-button");
  const messageList = document.querySelector(".message-list");
  const sidebar = document.querySelector(".sidebar");

  class User {
    constructor(name, profilePic) {
      this.name = name;
      this.profilePic = profilePic;
      this.conversation = [];
    }
  }


  const users = [
    new User("Bob", "path/to/bob-profile-pic.jpg"),
    new User("Eden", "path/to/eden-profile-pic.jpg")
  ];

  function appendMessage(sender, content, time) {
    const messageItem = document.createElement("li");
    messageItem.classList.add("message-item");
    messageItem.innerHTML = `<strong>${sender}:</strong> ${content} <span class="time">${formatTime(time)}</span>`;
    messageList.appendChild(messageItem);
    messageList.scrollTop = messageList.scrollHeight;
  }

  function formatTime(time) {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function displayMessages(userName) {
    messageList.innerHTML = '';

    let userObj = users.find(user => user.name === userName);
    if (userObj && userObj.conversation) {
      userObj.conversation.forEach(message => {
        appendMessage(message.sender, message.content, message.time);
      });
    }

    updateSelectedUserName(userName);
  }


  function populateUserList() {
    sidebar.innerHTML = '';

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

      userLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        const selectedUser = this.textContent;
        displayMessages(selectedUser);
      });
    });
  }

  function updateSelectedUserName(userName) {
    const selectedUserNameElement = document.getElementById("selected-user-name");
    selectedUserNameElement.textContent = userName;
  }

  populateUserList();

  sendButton.addEventListener("click", function() {
    const messageContent = messageInput.value.trim();
    if (messageContent !== "") {
      const selectedUser = document.getElementById("selected-user-name").textContent;
      const time = new Date();
      appendMessage("You", messageContent, time);

      let userObj = users.find(user => user.name === selectedUser);
      if (userObj) {
        userObj.conversation.push({
          sender: "You",
          content: messageContent,
          time: time
        });
      }

      messageInput.value = "";
    }
  });
});
