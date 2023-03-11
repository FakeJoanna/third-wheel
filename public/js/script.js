// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("third-wheel JS imported successfully!");
});

const loginForm = document.getElementById("loginForm");

loginForm.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm)

  const formDataJSON = {};
  for (const [key, value] of formData.entries()) {
    formDataJSON[key] = value;
  }

  console.log(formDataJSON)

  fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(formDataJSON),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
  .then(data => {
    console.log(data)
    const usernameFieldDiv = document.getElementById("usernameInputDiv");
    const usernameField = document.getElementById("usernameInput");
    const passwordInputDiv = document.getElementById("usernameInputDiv");
    const passwordField = document.getElementById("passwordInput");
    if (data.isUser === false) {
      usernameField.classList.add("is-invalid");
      const errorP = document.createElement("p");
      errorP.innerHTML = "User does not exist";
      usernameFieldDiv.appendChild(errorP);
    }
    else if (data.correctPassword === false) {
      passwordField.classList.add("is-invalid");
      const errorP = document.createElement("p");
      errorP.innerHTML = "Incorrect password";
      passwordInputDiv.appendChild(errorP);
    }
  })
}