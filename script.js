document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.content section');
    const messageForm = document.getElementById('message-form');
    const outputContent = document.getElementById('output-content');
    const outputContainer = document.getElementById('output-container');

    // Fungsi untuk menampilkan section yang sesuai
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(sectionId).classList.add('active');
    }

    // Mengatur event listener untuk setiap tautan navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href');
            showSection(sectionId);
        });
    });

    // Menampilkan halaman 'Home' secara default
    showSection('#home');

    // Mengatur event listener untuk submit form
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form melakukan reload halaman

        // Mengambil nilai dari setiap input
        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggal-lahir').value;
        const jenisKelamin = document.getElementById('jenis-kelamin').value;
        const pesan = document.getElementById('pesan').value;

        // Membuat string output yang akan ditampilkan
        const outputString = `
Nama: ${nama}
Tanggal Lahir: ${tanggalLahir}
Jenis Kelamin: ${jenisKelamin}
Pesan:
${pesan}
        `;

        // Menampilkan output ke dalam elemen pre
        outputContent.textContent = outputString;

        // Menampilkan output container (jika disembunyikan sebelumnya)
        outputContainer.style.display = 'block';
    });
});