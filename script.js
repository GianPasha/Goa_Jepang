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

// navbar jadi hitam sehabis discroll, kalo mobile tetep hitam dari awal
const navbar = document.getElementById("navbar");

function updateNavbar() {
  const desktop = window.innerWidth >= 768;
  const scrolled = window.scrollY > 60;

  navbar.classList.toggle("bg-arang-900", !desktop || scrolled);
  navbar.classList.toggle("md:bg-transparent", desktop && !scrolled);
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);

updateNavbar();

// lightbox/modalbox galeri
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");

// setiap tombol foto di galeri punya data-src (alamat foto) dan data-caption (keterangan)
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

// klik di mana saja untuk menutup
lightbox.addEventListener("click", tutupLightbox);

// atau klik tombol esc
document.addEventListener("keydown", e => {
  if (e.key === "Escape") tutupLightbox();
});
