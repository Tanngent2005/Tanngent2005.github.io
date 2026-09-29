'use strict';
const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#141b25' : '#f8f9fb';
}
if (themeButton) {
  themeButton.hidden = false;
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('yiyang-theme', theme); } catch (e) {}
    updateThemeButton();
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
