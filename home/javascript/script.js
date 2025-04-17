document.addEventListener('DOMContentLoaded', () => {
  // Animasi untuk elemen saat halaman dimuat
  gsap.from('.container', {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power4.out"
  });

  // Animasi hover untuk gambar profil
  const profileImage = document.querySelector('.profile-image');
  profileImage.addEventListener('mouseover', () => {
      gsap.to(profileImage, {
          duration: 0.3,
          scale: 1.05,
          ease: "power2.out"
      });
  });

  profileImage.addEventListener('mouseout', () => {
      gsap.to(profileImage, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out"
      });
  });
});

function toggleNavbar() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hidden'); // Toggle class hidden
    menu.classList.toggle('show');   // Toggle class show
}