// assets/js/chat.js
export function setupChat() {
    const chatInput = document.getElementById('chatInput');

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

export function sendMessage() {
    // Logic gửi tin nhắn
}