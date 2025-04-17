function updateSqlImage() {
    const img = document.getElementById('sqlInjectionImage');
    if (!img) return;
    const theme = document.documentElement.getAttribute('data-bs-theme') || 'light';
    const key = 'src' + theme.charAt(0).toUpperCase() + theme.slice(1);
    img.src = img.dataset[key];
}

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        updateSqlImage();

        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        toggle.addEventListener('change', () => {
            updateSqlImage();
        });
    });
})();