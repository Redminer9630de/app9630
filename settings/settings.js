  document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const fontSize = localStorage.getItem('fontSize') || '16px';
    const language = localStorage.getItem('language') || 'de';
    const autostart = localStorage.getItem('autostart') === 'true';
    const updateChannel = localStorage.getItem('updateChannel') || 'stable';
    const notifications = localStorage.getItem('notifications') === 'true';

    document.getElementById('darkModeToggle').checked = darkMode;
    document.body.classList.toggle('dark', darkMode);

    document.getElementById('fontSizeSelect').value = fontSize;
    document.body.style.fontSize = fontSize;

    document.getElementById('languageSelect').value = language;
    document.getElementById('autostartToggle').checked = autostart;
    document.getElementById('updateChannelSelect').value = updateChannel;
    document.getElementById('notificationsToggle').checked = notifications;
  });

  document.getElementById('darkModeToggle').addEventListener('change', (e) => {
    localStorage.setItem('darkMode', e.target.checked);
    document.body.classList.toggle('dark', e.target.checked);
  });

  document.getElementById('fontSizeSelect').addEventListener('change', (e) => {
    localStorage.setItem('fontSize', e.target.value);
    document.body.style.fontSize = e.target.value;
  });

  document.getElementById('languageSelect').addEventListener('change', (e) => {
    localStorage.setItem('language', e.target.value);
    location.reload();
  });

  document.getElementById('autostartToggle').addEventListener('change', (e) => {
    localStorage.setItem('autostart', e.target.checked);
  });

  document.getElementById('updateChannelSelect').addEventListener('change', (e) => {
    localStorage.setItem('updateChannel', e.target.value);
  });

  document.getElementById('notificationsToggle').addEventListener('change', (e) => {
    localStorage.setItem('notifications', e.target.checked);
  });
