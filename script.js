// Add this code to your JavaScript file (script.js)

// Dummy data for online users and chat history
const onlineUsers = ["User1", "User2", "User3"];
const chatHistory = [];

// Function to display online users
function displayOnlineUsers() {
    const onlineUsersList = document.querySelector(".chat-sidebar");
    onlineUsersList.innerHTML = "<h2>Online Users</h2>";
    
    for (const user of onlineUsers) {
        const userItem = document.createElement("div");
        userItem.textContent = user;
        onlineUsersList.appendChild(userItem);
    }
}

// Function to display chat history
function displayChatHistory() {
    const chatHistoryContainer = document.querySelector(".chat-history");
    chatHistoryContainer.innerHTML = "<h2>Chat History</h2>";
    
    for (const message of chatHistory) {
        const messageItem = document.createElement("div");
        messageItem.textContent = message;
        chatHistoryContainer.appendChild(messageItem);
    }
}

// Function to handle sending a message
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    
    if (message.trim() !== "") {
        chatHistory.push(message);
        messageInput.value = "";
        displayChatHistory();
    }
}

// Event listener for the Send button
const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", sendMessage);

// Initial display of online users and chat history
displayOnlineUsers();
displayChatHistory();
