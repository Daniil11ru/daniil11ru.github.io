import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11.6.0/dist/mermaid.esm.min.mjs';

function isDarkTheme() {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark';
}

function getMermaidTheme() {
    return isDarkTheme() ? 'dark' : 'default';
}

async function renderDiagram(container, id) {
    const source = container.dataset.mermaidsrc;
    container.innerHTML = '';

    const { svg, bindFunctions } = await mermaid.mermaidAPI.render(id, source);
    container.innerHTML = svg;

    if (bindFunctions) bindFunctions(container);
}

async function renderMermaidDiagrams() {
    mermaid.initialize({
        startOnLoad: false,
        theme: getMermaidTheme(),
    });

    const elems = document.querySelectorAll('.mermaid');

    elems.forEach(el => {
        if (!el.dataset.mermaidsrc) {
            el.dataset.mermaidsrc = el.textContent.trim();
        }
    });

    let idx = 0;
    for (const el of elems) {
        await renderDiagram(el, `diagram-${idx++}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMermaidDiagrams();

    const toggle = document.getElementById('themeToggle');
    toggle?.addEventListener('change', () => {
        renderMermaidDiagrams();
    });

    window.addEventListener('storage', e => {
        if (e.key === 'theme') renderMermaidDiagrams();
    });
});
