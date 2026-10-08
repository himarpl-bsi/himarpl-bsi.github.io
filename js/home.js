const OPREC_LAST_DATE = new Date(2027, 1, 1);
const MS_TO_DAY = 1000 * 60 * 60 * 24;
const MS_TO_HOUR = 1000 * 60 * 60;
const MS_TO_MINUTE = 1000 * 60;

const oprecDayDisplay = document.getElementById("oprec-day-display");
const oprecHourDisplay = document.getElementById("oprec-hour-display");
const oprecMinuteDisplay = document.getElementById("oprec-minute-display");

const FAQ = {
    container: document.getElementById("faq-container"),
    active: -1,
    data: [
        {
            question: "APAKAH MAHASISWA NON-RPL BOLEH MENDAFTAR?",
            answer: "Mohon maaf, saat ini keanggotaan HIMA RPL dikhususkan untuk mahasiswa aktif Program Studi Rekayasa Perangkat Lunak (RPL) UBSI."
        },
        {
            question: "SAYA BELUM BISA NGODING SAMA SEKALI, APAKAH TETAP BISA IKUT?",
            answer: "Sangat bisa! HIMA RPL punya 3 divisi. Jika kamu belum nyaman dengan coding, kamu bisa masuk ke MEDINFO (fokus desain/konten) atau DIVENT (fokus event/organisasi). Di LITBANG pun, kita belajar bareng dari dasar. Yang penting adalah semangat belajar, bukan mahir di awal."
        },
        {
            question: "APA BEDANYA JALUR STAFF MUDA DAN ANGGOTA TETAP?",
            answer: "Staff Muda (Magang): Program terbatas 1–3 bulan. Kamu ditempatkan di divisi tertentu untuk membantu event terdekat (seperti SEMOT atau Pameran Game), merasakan budaya kerja, dan mendapat pendampingan pengurus aktif. Cocok buat kamu yang masih ragu atau ingin coba dulu.<br>Anggota Tetap: Rekrutmen resmi melalui tahapan Oprec penuh (pendaftaran, wawancara, screening, hingga inaugurasi). Masa jabatan 1 periode (September - Agustus)."
        },
        {
            question: "KEGIATAN INI GANGGU KULIAH NGGAK?",
            answer: "Kami sangat memahami prioritas akademik. Kegiatan HIMA RPL dirancang fleksibel dan biasanya di luar jam kuliah. Justru di sini kamu belajar Manajemen Waktu—skill yang wajib dimiliki calon Tech Professional."
        },
        {
            question: "APA UNTUNGNYA IKUT HIMA RPL?",
            answer: "Praktik Nyata: Bukan cuma teori, kita bikin event & aplikasi.<br>Portofolio: Punya karya nyata sebelum lulus (bisa dipamerkan saat magang/kerja).<br>Relasi Luas: Kenalan sama kakak tingkat, alumni, dan lintas jurusan IT serta dosen RPL.<br>Pengembangan Diri: Asah skill kepemimpinan dan kerja sama tim."
        }
    ],
    elements: [],

    load: function () {
        let innerHTML = "";
        let id = 0;

        for (const faq of this.data) {
            innerHTML += `
                <div class="faq-card" onclick="FAQ.click(${id++})">
                    <div class="custom-geometry shadowed bordered">
                        <div class="content"><p>${faq.question.toUpperCase()}</p><span class="pixelated-arrow"></span></div>
                    </div>
                    <div class="custom-geometry shadowed bordered">
                        <div><p>Spacer</p></div>
                        <div class="content"><p>${faq.answer}</p></div>
                    </div>
                </div>
            `;
        }

        this.container.innerHTML = innerHTML;
        this.elements = this.container.children;
    },

    click: function (id) {
        if (this.active == id) {
            this.elements[id].classList.remove("active");
            this.active = -1;
            return;
        }

        if (this.active != -1) {
            this.elements[this.active].classList.remove("active");
        }

        this.elements[id].classList.add("active");
        this.active = id;
    }
}

function updateOprecCounter() {
    const currentDate = Date.now();
    let diffTime = Math.max(OPREC_LAST_DATE - currentDate, 0);

    const diffDay = Math.floor(diffTime / MS_TO_DAY);
    diffTime %= MS_TO_DAY;
    const diffHour = Math.floor(diffTime / MS_TO_HOUR);
    diffTime %= MS_TO_HOUR;
    const diffMinute = Math.floor(diffTime / MS_TO_MINUTE);

    oprecDayDisplay.innerText = diffDay.toString().padStart(2, '0');
    oprecHourDisplay.innerText = diffHour.toString().padStart(2, '0');
    oprecMinuteDisplay.innerText = diffMinute.toString().padStart(2, '0');
}

window.onload = function () {
    News.load("news-container");
    News.resize();
    FAQ.load();

    updateOprecCounter();
    setInterval(updateOprecCounter, 1000);
};

window.onresize = function () {
    News.resize();
}
