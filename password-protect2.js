// https://your-domain.com/password-protect.js
// أو https://raw.githubusercontent.com/your-repo/main/password-protect.js

const PasswordConfig = {
  correctPassword: "SAHOU--AL1", // هنا غير كلمة المرور مرة واحدة
  enabledPages: ["/", "/index.html"] // الصفحات التي تطبق عليها الحماية
};

function loadPasswordProtection() {
  const path = window.location.pathname;
  
  // التحقق إذا الصفحة الحالية تتطلب حماية
  if (!PasswordConfig.enabledPages.includes(path)) return;
  
  // إنشاء واجهة الإدخال
  const overlay = document.createElement("div");
  overlay.id = "password-protect-overlay";
  overlay.innerHTML = `
    <div id="password-box">
      <h2>أدخل كلمة المرور للدخول:</h2>
      <input type="password" id="password-input" placeholder="كلمة المرور" />
      <br>
      <button id="submit-password">دخول</button>
      <div id="wrong-password">كلمة المرور غير صحيحة ❌</div>
    </div>
  `;
  
  // إضافة الأنماط
  const style = document.createElement("style");
  style.textContent = `
    #password-protect-overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
      background-color: #f8f8f8;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Arial', sans-serif;
    }
    
    #password-box {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
      text-align: center;
      max-width: 320px;
      width: 90%;
    }
    
    #password-box h2 {
      margin-bottom: 20px;
      color: #333;
    }
    
    #password-input {
      padding: 10px;
      width: 90%;
      margin-bottom: 15px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
    
    #submit-password {
      background-color: #254781;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      transition: 0.3s ease;
    }
    
    #submit-password:hover {
      background-color: #00bf63;
    }
    
    #wrong-password {
      color: red;
      margin-top: 10px;
      display: none;
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(overlay);
  
  // التعامل مع إدخال كلمة المرور
  document.getElementById("submit-password").addEventListener("click", function () {
    const input = document.getElementById("password-input").value;
    if (input === PasswordConfig.correctPassword) {
      document.getElementById("password-protect-overlay").remove();
      style.remove(); // إزالة الأنماط أيضًا
    } else {
      document.getElementById("wrong-password").style.display = "block";
    }
  });
  
  // دعم الضغط على Enter
  document.getElementById("password-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("submit-password").click();
    }
  });
}

// تشغيل الحماية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", loadPasswordProtection);
