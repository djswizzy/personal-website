const filters = document.querySelector('.filters');
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  for (const item of filters.querySelectorAll('button')) {
    item.setAttribute('aria-pressed', String(item === button));
  }
  for (const row of document.querySelectorAll('.work-row')) {
    row.hidden = button.dataset.filter !== 'all' && row.dataset.category !== button.dataset.filter;
  }
});
