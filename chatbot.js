// Chatbot Nini JavaScript

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Sample responses from Nini
const responses = {
    'what can you help': 'I can help you with questions about cybersecurity, phishing detection, online safety, and much more. Ask me anything!',
    'features': 'My features include answering questions, providing security tips, explaining phishing tactics, and guiding you on best practices for online safety.',
    'safe online': 'To stay safe online: 1) Never share passwords with anyone 2) Check email sender addresses carefully 3) Don\'t click suspicious links 4) Keep software updated 5) Use strong passwords',
    'phishing': 'A phishing email is a fraudulent message designed to trick you into revealing sensitive information. They often use urgency, suspicious links, and fake sender addresses.',
    'hello': 'Hi there! How can I help you today?',
    'hi': 'Hello! What can I assist you with?',
    'thanks': 'You\'re welcome! Feel free to ask me anything else.',
    'thank you': 'Happy to help! Do you have any other questions?',
    'how are you': 'I\'m doing great! Thanks for asking. How can I help you?',
    'default': 'That\'s an interesting question! I\'m still learning, but I can help with cybersecurity, phishing detection, and online safety topics. Feel free to ask me anything related to those!'
};

function sendMessage(message = null) {
    const userMessage = message || userInput.value.trim();
    
    if (!userMessage) return;

    // Add user message to chat
    addMessage(userMessage, 'user');
    userInput.value = '';

    // Simulate typing indicator
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    
    if (sender === 'bot') {
        avatarDiv.innerHTML = '<i class="fas fa-robot"></i>';
    } else {
        avatarDiv.innerHTML = '<i class="fas fa-user"></i>';
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const textP = document.createElement('p');
    textP.textContent = text;
    contentDiv.appendChild(textP);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (sender === 'user') {
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
    } else {
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
    }
    messageDiv.appendChild(timeSpan);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check for keyword matches
    for (const [key, response] of Object.entries(responses)) {
        if (key !== 'default' && lowerMessage.includes(key)) {
            return response;
        }
    }

    // Return default response if no match
    return responses['default'];
}

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Focus input on load
window.addEventListener('load', () => {
    userInput.focus();
});
