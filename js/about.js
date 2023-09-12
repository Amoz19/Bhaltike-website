var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      // slideShadows: true,
    },
   loop:true,
  });
  
  const imagesAraay = ["img/slider1.jpg","img/slider2.jpg","img/slider3.jpg"];
const images = document.getElementById("image");
let imagecounter = 0;
const previousIcon = document.getElementById("previousicon");
const nextIcon = document.getElementById("nexticon");

previousIcon.addEventListener("click",function(){
    imagecounter--;
    if(imagecounter<0){
        imagecounter = imagesAraay.length-1;
    }
    images.src = imagesAraay[imagecounter];
});

nextIcon.addEventListener("click",function(){
    imagecounter++;
    if(imagecounter>imagesAraay.length -1){
        imagecounter = 0;
    }
    images.src = imagesAraay[imagecounter];
});
