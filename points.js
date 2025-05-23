document.addEventListener('DOMContentLoaded', () => {
  // ポイント・履歴の取得
  let points = Number(localStorage.getItem('points') || 0);
  let history = JSON.parse(localStorage.getItem('pointsHistory') || '[]');

  // ポイント表示
  document.getElementById('points-value').textContent = points;

  // 履歴表示
  const historyList = document.querySelector('#points-history ul');
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');

  // QRチェックインでポイント付与
  // QR読み取り後に localStorage.setItem('checkedIn', 'true') をセットする想定
  if (localStorage.getItem('checkedIn') === 'true') {
    points += 5;
    history.unshift(`${new Date().toLocaleDateString()}：来店 +5pt`);
    localStorage.setItem('points', points);
    localStorage.setItem('pointsHistory', JSON.stringify(history));
    document.getElementById('points-value').textContent = points;
    historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
    localStorage.removeItem('checkedIn'); // 1回だけ付与
    alert('来店ポイント+5ptを獲得しました！');
  }

  // クーポン利用で50ポイント付与
  if (localStorage.getItem('couponUsed') === 'true') {
    points += 50;
    history.unshift(`${new Date().toLocaleDateString()}：クーポン利用 +50pt`);
    localStorage.setItem('points', points);
    localStorage.setItem('pointsHistory', JSON.stringify(history));
    document.getElementById('points-value').textContent = points;
    historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
    localStorage.removeItem('couponUsed');
    alert('クーポン利用で+50ptを獲得しました！');
  }
});