const root = document.querySelector("#burburalik");
let { innerHeight, innerWidth } = window;
console.log(innerHeight, innerWidth);
if (innerHeight < 300) {
  innerHeight = 350;
}
if (innerWidth < 300) {
  innerWidth = 750;
}

class burbur {
  constructor() {
    this.burburSpan = undefined;
    this.handleNewburbur();
    this.color = this.randomColor();

    this.posY = this.randomNumber(innerHeight - 20, 20);
    this.posX = this.randomNumber(innerWidth - 20, 20);

    this.burburSpan.style.top = this.posY + "px";
    this.burburSpan.style.left = this.posX + "px";

    // setting height and width of the bubble
    this.height = this.randomNumber(60, 20);
    this.width = this.height;

    this.burburEnd.call(this.burburSpan, this.randomNumber(6000, 3000));
  }

  // creates and appends a new bubble in the DOM
  handleNewburbur() {
    this.burburSpan = document.createElement("span");
    this.burburSpan.classList.add("burbur");
    root.append(this.burburSpan);
    this.handlePosition();
    this.burburSpan.addEventListener("click", this.burburEnd);
  }

  handlePosition() {
    // positioning the bubble in different random X and Y
    const randomY = this.randomNumber(60, -60);
    const randomX = this.randomNumber(60, -60);

    this.burburSpan.style.backgroundColor = this.color;
    this.burburSpan.style.height = this.height + "px";
    this.burburSpan.style.width = this.height + "px";

    this.posY = this.randomNumber(innerHeight - 20, 20);
    this.posX = this.randomNumber(innerWidth - 20, 20);

    this.burburSpan.style.top = this.posY + "px";
    this.burburSpan.style.left = this.posX + "px";

    const randomSec = this.randomNumber(4000, 200);
    setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomColor() {
    return `rgba(
        ${this.randomNumber(0, 255)},
        ${this.randomNumber(0, 255)},
        ${this.randomNumber(0, 255)}, 
        ${this.randomNumber(0.1, 1)})`;
  }

  burburDeath(removingTime = 0) {
    setTimeout(
      () => {
        requestAnimationFrame(() => this.classList.add("burbur--bust"));
      },
      removingTime === 0 ? removingTime : removingTime - 100
    );

    setTimeout(() => {
      requestAnimationFrame(() => this.remove());
      requestAnimationFrame(() => new burbur());
    }, removingTime);
  }
}

// creating many bubble instance

setInterval(function () {
  requestAnimationFrame(() => new burbur());
}, 2000);