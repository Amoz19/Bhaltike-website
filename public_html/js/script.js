const hamburgerLineTag = document.querySelector(".hamburgerLine");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu")
const overlayMenuTag_btn = document.querySelector(".overlayMenu_btn")
const LiTags = document.getElementById("litag");
const navImageTag = document.querySelector(".nav-image");


hamburgerLineTag.addEventListener("click", () => {
    if(hamburgerLineTag.classList.contains("isOpened")){
        line2Tag.classList.remove("hideLine2");
        line1Tag.classList.remove("rotatePlus45deg");
        line3Tag.classList.remove("rotateMinus45deg");
        overlayMenuTag.classList.remove("overlayMenuShow");
        overlayMenuTag_btn.classList.remove("overlayMenuShow_btn");
        hamburgerLineTag.classList.remove("isOpened");
        for (let i=0; i < LiTags.length; i++){
            LiTags[i].classList.remove("moveLiTagUp");
            }
        
    }
    else{
        line2Tag.classList.add("hideLine2");
        line1Tag.classList.add("rotatePlus45deg");
        line3Tag.classList.add("rotateMinus45deg");
        overlayMenuTag.classList.add("overlayMenuShow");
        overlayMenuTag_btn.classList.add("overlayMenuShow_btn");
        hamburgerLineTag.classList.add("isOpened");
        for (let i=0; i < LiTags.length; i++){
        LiTags[i].classList.add("moveLiTagUp");
        }
        // navImageTag.style.zIndex = "-1";
        
    }
});