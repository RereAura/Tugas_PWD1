
document.addEventListener("DOMContentLoaded", function () {
    // 1. Menampilkan tahun secara otomatis di footer
    const tahun = document.getElementById("tahun");

    if (tahun) {
        tahun.textContent = new Date().getFullYear();
    }

    // 2. Menutup navbar setelah menu diklik di HP
    const navLinks = document.querySelectorAll(
        ".navbar-collapse .nav-link"
    );

    const navbarMenu = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarMenu &&
                navbarMenu.classList.contains("show") &&
                window.bootstrap
            ) {
                const collapse = bootstrap.Collapse.getOrCreateInstance(
                    navbarMenu
                );

                collapse.hide();
            }
        });
    });

    // 3. Validasi form kontak
    const formKontak = document.getElementById("formKontak");
    const statusForm = document.getElementById("statusForm");

    if (formKontak) {
        formKontak.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!formKontak.checkValidity()) {
                formKontak.reportValidity();
                return;
            }

            if (statusForm) {
                statusForm.textContent =
                    "Terima kasih! Form berhasil divalidasi. " +
                    "Pesan ini hanya simulasi dan belum dikirim ke server.";

                statusForm.classList.remove("d-none");
                statusForm.setAttribute("role", "status");
            }

            formKontak.reset();
        });
    }
});
