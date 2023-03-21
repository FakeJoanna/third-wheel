Dropzone.options.imageUpload = {
  paramName: "file",
  addRemoveLinks: true,
  acceptedFiles: "image/*",
  init: function () {
    dropzone = this
    this.on("success", function (file, response) {
      URLs.push(response)
      imageInput.value = JSON.stringify(URLs)
    })
  },
}

let dropzone

const URLs = []
const imageInput = document.getElementById("imageInput")

const mainForm = document.getElementById("mainForm")
const submitBtn = document.getElementById("submitButton")

const errorP = document.createElement("span")
errorP.innerHTML = "Please upload at least one image!"

mainForm.addEventListener("submit", (event) => {
  event.preventDefault()
  if (dropzone.getAcceptedFiles().length === 0) {
    document.getElementById("submitDiv").appendChild(errorP)
    submitBtn.style.backgroundColor = " #d9534f"

    setTimeout(() => {
      submitBtn.style.backgroundColor = "#0275d8"
      errorP.remove()
    }, 2000)
  }
  mainForm.submit()
})
