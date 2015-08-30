{
  const VERSION = '1.0.0'
  let $ = (id) => {
    return document.getElementById(id)
  }
  class NoiseImageGenerator {
    constructor(color, threshold, width, height, saveButton, canvas) {
      this.canvas = canvas
      let params = [
        this.color = color,
        this.threshold = threshold,
        this.width = width,
        this.height = height
      ]
      for (let p of params) {
        p.addEventListener('change', e => {
          this.resize(this.width.value, this.height.value)
          this.draw()
        })
      }
      saveButton.addEventListener('click', e => {
        this.save()
      })
      this.resize(this.width.value, this.height.value)
      this.draw()
    }
    draw() {
      let ctx = this.canvas.getContext('2d')
      let w = this.canvas.width
      let h = this.canvas.height
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = this.color.value
      ctx.fillRect(0, 0, w, h)
      let inputImageData = ctx.getImageData(0, 0, w, h)
      let inputData = inputImageData.data
      let outputImageData = ctx.getImageData(0, 0, w, h)
      let outputData = outputImageData.data
      let th = this.threshold.value
      let num = w * h * 4
      for( let i = 0; i < num; i = i + 4){
        let r = this.myrand(-th, th)
        outputData[i] = inputData[i] + r
        outputData[i+1] = inputData[i+1] + r
        outputData[i+2] = inputData[i+2] + r
        outputData[i+3] = 255
      }
      ctx.putImageData(outputImageData, 0, 0)
      return
    }
    resize(w, h) {
      this.canvas.width = w
      this.canvas.height = h
      return
    }
    save() {
      window.open(this.canvas.toDataURL('image/png'))
      return
    }
    myrand(min, max) {
      let r = Math.floor(Math.random() * (max - min) + 1)
      r += min
      return r
    }
  }
  window.onload = () => {
    new NoiseImageGenerator(
      $('color'),
      $('threshold'),
      $('width'),
      $('height'),
      $('saveButton'),
      $('canvas')
    )
    $('VERSION').innerHTML = ` v${VERSION}`
  }
}
