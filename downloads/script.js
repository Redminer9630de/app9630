function sortTable(columnIndex) {
    const table = document.getElementById("downloadTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.rows);
    const ascending = !table.dataset.sortDirection || table.dataset.sortDirection === 'descending';
    table.dataset.sortDirection = ascending ? 'ascending' : 'descending';
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();
        return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    rows.forEach(row => tbody.appendChild(row));
}
