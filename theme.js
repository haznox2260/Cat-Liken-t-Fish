// assets/js/theme.js
const themeToggle = document.getElementById('themeToggle');

function updateTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.style.backgroundImage = isDark
        ? "url('../images/dark.png')"
        : "url('../images/light.png')";
    localStorage.setItem('darkTheme', isDark);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    updateTheme();
});

// Khởi tạo theme khi tải trang
if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark-theme');
}
updateTheme();