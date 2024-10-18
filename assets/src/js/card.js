document.querySelectorAll('.program__card').forEach(card => {
    card.addEventListener('click', function () {
        const isActive = this.classList.contains('active');

        // Tutup card lain jika ada yang terbuka
        document.querySelectorAll('.program__card').forEach(otherCard => {
            if (otherCard !== this && otherCard.classList.contains('active')) {
                otherCard.classList.remove('active');
                otherCard.style.maxHeight = '300px'; // Reset max-height ke default saat menutup
            }
        });

        // Jika card sudah aktif, tutup dengan animasi smooth
        if (isActive) {
            this.classList.remove('active');
            this.style.maxHeight = '300px'; // Kembali ke max-height default
        } else {
            // Buka card yang diklik dengan animasi smooth
            this.classList.add('active');
            this.style.maxHeight = this.scrollHeight + 'px'; // Sesuaikan tinggi dengan konten
        }
    });
});
