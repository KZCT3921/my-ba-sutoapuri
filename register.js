document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // ユーザー情報を取得
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value.trim();

    // ユーザー情報をlocalStorageに保存
    localStorage.setItem('user', JSON.stringify({ username, password, email }));

    // ログイン状態を保存
    localStorage.setItem('isLoggedIn', 'true');

    // ホーム画面へ遷移
    window.location.href = 'index.html'; // ←そのままホームへ
  });
});