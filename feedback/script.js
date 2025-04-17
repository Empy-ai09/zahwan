document.addEventListener('DOMContentLoaded', () => {
        const stars = document.querySelectorAll('.star');
        let ratingValue = 0;
    
        stars.forEach(star => {
            star.addEventListener('click', () => {
                ratingValue = star.getAttribute('data-value');
                stars.forEach(s => {
                    s.style.color = s.getAttribute('data-value') <= ratingValue ? '#ffd600' : '#ccc';
                });
            });
        });
    
        document.getElementById('submitBtn').addEventListener('click', () => {
            const comment = document.getElementById('comment').value;
            if (ratingValue === 0) {
                alert('Silakan pilih rating!');
            } else if (comment.trim() === '') {
                alert('Silakan tulis komentar Anda!');
            } else {
                alert(`Terima kasih atas feedback Anda!\nRating: ${ratingValue}\nKomentar: ${comment}`);
                // Reset form
                ratingValue = 0;
                stars.forEach(s => s.style.color = '#ccc');
                document.getElementById('comment').value = '';
            }
        });
    });