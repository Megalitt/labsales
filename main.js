let info = document.querySelectorAll(".header__info");
let nav = document.querySelectorAll(".header__nav");
let btns = document.querySelectorAll(".btn__dot");
let check = document.querySelector(".checked");
let svg = document.querySelector(".checked svg");
let text = document.querySelector(".personal-information");


for(let inf of info){
  inf.addEventListener('click', (e) => {
    document.querySelector('.header__info .activ').classList.remove('activ');
    e.target.classList.add('activ')
  })
};

for(let navig of nav){
  navig.addEventListener('click', (e) => {
    document.querySelector('.header__nav .activ').classList.remove('activ');
    e.target.classList.add('activ')
  })
};
for(let btn of btns){
  btn.addEventListener('click', (e) => {
    document.querySelector('.btn .activ-btn').classList.remove('activ-btn');
    e.target.classList.add('activ-btn')
  })
};
check.addEventListener("click", () => {
  if(svg.classList.contains('none') && text.classList.contains("activ-none")) {
    svg.classList.remove("none");
    text.classList.remove("activ-none");
  }else{
    svg.classList.add("none");
    text.classList.add("activ-none");
  }
})
console.log(check, svg, text);




var swiper = new Swiper(".mySwiper", {
  direction: 'vertical',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
// when window width is >= 320px
320: {
  slidesPerView: 1,
  spaceBetween: 30
},
// when window width is >= 480px
480: {
  slidesPerView: 1,
  spaceBetween: 30
},
// when window width is >= 640px
640: {
  slidesPerView: 1,
  spaceBetween: 30
}
}
});