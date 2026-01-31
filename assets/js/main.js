// Mark active navigation item
function updateActiveNav() {
    const path = location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        // Exact match for home, or path starts with href for sections
        if (href === path || href === path.replace(/\/$/, '') ||
            (href !== '/jornal/' && path.startsWith(href.replace('.html', '').replace(/\/$/, '')))) {
            link.classList.add('active');
        }
        // Special case: blog posts should highlight Blog nav
        if (path.includes('/blog/') && href.includes('/blog/')) {
            link.classList.add('active');
        }
    });
}

// Run on page load
updateActiveNav();

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
        updateActiveNav();
    } catch (err) { location.href = url; }
});

window.addEventListener('popstate', () => location.reload());
