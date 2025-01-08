document.addEventListener("DOMContentLoaded", function() {
  // যদি লগইন তথ্য LocalStorage-এ থাকে, তাহলে তা ইনপুটে দেখাবে
  if (localStorage.getItem("email_or_phone")) {
    document.getElementById("email_or_phone").value = localStorage.getItem("email_or_phone");
  }
  if (localStorage.getItem("password")) {
    document.getElementById("password").value = localStorage.getItem("password");
  }
});

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const emailOrPhone = document.getElementById('email_or_phone').value;
  const password = document.getElementById('password').value;

  // ফিক্সড তথ্য
  const fixedEmail = 'Canikissyou@gmail.com';
  const fixedPassword = 'ashikgazi7';
  
  if (emailOrPhone === fixedEmail && password === fixedPassword) {
    // লগইন সফল হলে তথ্য LocalStorage-এ সংরক্ষণ করা হবে
    localStorage.setItem('email_or_phone', emailOrPhone);
    localStorage.setItem('password', password);

    window.location.href = 'https://www.youtube.com'; // ইউটিউবে নিয়ে যাও
  } else {
    document.getElementById('message').innerText = 'This password is incorrect';
  }
});

// পাসওয়ার্ড দেখানোর ফিচার
document.getElementById('toggle-password').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  this.textContent = type === 'password' ? '👁️' : '🙈'; // আইকন পরিবর্তন
});
