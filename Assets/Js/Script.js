const inputSearch = document.querySelector(".input-search")
const inputMobileSearch = document.querySelector(".input-mobile-search")
const autoBox = document.querySelector(".autobox")
const autoBoxMobile = document.querySelector(".autobox-mobile")

inputSearch.onkeyup = (e) => {
    let checkData = e.target.value
    let dataArr = []
    if (checkData) {
        dataArr = recomentlist.filter((data)=> {
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
        })

        dataArr = dataArr.map((data)=> {
            return data = '<li>'+ data +'</li>'
        })
        autoBox.classList.add('active')
        showSearch(dataArr)
        let liItem = document.querySelectorAll('.autobox li')
        for (let i = 0; i < liItem.length; i++) {
            liItem[i].addEventListener("click", function(){
                inputSearch.value = liItem[i].innerHTML
                autoBox.classList.remove('active')
            })            
        }
    }
    else {
        autoBox.classList.remove('active')
    }
}

inputMobileSearch.onkeyup = (e) => {
    let checkData = e.target.value
    let dataArr = []
    if (checkData) {
        dataArr = recomentlist.filter((data)=> {
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
        })

        dataArr = dataArr.map((data)=> {
            return data = '<li>'+ data +'</li>'
        })
        autoBoxMobile.classList.add('active')
        showMobileSearch(dataArr)
        let liItem = document.querySelectorAll('.autobox-mobile li')
        for (let i = 0; i < liItem.length; i++) {
            liItem[i].addEventListener("click", function(){
                inputMobileSearch.value = liItem[i].innerHTML
                autoBoxMobile.classList.remove('active')
            })            
        }
    }
    else {
        autoBoxMobile.classList.remove('active')
    }
}

function showSearch(list) {
    let listData
    if (!list.length) {
        listData = '<li>'+ inputSearch.value +'</li>'
    } else {
        listData = list.join('')
    }
    autoBox.innerHTML = listData
}
function showMobileSearch(list) {
    let listData
    if (!list.length) {
        listData = '<li>'+ inputMobileSearch.value +'</li>'
    } else {
        listData = list.join('')
    }
    autoBoxMobile.innerHTML = listData
}


let recomentlist = [
    "Samsung Galaxy M33 5G",
    "Xiaomi 11T Pro 5G",
    "iPhone 13 Pro Max",
    "Samsung Galaxy Tab S8",
    "iPad Pro M1 12.9 inch 5G",
    "Samsung Galaxy Tab S8+",
    "iPad Pro M1 12.9 inch WiFi",
    "iPad Pro M1 11 inch 5G",
    "SamSung Galaxy S22 Ultra 5G",
    "OPPO Reno7 series",
    "Realme C35",
    "Xiaomi 11T",
    "OPPO Find X5 Pro 5G",
    "iPhone SE (2022)",
    "Samsung Galaxy S21+ 5G 128GB",
    "Realme 9 4G"
]