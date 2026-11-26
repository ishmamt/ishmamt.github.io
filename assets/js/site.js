const themeButton = document.getElementById('theme-toggle');

function updateThemeButton() {
  if (!themeButton) return;
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  themeButton.textContent = isDark ? '☀' : '☾';
}

updateThemeButton();
themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (_) {}
  updateThemeButton();
});

document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});

const search = document.getElementById('post-search');
if (search) {
  const rows = [...document.querySelectorAll('.thought-row[data-search]')];
  const filters = [...document.querySelectorAll('.filter[data-tag]')];
  const status = document.getElementById('search-status');
  const noResults = document.getElementById('no-results');
  let selectedTag = 'all';

  function updatePosts() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    rows.forEach(row => {
      const matchesText = row.dataset.search.includes(query);
      const matchesTag = selectedTag === 'all' || row.dataset.tags.split('|').includes(selectedTag);
      row.hidden = !(matchesText && matchesTag);
      if (!row.hidden) count++;
    });
    if (status) status.textContent = query || selectedTag !== 'all' ? `${count} ${count === 1 ? 'post' : 'posts'} found` : '';
    if (noResults) noResults.hidden = count !== 0 || (!query && selectedTag === 'all');
  }

  search.addEventListener('input', updatePosts);
  filters.forEach(button => button.addEventListener('click', () => {
    selectedTag = button.dataset.tag;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    updatePosts();
  }));
}

const article = document.querySelector('.article-body');
const tocList = document.getElementById('toc-list');
if (article && tocList) {
  const headings = [...article.querySelectorAll('h2, h3')];
  headings.forEach(heading => {
    if (!heading.id) heading.id = heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const item = document.createElement('li');
    if (heading.tagName === 'H3') item.className = 'toc-sub';
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    item.append(link);
    tocList.append(item);
  });
  if (!headings.length) document.getElementById('post-toc')?.remove();
}
