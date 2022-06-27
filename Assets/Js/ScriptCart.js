function totalClick() {
    let cartItem = document.querySelectorAll("tbody tr")
    var total = 0
    let totalPrice = document.querySelector(".price-total span")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".price span").innerHTML.split(".").join('')
        totalTemp = inputValue * productPrice
        total += totalTemp
    }
    totalPrice.innerHTML = total.toLocaleString('de-DE')
}

// delete 
deleteCart()
function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".btn-delete i")
        productT[i].addEventListener("click", function(event) {
            var cartdelete = event.target
            var cartItemR = cartdelete.parentElement.parentElement.parentElement
            cartItemR.remove()
            totalClick()
            // console.log(cartItemR)
        })
    }
}