// ADD TO CART FORM LOGIC

function addToCart(event) {
  event.preventDefault()

  const currentProductID = window.location.pathname.split("/")[2]
  const productArray = JSON.parse(localStorage.getItem("shoppingCart"))

  productArray.push(currentProductID)

  localStorage.setItem("shoppingCart", JSON.stringify(productArray))

  const button = document.getElementById("buyButton")
  button.style.backgroundColor = "green"
  button.innerHTML = "Added to cart!"

  setTimeout(() => {
    button.style.backgroundColor = "#0275d8 "
    button.innerHTML = "Add to cart"
  }, 2000)
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
  if (cartData !== null) {
    cartButtonInput.value = JSON.stringify(cartData)
  }

  cartButton.submit()
})