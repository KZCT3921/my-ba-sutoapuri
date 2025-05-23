// ここに共通処理（ダークモード切替など）を記述

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('login')) {
    // 未ログインならログイン画面へ
    // window.location.href = 'login.html';
  }
});