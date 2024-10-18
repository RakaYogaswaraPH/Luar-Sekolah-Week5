const submitBtn = document.getElementById('submit-btn');
const notification = document.getElementById('notification');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('re-password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Validasi Email dan Password
function validateForm() {
    let isValid = true;
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validasi email
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailError.textContent = 'Email tidak boleh kosong';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        emailError.textContent = 'Email tidak valid';
        isValid = false;
    }

    // Validasi password dan re-password
    const passwordValue = passwordInput.value.trim();
    const rePasswordValue = rePasswordInput.value.trim();
    if (passwordValue === '' || rePasswordValue === '') {
        passwordError.textContent = 'Password tidak boleh kosong';
        isValid = false;
    } else if (passwordValue !== rePasswordValue) {
        passwordError.textContent = 'Password tidak cocok';
        isValid = false;
    }

    return isValid;
}

// Menampilkan notifikasi
submitBtn.addEventListener('click', () => {
    if (validateForm()) {
        notification.classList.add('show');
    }
});

// Tombol "Iya" - Pindah halaman
yesBtn.addEventListener('click', () => {
    window.location.href = 'home.html'; // Belum dibuat
});

// Tombol "Tidak" - Tutup notifikasi
noBtn.addEventListener('click', () => {
    notification.classList.add('hide');
    setTimeout(() => {
        notification.classList.remove('show', 'hide');
    }, 500); // Setelah animasi selesai, sembunyikan elemen
});
