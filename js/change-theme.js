(function () {
    const html  = document.documentElement;
    const key   = 'theme';
    const saved = localStorage.getItem(key);

    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark   = saved ? saved === 'dark' : prefersDark;

    if (startDark) html.setAttribute('data-bs-theme', 'dark');

    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        toggle.checked = !startDark;
        html.classList.add('js-theme-ready');

        requestAnimationFrame(() => {
            document.querySelector('.theme-toggle')
                    ?.classList.add('theme-toggle-animated');
        });

        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                html.removeAttribute('data-bs-theme');
                localStorage.setItem(key, 'light');
            } else {
                html.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem(key, 'dark');
            }
        });
    });
})();
