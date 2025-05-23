document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (email === user.email && password === user.password) {
      localStorage.setItem('isLoggedIn', 'true');
      document.getElementById('login-message').textContent = 'ログイン成功！';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      document.getElementById('login-message').textContent = 'メールアドレスまたはパスワードが違います';
    }
  });
});