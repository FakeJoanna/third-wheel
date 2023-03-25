// LOGIN MODAL DOM AND LOGIC
const loginForm = document.getElementById("loginForm")

let errorUsername = (errorPassword = document.createElement("p"))

const usernameFieldDiv = document.getElementById("usernameInputDiv")
const usernameField = document.getElementById("usernameInput")
const passwordInputDiv = document.getElementById("passwordInputDiv")
const passwordField = document.getElementById("passwordInput")

loginForm.onsubmit = (event) => {
  event.preventDefault()

  usernameField.classList.remove("is-invalid")
  passwordField.classList.remove("is-invalid")

  const formData = new FormData(loginForm)

  const formDataJSON = {}
  for (const [key, value] of formData.entries()) {
    formDataJSON[key] = value
  }

  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(formDataJSON),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.isUser === false) {
        usernameField.classList.add("is-invalid")
        errorUsername.innerHTML = "User does not exist"
        usernameFieldDiv.appendChild(errorUsername)
      } else if (data.correctPassword === false) {
        passwordField.classList.add("is-invalid")
        errorPassword.innerHTML = "Incorrect password"
        passwordInputDiv.appendChild(errorPassword)
      } else {
        window.location.href = `/user-profile`
      }
    })
}
