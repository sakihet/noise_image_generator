{
  const VERSION = '0.0.0'
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
          this.resize(this.width, this.height)
          this.draw()
        })
      }
      saveButton.addEventListener('click', e => {
        this.save()
      })
    }
    draw() {
      console.log('draw')
    }
    resize() {
      console.log('resize')
    }
    save() {
      console.log('save')
      window.open(this.cv)
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
