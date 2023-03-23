Dropzone.options.imageUpload = {
  paramName: "file",
  addRemoveLinks: true,
  acceptedFiles: "image/*",
  init: function () {
    dropzone = this

    for (const image of images) {
      createThumbnail(image).then((thumbnail) => {
        const mockFile = { name: image, size: 0 }
        this.emit("addedfile", mockFile)
        this.emit("thumbnail", mockFile, thumbnail) // pass thumbnail data URL as the second argument
        this.emit("complete", mockFile)
        URLs.push(image)
        imageInput.value = JSON.stringify(URLs)
      })
    }

    this.on("success", function (file, response) {
      URLs.push(response)
      imageInput.value = JSON.stringify(URLs)
    })

    this.on("removedfile", function (file) {
      const index = URLs.indexOf(file.url)
      if (index !== -1) {
        URLs.splice(index, 1)
        imageInput.value = JSON.stringify(URLs)
      }
    })
  },
}

let dropzone
const URLs = []

const imageInput = document.getElementById("imageInput")
const images = imageInput.value.split(",")

function createThumbnail(url) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      canvas.width = 120
      canvas.height = 120

      ctx.drawImage(img, 0, 0, 120, 120)

      const dataURL = canvas.toDataURL()
      resolve(dataURL)
    }
    img.onerror = (err) => {
      reject(err)
    }

    img.src = url
  })
}
