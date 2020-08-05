class Toggle {
  constructor(el) {
    this.el = el
    console.log("Btn initialized", el)

    this.handleClick = this.handleClick.bind(this)

    this.bindEvents()
  }

  handleClick() {
    console.log("handleClick")
  }

  bindEvents() {
    this.el.addEventListener("click", this.handleClick)
  }
}

export const initToggle = () => {
  const el = document.querySelector(".a-btn")
  if (el) {
    new Toggle(el)
  }
}

export default Toggle
