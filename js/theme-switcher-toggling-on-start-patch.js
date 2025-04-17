(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
})();