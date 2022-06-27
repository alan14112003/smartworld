// slider --------------------------------------
const slideRightBtn = document.querySelector('.fa-chevron-right')
const slideLeftBtn = document.querySelector('.fa-chevron-left')
const imgNum = document.querySelectorAll('.slider-content-container')
let index = 0
console.log(imgNum)
function slideRight() {
    document.querySelector('.slider-content').style.right = index*100 + "%"
}
slideRightBtn.addEventListener("click", function(){
    index += 1
    if (index > imgNum.length-1) {
        index = 0;
    }
    slideRight()
})
slideLeftBtn.addEventListener("click", function(){
    index -= 1
    if (index < 0) {
        index = imgNum.length-1;
    }
    slideRight()
})
//-------- slide tự chạy ---------
function imgauto() {
    index += 1;
    if (index > imgNum.length-1) {
        index = 0;
    }
    slideRight()
}
setInterval(imgauto, 6000)