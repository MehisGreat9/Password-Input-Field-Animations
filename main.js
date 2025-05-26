const passwordInput = document.getElementById('passwordField');
const toggleBtn = document.getElementById('toggleVisibility');
const eyeClosed = document.getElementById('eyeClosed');
const eyeOpen = document.getElementById('eyeOpen');
const submitBtn = document.getElementById('submitBtn');
const capsWarning = document.getElementById('capsWarning');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

// Toggle visibility
toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  if (isPassword) {
    eyeClosed.classList.replace('active', 'inactive');
    eyeOpen.classList.replace('inactive', 'active');
  } else {
    eyeOpen.classList.replace('active', 'inactive');
    eyeClosed.classList.replace('inactive', 'active');
  }
});

// Caps lock detection
passwordInput.addEventListener('keyup', (e) => {
  capsWarning.style.display = e.getModifierState('CapsLock') ? 'block' : 'none';
});

// Submit
submitBtn.addEventListener('click', () => {
  const password = passwordInput.value;
  if (password !== 'subscribe!') {
    passwordInput.classList.add('shake');
    setTimeout(() => passwordInput.classList.remove('shake'), 300);
  } else {
    successModal.style.display = 'flex';
  }
});

// Close modal
closeModal.addEventListener('click', () => {
  successModal.style.display = 'none';
});

// Close if clicked outside modal content
window.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.style.display = 'none';
  }
});
