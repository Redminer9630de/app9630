function loadPage(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) { throw new Error('Seite nicht gefunden'); }
            return response.text();
        })
        .then(data => { document.body.innerHTML = data; })
}

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const path = category.dataset.path;
        const url = `app/${path}/${path}.html`;
        loadPage(url);
    });
});
