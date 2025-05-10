// Import các module
import { setupProfileMenu, setupTaskbar } from './modules/ui.js';
import { renderStories } from './modules/stories.js';
import { initChat } from './modules/chat.js';
import { setupTheme } from './modules/theme.js';

// Khởi tạo khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    setupProfileMenu();
    setupTaskbar();
    renderStories('updated');
    initChat();
    setupTheme();

    // Hiển thị thời gian
    setInterval(updateCurrentTime, 1000);
    updateCurrentTime();
});

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('currentTime').textContent = timeString;
}
