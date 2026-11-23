(() => {
  const key = 'portfolio-appearance';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let choice = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') choice = saved;
  } catch {
    // The selector still works when storage is unavailable.
  }

  function apply() {
    document.documentElement.dataset.appearance =
      choice === 'system' ? (system.matches ? 'dark' : 'light') : choice;
  }

  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('appearance');
    select.value = choice;
    select.closest('label').hidden = false;
    select.addEventListener('change', () => {
      choice = select.value;
      apply();
      try {
        localStorage.setItem(key, choice);
      } catch {
        // Keep this page's selection active.
      }
    });
  });
})();
