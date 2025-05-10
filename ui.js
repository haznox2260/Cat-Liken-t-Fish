// Xử lý menu profile
export function setupProfileMenu() {
    const profile = document.querySelector('.profile');
    const profileMenu = document.querySelector('.profile-menu');

    profile.addEventListener('click', () => profileMenu.classList.toggle('active'));

    document.addEventListener('click', (e) => {
        if (!profile.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('active');
        }
    });
}

// Xử lý thanh taskbar
export function setupTaskbar() {
    let lastScrollPosition = 0;
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        document.querySelector('.taskbar').classList.toggle('hidden',
            currentScrollPosition > lastScrollPosition && currentScrollPosition > 100);
        lastScrollPosition = currentScrollPosition;
    });
}