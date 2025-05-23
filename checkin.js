document.addEventListener('DOMContentLoaded', () => {
  const qrMessage = document.getElementById('qr-message');
  const qrReader = new Html5Qrcode("qr-reader");

  // チェックイン用QRコードの内容（例: "BURST_CHECKIN"）
  const VALID_QR = "BURST_CHECKIN";

  qrReader.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    qrCodeMessage => {
      if (qrCodeMessage === VALID_QR) {
        localStorage.setItem('checkedIn', 'true');
        qrMessage.style.color = "#16a34a";
        qrMessage.textContent = "チェックイン完了！ポイントページで来店ポイントが付与されます。";
        setTimeout(() => {
          window.location.href = "points.html";
        }, 1500);
        qrReader.stop();
      } else {
        qrMessage.style.color = "#e53e3e";
        qrMessage.textContent = "無効なQRコードです。";
      }
    },
    errorMessage => {
      // 読み取りエラー時は何もしない
    }
  );
});