const Division = {
    bphMemberContainer: document.getElementById("bph-member-container"),
    diventMemberContainer: document.getElementById("divent-member-container"),
    litbangMemberContainer: document.getElementById("litbang-member-container"),
    medinfoMemberContainer: document.getElementById("medinfo-member-container"),
    
    bphMembers: [
        {
            name: "Aileen",
            position: "Ketua",
            nim: "10240011",
            photo: "../images/members/aileen.jpg"
        },
        {
            name: "Najwa",
            position: "Sekretaris",
            nim: "10240011",
            photo: "../images/members/najwa.jpg"
        },
        {
            name: "Marselia",
            position: "Bendahara",
            nim: "10240011",
            photo: "../images/members/marselia.jpg"
        }
    ],

    diventMembers: [
        {
            name: "Riski",
            position: "Kepala",
            nim: "10240011",
            photo: "../images/members/riski.jpg"
        },
        {
            name: "Galang",
            position: "Anggota",
            nim: "10240011",
            photo: ""
        },
        {
            name: "Renata",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/renata.jpg"
        },
        {
            name: "Pai",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/pai.jpg"
        }
    ],

    litbangMembers: [
        {
            name: "Jessie",
            position: "Kepala",
            nim: "10240011",
            photo: "../images/members/jessie.jpg"
        },
        {
            name: "Sawal",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/sawal.jpg"
        },
        {
            name: "Haikal",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/haikal.jpg"
        },
        {
            name: "Amanda",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/amanda.jpg"
        },
        {
            name: "Ferdi",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/ferdi.jpg"
        },
        {
            name: "Fariel",
            position: "Anggota",
            nim: "10240012",
            photo: "../images/members/fariel.jpg"
        }
    ],

    medinfoMembers: [
        {
            name: "Debora",
            position: "Kepala",
            nim: "10240011",
            photo: "../images/members/debora.jpg"
        },
        {
            name: "Al Hadid",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/alhadid.jpg"
        },
        {
            name: "Agus",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/agus.jpg"
        },
        {
            name: "Sulis",
            position: "Anggota",
            nim: "10240011",
            photo: "../images/members/sulis.jpg"
        }
    ],

    load: function () {
        let bphInnerHTML = "";
        let diventInnerHTML = "";
        let litbangInnerHTML = "";
        let medinfoInnerHTML = "";

        for (const member of this.bphMembers) {
            bphInnerHTML += `
                <div class="member-card custom-geometry shadowed bordered">
                    <div class="content">
                        <section>
                            <h4>${member.name}</h4>
                            <p>Posisi: ${member.position}</p>
                            <p>NIM: ${member.nim}</p>
                        </section>
                        <div style="--img-src: url('${member.photo}');">
                        </div>
                    </div>
                </div>
            `;
        }
        
        for (const member of this.diventMembers) {
            diventInnerHTML += `
                <div class="member-card custom-geometry shadowed bordered">
                    <div class="content">
                        <section>
                            <h4>${member.name}</h4>
                            <p>Posisi: ${member.position}</p>
                            <p>NIM: ${member.nim}</p>
                        </section>
                        <div style="--img-src: url('${member.photo}');">
                        </div>
                    </div>
                </div>
            `;
        }
        
        for (const member of this.litbangMembers) {
            litbangInnerHTML += `
                <div class="member-card custom-geometry shadowed bordered">
                    <div class="content">
                        <section>
                            <h4>${member.name}</h4>
                            <p>Posisi: ${member.position}</p>
                            <p>NIM: ${member.nim}</p>
                        </section>
                        <div style="--img-src: url('${member.photo}');">
                        </div>
                    </div>
                </div>
            `;
        }

        for (const member of this.medinfoMembers) {
            medinfoInnerHTML += `
                <div class="member-card custom-geometry shadowed bordered">
                    <div class="content">
                        <section>
                            <h4>${member.name}</h4>
                            <p>Posisi: ${member.position}</p>
                            <p>NIM: ${member.nim}</p>
                        </section>
                        <div style="--img-src: url('${member.photo}');">
                        </div>
                    </div>
                </div>
            `;
        }

        this.bphMemberContainer.innerHTML = bphInnerHTML;
        this.diventMemberContainer.innerHTML = diventInnerHTML;
        this.litbangMemberContainer.innerHTML = litbangInnerHTML;
        this.medinfoMemberContainer.innerHTML = medinfoInnerHTML;
    }
}

window.onload = function () {
    Division.load();
};