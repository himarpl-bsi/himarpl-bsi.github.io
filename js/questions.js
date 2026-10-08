const MEDINFO_ID = 0;
const LITBANG_ID = 1;
const DIVENT_ID = 2;
const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const qContainer = document.getElementById("q-container");
const rContainer = document.getElementById("r-container");

const Questions = {
    medinfoDisplay: document.getElementById("medinfo-display"),
    litbangDisplay: document.getElementById("litbang-display"),
    diventDisplay: document.getElementById("divent-display"),
    container: document.getElementById("questions-container"),

    data: [
        {
            question: "Di rumah, kamu paling sering ngapain?",
            answers: [
                "Nonton film atau series",
                "Main game",
                "Chatting sama teman",
                "Scroll TikTok atau IG"
            ],
            mapDivision: [MEDINFO_ID, LITBANG_ID, DIVENT_ID, MEDINFO_ID]
        },
        {
            question: "Kalau lagi kumpul sama teman, kamu biasanya...",
            answers: [
                "Jadi yang ngajak ngobrol",
                "Ikut nimbrung sambil dengerin",
                "Bikin konten atau foto-foto",
                "Main game bareng"
            ],
            mapDivision: [DIVENT_ID, LITBANG_ID, MEDINFO_ID, MEDINFO_ID]
        },
        {
            question: "Kalau nonton film, kamu paling suka...",
            answers: [
                "Visual dan efeknya",
                "Cerita dan plot twist-nya",
                "Akting dan dialognya",
                "Musik dan suasananya"
            ],
            mapDivision: [MEDINFO_ID, LITBANG_ID, DIVENT_ID, MEDINFO_ID]
        },
        {
            question: "Kalau main game, kamu paling suka...",
            answers: [
                "Main bareng teman",
                "Nyusun strategi biar menang",
                "Bikin tampilan karakter jadi keren",
                "Explore map buat cari rahasia"
            ],
            mapDivision: [DIVENT_ID, LITBANG_ID, MEDINFO_ID, LITBANG_ID]
        },
        {
            question: "Di grup chat, kamu paling sering...",
            answers: [
                "Kirim meme atau stiker lucu",
                "Nanya \"ada tugas apa ya?\"",
                "Ngajak teman buat ngumpul",
                "Share info atau berita terbaru"
            ],
            mapDivision: [MEDINFO_ID, LITBANG_ID, DIVENT_ID, LITBANG_ID]
        },
        {
            question: "Kalau temanmu lagi sedih, kamu...",
            answers: [
                "Ngajak dia ngobrol biar cerita",
                "Bantuin mikirin solusinya",
                "Kirim video lucu biar ketawa",
                "Temenin dia main biar lupa masalah"
            ],
            mapDivision: [DIVENT_ID, LITBANG_ID, MEDINFO_ID, MEDINFO_ID]
        },
        {
            question: "Pas ada tugas kelompok, kamu paling suka bagian...",
            answers: [
                "Bikin slide-nya jadi enak dilihat",
                "Ngajak teman biar kerja bareng",
                "Nyari data dan bahan materinya",
                "Nyusun urutan presentasinya"
            ],
            mapDivision: [MEDINFO_ID, DIVENT_ID, LITBANG_ID, LITBANG_ID]
        },
        {
            question: "Kalau pilih wallpaper HP, kamu pilih yang...",
            answers: [
                "Simple dan nggak bikin mata capek",
                "Ada quote motivasi biar semangat",
                "Warnanya matching sama tema HP",
                "Hasil foto sendiri biar personal"
            ],
            mapDivision: [LITBANG_ID, DIVENT_ID, DIVENT_ID, MEDINFO_ID]
        },
        {
            question: "Kalau jadi ketua kelas, hal pertama yang kamu lakuin...",
            answers: [
                "Bikin papan pengumuman yang menarik",
                "Bikin grup chat biar semua terhubung",
                "Ngobrol sama setiap teman biar akrab",
                "Nyatet semua jadwal dan tugas"
            ],
            mapDivision: [MEDINFO_ID, MEDINFO_ID, DIVENT_ID, LITBANG_ID]
        },
        {
            question: "Kamu paling suka acara sekolah yang...",
            answers: [
                "Seru dan rame",
                "Ada lomba atau kompetisi",
                "Ada penampilan atau pameran",
                "Ada bazar atau stan jualan"
            ],
            mapDivision: [DIVENT_ID, LITBANG_ID, DIVENT_ID, MEDINFO_ID]
        },
        {
            question: "Kalau temen sekelas ribut, kamu biasanya...",
            answers: [
                "Nyoba nenangin dengan ngajak ngobrol",
                "Ngajak teman main tebak-tebakan",
                "Ngajak diskusi topik random",
                "Diam aja sambil dengerin musik"
            ],
            mapDivision: [MEDINFO_ID, DIVENT_ID, LITBANG_ID, LITBANG_ID]
        },
        {
            question: "Kamu paling betah ngapain sendirian?",
            answers: [
                "Nonton film atau anime",
                "Gambar atau nulis cerita",
                "Nonton YouTube",
                "Dengerin musik sambil rebahan"
            ],
            mapDivision: [LITBANG_ID, DIVENT_ID, MEDINFO_ID, MEDINFO_ID]
        },
        {
            question: "Kalau jalan sama teman-teman, kamu jadi yang...",
            answers: [
                "Nyari spot foto yang estetik",
                "Ngecek review tempatnya dulu",
                "Nyusun jadwal dan rute perjalanan",
                "Nyemangatin semua biar pada ikut"
            ],
            mapDivision: [MEDINFO_ID, LITBANG_ID, DIVENT_ID, DIVENT_ID]
        },
        {
            question: "Kalau ada masalah kecil di kelas, kamu...",
            answers: [
                "Nyoba nenangin dengan kata-kata",
                "Nanya dulu ke semua pihak",
                "Nyatet kronologis kejadiannya",
                "Bikin pesan yang enak dibaca biar adem"
            ],
            mapDivision: [DIVENT_ID, LITBANG_ID, LITBANG_ID, MEDINFO_ID]
        },
        {
            question: "Satu kata buat diri kamu? Pilih yang paling \"kamu banget\"",
            answers: [
                "Kreatif",
                "Ekspresif",
                "Supel",
                "Penasaran"
            ],
            mapDivision: [MEDINFO_ID, MEDINFO_ID, DIVENT_ID, LITBANG_ID]
        }
    ],
    answers: [],
    elements: [],

    load: function () {
        this.answers = new Array(this.data.length).fill(-1);

        let innerHTML = "";
        let id = 0;

        for (const question of this.data) {
            innerHTML += `
                <section class="question-container">
                    <div class="custom-geometry shadowed bordered">
                        <div class="content">
                            <h3>${question.question}</h3>
                        </div>
                    </div>
                    <div class="answer-selection-container">
                        ${question.answers.map((v, i) => {
                            return `
                                <button class="custom-geometry shadowed bordered custom-button" onclick="Questions.answer(${id}, ${i})">
                                    <div class="content"><p>${ALPHABETS[i]}. ${v}</p></div>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </section>
            `;
            id++;
        }

        innerHTML += `
            <button class="custom-geometry shadowed bordered custom-button" id="submit-button" onclick="Questions.submit()">
                <div class="content">
                    <p>Submit</p>
                </div>
            </button>
        `;

        this.container.innerHTML = innerHTML;
        this.elements = this.container.children;
    },

    answer: function (qid, aid) {
        const element = this.elements[qid];

        if (this.answers[qid] == aid) {
            element.children[1].children[aid].classList.remove("active");
            this.answers[qid] = -1;
            return;
        }

        if (this.answers[qid] != -1) {
            element.children[1].children[this.answers[qid]].classList.remove("active");
        }

        element.children[1].children[aid].classList.add("active");
        this.answers[qid] = aid;
    },

    submit: function () {
        let medinfoPower = 0;
        let litbangPower = 0;
        let diventPower = 0;

        for (let i = 0; i < this.answers.length; i++) {
            const selectedAnswer = this.answers[i];
            if (selectedAnswer == -1) {
                continue;
            }
            const divisionSelected = this.data[i].mapDivision[selectedAnswer];
            switch (divisionSelected) {
                case MEDINFO_ID:
                    medinfoPower++;
                    break;
                case LITBANG_ID:
                    litbangPower++;
                    break;
                case DIVENT_ID:
                    diventPower++;
                    break;
            
                default:
                    break;
            }
        }

        const medinfoPercent = Math.floor(medinfoPower / this.data.length * 10000) / 100;
        const litbangPercent = Math.floor(litbangPower / this.data.length * 10000) / 100;
        const diventPercent = Math.floor(diventPower / this.data.length * 10000) / 100;

        this.medinfoDisplay.innerText = `Medinfo: ${medinfoPercent} %`;
        this.litbangDisplay.innerText = `Litbang: ${litbangPercent} %`;
        this.diventDisplay.innerText = `Divent: ${diventPercent} %`;

        qContainer.style.display = "none";
        rContainer.style.display = "flex";

        if (medinfoPercent > litbangPercent && medinfoPercent > diventPercent) {
            this.medinfoDisplay.classList.add("selected");
            return;
        }
        if (litbangPercent > medinfoPercent && litbangPercent > diventPercent) {
            this.litbangDisplay.classList.add("selected");
            return;
        }
        if (diventPercent > medinfoPercent && diventPercent > litbangPercent) {
            this.diventDisplay.classList.add("selected");
        }
    }
};

window.onload = function () {
    Questions.load();
}