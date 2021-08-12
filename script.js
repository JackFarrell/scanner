var totalPrice = 0
function checkPrice() {
    const price = Math.floor(Math.random() * 2 + 1)
    document.getElementById("price").innerHTML = price + "$"

    totalPrice = totalPrice + price
    document.getElementById("totalPrice").innerHTML = totalPrice + "$"
}