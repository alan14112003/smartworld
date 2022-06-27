// --------------lọc tablet-----------------------------------------------------
const x = document.querySelectorAll('.show-view')
const showHang = document.querySelector('.hang')
let ktClick = 0
function anView() {
    for (let index = 0; index < x.length; index++) {
        x[index].style.display="none"
    }
}
function kiemTraClick(className) {
    if (ktClick == 0) {
        document.querySelector(className).style.display = "block"
        ktClick = 1
    } else ktClick = 0;
}
showHang.addEventListener("click", function() {
    anView()
    kiemTraClick('.hang-showView')
})
const showRam = document.querySelector('.ram')
showRam.addEventListener("click", function() {
    anView()
    kiemTraClick('.ram-showView')
})