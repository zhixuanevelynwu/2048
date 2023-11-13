export default class Tile {
  #tileElement;
  #x;
  #y;
  #v;
  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.v = value;
  }

  set v(value) {
    this.#v = value;
    this.#tileElement.textContent = value;
    const lightness = Math.log2(value) * 10;
    this.#tileElement.style.setProperty(
      "--background-lightness",
      100 - lightness + "%"
    );
    this.#tileElement.style.setProperty("--text-lightness", lightness + "%");
  }

  set x(value) {
    this.#x = value;
    this.#tileElement.style.setProperty("--x", value);
  }

  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value);
  }

  get v() {
    return this.#v;
  }

  remove() {
    this.#tileElement.remove();
  }

  waitForTransition() {
    return new Promise((resolve) => {
      this.#tileElement.addEventListener("transitionend", resolve, {
        once: true,
      });
    });
  }
}
