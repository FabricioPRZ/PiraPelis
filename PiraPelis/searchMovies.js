document.addEventListener('DOMContentLoaded', (event) => {
    const searchInput = document.getElementById('searchInput');
    const rows = document.querySelectorAll('#customers tr');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        
        rows.forEach((row, index) => {
            if (index === 0) return;
            const cells = row.getElementsByTagName('carousel-item');
            let match = false;
            for (let cell of cells) {
                if (cell.textContent.toLowerCase().includes(filter)) {
                    match = true;
                    break;
                }
            }
            row.style.display = match ? '' : 'none';
        });
    });
});
