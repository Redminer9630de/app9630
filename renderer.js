document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const name = category.alt.toLowerCase().replace(/ /g, '');
            const url = `app/${name}/${name}.html`;

            fetch(url)
                .then(response => {
                    if (!response.ok) { throw new Error('Seite nicht gefunden'); }
                    return response.text();
                })
                .then(html => { document.body.innerHTML = html; })
        });
    });
});
