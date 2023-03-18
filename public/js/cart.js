// CALCULATE TOTAL

const totalInput = document.getElementById("total")

let total = 0
const subtotals = [...document.querySelectorAll(".individualPrice")]

subtotals.forEach((element) => {
  console.log(parseInt(element.innerHTML, 10))
  total += parseInt(element.innerHTML, 10)
})
console.log(total)
totalInput.innerHTML = "$" + total.toString()


// CART CLEARING

function clearCart(event) {
  event.preventDefault()
  window.localStorage.clear()
  console.log(localStorage)
  window.location.href = "http://localhost:3000/cart"
}

const clear = document.getElementById("clearCart")
clear.addEventListener("submit", clearCart)

