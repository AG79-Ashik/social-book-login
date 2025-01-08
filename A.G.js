document.getElementById('signup-form').addEventListener('submit', (e) =>
  e.preventDefault()
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const dob = document.getElementById('dob').value; // জন্ম তারিখ

  // পাসওয়ার্ডের দৈর্ঘ্য পরীক্ষা
  if (password.length < 8) {
    document.getElementById('message').innerText = 'Password at least 8 charecter';
    return;
  }

  // জন্ম তারিখ পরীক্ষা (২০০৮ বা তার কম)
  const dobDate = new Date(dob);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - dobDate.getFullYear();
  if (age < 16 || (age === 16 && (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())))) ) {
    document.getElementById('message').innerText = 'আপনার বয়স ১৬ বছর বা তার বেশি হতে হবে।';
    return;
  }

  // পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলানো
  if (password !== confirmPassword) 
    document.getElementById('message').innerText = 'This password is incorrect';
    return;
    

  // ইউজারের তথ্য সংরক্ষণ
  const userData = {
    firstName:firstName,
    lastName:lastName,
    email: email,
    password:password,
    dob: dob
  };

  // LocalStorage-এ ইউজারের তথ্য সংরক্ষণ
  localStorage.setItem('user', JSON.stringify(userData));

  document.getElementById('message').innerText = 'সাইন আপ সফল হয়েছে!';

  // সফল হলে লগইন পেজে নিয়ে যাওয়া
  setTimeout(() => {
    window.location.href = 'https://www.youtube.com';
  })
  
  