document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('diary-form');
  const content = document.getElementById('diary-content');
  const list = document.getElementById('diary-list');

  function renderDiary() {
    const entries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
    list.innerHTML = entries.map(e => `<div class="diary-entry">${e}</div>`).join('');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const entries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
    if(content.value.trim()) {
      entries.unshift(content.value.trim());
      localStorage.setItem('diaryEntries', JSON.stringify(entries));
      content.value = '';
      renderDiary();
    }
  });

  renderDiary();
});

