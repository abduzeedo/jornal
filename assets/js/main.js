// View Transition Navigation
document.addEventListener('click', async (e) => {
    const link = e.target.closest('a');
    if (!link || link.origin !== location.origin) return;
    e.preventDefault();
    const url = link.href;
    try {
        const res = await fetch(url);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMain = doc.querySelector('main');
        const newTitle = doc.querySelector('title').textContent;
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                document.querySelector('main').replaceWith(newMain);
                document.title = newTitle;
            });
        } else {
            document.querySelector('main').replaceWith(newMain);
            document.title = newTitle;
        }
        history.pushState({}, '', url);
    } catch (err) { location.href = url; }
});
window.addEventListener('popstate', () => location.reload());
