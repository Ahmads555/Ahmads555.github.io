document.addEventListener('DOMContentLoaded', function() {
    // Pesan ini akan muncul jika DOM sudah dimuat dan bagian dalam script berjalan.
    console.log("DOM Content Loaded. Script is running."); 

    const searchInput = document.getElementById('search-input');
    const searchResultsDiv = document.getElementById('search-results');

    // Data yang akan dicari (konsolidasi dari konten berbagai halaman)
    const searchableContent = [
        { title: "Biodata", content: "Ahmad Suryadi, Pulau Muda, Jl. Niaga, profil, tentang saya", url: "cv.html#biodata" },
        { title: "Pendidikan", content: "SD Negeri 014 Teluk Meranti, SMP Negeri 014 Meranti, SMK Telkom Pekanbaru, S1 Teknik Informatika, sekolah, kuliah, riwayat pendidikan", url: "cv.html#pendidikan" },
        { title: "Pengalaman Kerja", content: "PT THIP INDOPLANTATION, Bootcamp Computer Science, pekerjaan, karir, pengalaman", url: "cv.html#pengalaman" },
        { title: "Organisasi", content: "Organisasi, kegiatan ekstrakurikuler", url: "cv.html#organisasi" },
        { title: "Keahlian Teknis", content: "HTML, CSS, JavaScript, SQL, PHP, C++, pemrograman, skill, kemampuan, coding", url: "cv.html#keahlian" },
        { title: "Kontak WhatsApp", content: "WhatsApp, 083161969225, telepon, chat, hubungi", url: "hubungi_kami.html" },
        { title: "Kontak Email", content: "suryadihrv@gmail.com, email, surat elektronik, hubungi", url: "hubungi_kami.html" },
        { title: "Media Sosial WhatsApp", content: "WhatsApp, sosmed, media sosial, chat", url: "media_sosial.html" },
        { title: "Media Sosial Instagram", content: "Instagram, suryadihrv, sosmed, media sosial, IG", url: "media_sosial.html" }
    ];

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        searchResultsDiv.innerHTML = ''; // Bersihkan hasil sebelumnya

        if (searchTerm.length === 0) {
            searchResultsDiv.style.display = 'none';
            return;
        }

        const filteredResults = searchableContent.filter(item => {
            return item.content.toLowerCase().includes(searchTerm) || item.title.toLowerCase().includes(searchTerm);
        });

        if (filteredResults.length > 0) {
            let resultsHTML = '<h3>Hasil Pencarian:</h3><ul>'
            filteredResults.forEach(item => {
                resultsHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
            });
            resultsHTML += '</ul>';
            searchResultsDiv.innerHTML = resultsHTML;
            searchResultsDiv.style.display = 'block';
        } else {
            searchResultsDiv.innerHTML = '<p>Tidak ditemukan hasil.</p>';
            searchResultsDiv.style.display = 'block';
        }
    }

    // Event listener untuk input pencarian
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }
}); // Ini adalah penutup untuk document.addEventListener

console.log("Script.js selesai dimuat dan dieksekusi bagian luar.");