const News = {
    container: null,
    data: [
        {
            imageSrc: "https://news.bsi.ac.id/wp-content/uploads/2026/05/photo21-5.png",
            title: "JUARA LOMBA FILM PENDEK DI PIKMI 2026",
            description: "Tim KaKev suskses meraih Juara Penulis Naskah Terbaik Lomba Film Pendek."
        },
        {
            imageSrc: "https://news.bsi.ac.id/wp-content/uploads/2026/05/photo21-5.png",
            title: "PENGABDIAN KEPADA MASYARAKAT 2025",
            description: "Turun ke masyarakat meningkatkan literasi digital dan mencegah cybercrime."
        },
        {
            imageSrc: "https://news.bsi.ac.id/wp-content/uploads/2026/05/photo21-5.png",
            title: "WORKSHOP MACHINE LEARNING 2024",
            description: "Memperkenalkan dasar kecerdasan buatan bagi masa depan teknologi."
        },
        {
            imageSrc: "https://news.bsi.ac.id/wp-content/uploads/2026/05/photo21-5.png",
            title: "WORKSHOP MACHINE LEARNING 2024",
            description: "Memperkenalkan dasar kecerdasan buatan bagi masa depan teknologi."
        },
        {
            imageSrc: "https://news.bsi.ac.id/wp-content/uploads/2026/05/photo21-5.png",
            title: "WORKSHOP MACHINE LEARNING 2024",
            description: "Memperkenalkan dasar kecerdasan buatan bagi masa depan teknologi."
        },
    ],
    perElementWidth: 0,
    maxScrollLeft: 0,

    load: function (containerId) {
        this.container = document.getElementById(containerId);
        let innerHTML = "";

        for (const news of this.data) {
            innerHTML += `
                <div class="news-card custom-geometry shadowed bordered">
                    <div class="content">
                        <div style="--img-src: url('${news.imageSrc}');">
                        </div>
                        <div>
                            <h5>${news.title.toUpperCase()}</h5>
                            <p>${news.description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        this.container.innerHTML = innerHTML;
    },

    moveLeftNews: function () {
        this.container.scrollTo({
            left: Math.max(0, this.container.scrollLeft - this.perElementWidth),
            behavior: "smooth"
        });
    },
    
    moveRightNews: function () {
        this.container.scrollTo({
            left: Math.min(this.maxScrollLeft, this.container.scrollLeft + this.perElementWidth),
            behavior: "smooth"
        });
    },

    resize: function () {
        this.perElementWidth = this.container.children.length == 0 ? 0 : this.container.children[1].offsetLeft - this.container.offsetLeft;
        this.maxScrollLeft = this.container.scrollWidth - this.container.clientWidth;
    }
};