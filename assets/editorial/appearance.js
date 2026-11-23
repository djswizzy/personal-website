(() => {
  const key = 'portfolio-appearance';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let choice = 'system';
  let button;
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') choice = saved;
  } catch {
    // Use the device preference if storage is unavailable.
  }

  function apply() {
    const dark = choice === 'system' ? system.matches : choice === 'dark';
    document.documentElement.dataset.appearance = dark ? 'dark' : 'light';
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    button = document.getElementById('appearance');
    apply();
    button.hidden = false;
    button.addEventListener('click', () => {
      choice = document.documentElement.dataset.appearance === 'dark' ? 'light' : 'dark';
      apply();
      try {
        localStorage.setItem(key, choice);
      } catch {
        // Keep this page's selection active.
      }
    });
  });
})();
