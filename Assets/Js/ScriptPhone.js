// --------------View-more-----------------------------------------------------
const viewMoreBtn = document.querySelector('.view-more-btn')

viewMoreBtn.addEventListener("click", function() {
    document.querySelector('.row-none').style.display="block"
    document.querySelector('.view-more').style.display="none"
    document.querySelector('.view-abbreviate').style.display="block"
})
const viewAbbreviateBtn = document.querySelector('.view-abbreviate-btn')
viewAbbreviateBtn.addEventListener("click", function() {
    document.querySelector('.row-none').style.display="none"
    document.querySelector('.view-more').style.display="block"
    document.querySelector('.view-abbreviate').style.display="none"
})