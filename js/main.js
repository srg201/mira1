const heroSwiper = document.querySelector(".hero-swiper");

if(heroSwiper) {
const swiper = new Swiper(".hero-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 45,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".hero-swiper-button-next",
    prevEl: ".hero-swiper-button-prev",
  },
  pagination: {
    el: ".hero-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
}