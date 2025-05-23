document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const icon = document.getElementById('home-profile-icon');
  if (user.icon) {
    icon.src = user.icon;
  } else {
    icon.src = 'assets/default-icon.png';
  }
  // プロフィール表示ページへ遷移
  icon.style.cursor = 'pointer';
  icon.addEventListener('click', () => {
    window.location.href = 'profile-view.html';
  });
});