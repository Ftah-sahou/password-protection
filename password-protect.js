document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "SAHOU"; // ← غيرها من GitHub فقط

  const style = document.createElement("style");
  style.innerHTML = `
    #password-protect-overlay {
      position: fixed;
      inset: 0;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      font-family: Arial, sans-serif;
    }
    .pp-box {
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,.2);
      text-align: center;
      width: 320px;
    }
    .pp-box input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
    }
    .pp-box button {
      background: #254781;
      color: #fff;
      padding: 10px;
      border: none;
      cursor: pointer;
    }
    .pp-error {
      color: red;
      display: none;
      margin-top: 10px;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "password-protect-overlay";
  overlay.innerHTML = `
    <div class="pp-box">
      <h3>أدخل كلمة المرور</h3>
      <input type="password" id="pp-input">
      <button id="pp-btn">دخول</button>
      <div class="pp-error">كلمة المرور غير صحيحة</div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("pp-btn").onclick = function () {
    if (document.getElementById("pp-input").value === correctPassword) {
      overlay.remove();
    } else {
      document.querySelector(".pp-error").style.display = "block";
    }
  };

});
