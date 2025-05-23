document.addEventListener('DOMContentLoaded', () => {
 

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const form = document.getElementById('profile-form');
  const iconInput = document.getElementById('icon-input');
  const profileIcon = document.getElementById('profile-icon');

  // 初期値セット
  if (user.username) form.username.value = user.username;
  if (user.bio) form.bio.value = user.bio;
  if (user.icon) profileIcon.src = user.icon;

  // アイコン画像プレビュー＆保存
  iconInput.addEventListener('change', function(e) {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
      profileIcon.src = evt.target.result;
      user.icon = evt.target.result;
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.username.value.trim();
    const bio = this.bio.value.trim();
    if (!username) return;

    // パスワードは変更しない
    const oldUser = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.setItem('user', JSON.stringify({
      username,
      bio,
      icon: user.icon || oldUser.icon || 'assets/default-icon.png',
      password: oldUser.password || ''
    }));
    alert('プロフィールを更新しました');
    window.location.href = 'index.html'; // 保存後ホームへ遷移
  });
});