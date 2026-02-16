document.addEventListener('DOMContentLoaded', () => {
    const giftGrid = document.getElementById('giftGrid');
    const searchInput = document.getElementById('searchInput');

    function displayGifts(gifts) {
        giftGrid.innerHTML = '';

        gifts.forEach(gift => {
            const card = document.createElement('div');
            card.className = 'gift-card';

            card.innerHTML = `
                <img src="${gift.imageUrl}" alt="${gift.name}" class="gift-image" loading="lazy">
                <div class="gift-name" title="${gift.name}">${gift.name}</div>
                <div class="gift-coins">
                    <span class="coin-icon"></span>
                    ${gift.coins}
                </div>
            `;

            giftGrid.appendChild(card);
        });
    }

    // Initial display
    displayGifts(giftData);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredGifts = giftData.filter(gift =>
            gift.name.toLowerCase().includes(searchTerm)
        );
        displayGifts(filteredGifts);
    });
});
