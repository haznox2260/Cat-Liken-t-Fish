// Dữ liệu truyện
const storyData = {
    updated: [
        { id: 1, title: "Học viện Hòa Âm", cover: "https://via.placeholder.com/180x240/015f8e/ffffff?text=Học+viện", chapter: "Chương 12 mới" },
        // ... (thêm các truyện khác)
    ]
    // ... (các thể loại khác)
};

// Hiển thị danh sách truyện
export function renderStories(type) {
    const storyGrid = document.getElementById('storyGrid');
    storyGrid.innerHTML = '';

    storyData[type].forEach(story => {
        const item = document.createElement('div');
        item.className = 'story-item';
        item.innerHTML = `
      <img src="${story.cover}" alt="${story.title}" class="story-cover">
      <div class="story-info">
        <div class="story-title">${story.title}</div>
        <div class="story-chapter">${story.chapter}</div>
      </div>
    `;
        storyGrid.appendChild(item);
    });
}
