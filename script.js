// buka tutup menu di ukuran device kecil
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// tutup daftar menu setelah salah satu tautan diklik
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// navbar jadi hitam sehabis discroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("bg-arang-900", window.scrollY > 60);
});

// modalbox galeri
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");

// Setiap tombol foto di galeri punya data-src (alamat foto) dan data-caption (keterangan)
document.querySelectorAll("[data-src]").forEach(tombol => {
  tombol.addEventListener("click", () => {
    lbImg.style.backgroundImage = `url('${tombol.dataset.src}')`;
    lbCaption.textContent = tombol.dataset.caption;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  });
});

function tutupLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
}

// Klik di mana saja pada latar gelap untuk menutup
lightbox.addEventListener("click", tutupLightbox);

// Atau tekan tombol Esc
document.addEventListener("keydown", e => {
  if (e.key === "Escape") tutupLightbox();
});