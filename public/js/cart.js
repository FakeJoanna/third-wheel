// CALCULATE TOTAL

const total = document.getElementById("total")

if (document.getElementById("total") !== null) {
  const total = 0

  const subtotal = [...document.querySelectorAll(".individualPrice")]

  subtotal.forEach((element) => {
    total += parseInt(element.innerHTML, 10)
  })
  console.log(total)
  total.innerHTML = total.toString()
}

// ADD TO CART FORM LOGIC

function addToCart(event) {
  event.preventDefault()

  const currentProductID = window.location.pathname.split("/")[2]
  const productArray = JSON.parse(localStorage.getItem("shoppingCart"))

  productArray.push(currentProductID)

  localStorage.setItem("shoppingCart", JSON.stringify(productArray))
}

if (document.getElementById("buyForm") !== null) {
  const buyForm = document.getElementById("buyForm")
  buyForm.addEventListener("submit", addToCart)

  if (localStorage.getItem("shoppingCart") === null) {
    const productArray = []
    localStorage.setItem("shoppingCart", JSON.stringify(productArray))
  }
}

// LOCAL STORAGE TO BACKEND LOGIC

const cartButton = document.getElementById("cartButton")
const cartButtonInput = document.getElementById("cartButtonInput")

cartButton.addEventListener("submit", (event) => {
  event.preventDefault()

  const cartData = JSON.parse(localStorage.getItem("shoppingCart"))

  cartButtonInput.value = JSON.stringify(cartData)

  cartButton.submit()
})

// CART CLEARING

function clearCart(event) {
  event.preventDefault()
  localStorage.clear()
  location.reload()
}

const cartClear = document.getElementById("cartClear")

if (document.getElementById("cartClear") !== null) {
  addEventListener("submit", clearCart)
}
