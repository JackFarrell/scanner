var totalPrice = 0
var price = 0
var priceCents = 0
function checkPrice() {
    var item = document.getElementById("item").value
    if (item === "pokemon card") {
        document.getElementById("price").innerHTML = "25¢"
        priceCents = .25

        totalPrice = totalPrice + price + priceCents
        document.getElementById("totalPrice").innerHTML = totalPrice

    }else {
        var price1 = Math.floor(Math.random() * 2 + 1)
        document.getElementById("price").innerHTML = price1 + "$"

        totalPrice = totalPrice + price1 + price //+ priceCents
        document.getElementById("totalPrice").innerHTML = totalPrice
    }
    
}