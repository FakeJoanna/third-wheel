Dropzone.options.dropzone = {
  paramName: "file",
  addRemoveLinks: true,
  acceptedFiles: "image/*",
  init: function () {
    this.on("addedfile", function (file) {
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData)

      fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("This is the data: ", data);
          
          value.push(data)
          imageInput.value = `${value}`
          
        })
        .catch((error) => console.error(error));
    });
  },
}

const value = []
const imageInput = document.getElementById("imageInput")

const mainForm = document.getElementById("mainForm")
const submitBtn = document.getElementById("submitButton")
const formData = new FormData(mainForm)

const errorP = document.createElement("p")
errorP.innerHTML = "Please upload at least one image"

submitBtn.addEventListener("click", event => {
  console.log("submit eventListener works")
  mainForm.submit()
})

