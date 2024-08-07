const SUCCESS = "success";
const ERROR = "error";
const WARNING = "warning";

const TOP = "top";
const BOTTOM = "bottom";
const TOP_LEFT = "top_left";
const TOP_RIGHT = "top_right";
const BOTTOM_LEFT = "bottom_left";
const BOTTOM_RIGHT = "bottom_right";

const SLIDE_IN = "slide_in";
const FADE_IN = "fade_in";
const SCALE_IN = "scale_in";

const TOSTR_MESSAGE_CONTAINER = {
  top: null,
  bottom: null,
  top_left: null,
  top_right: null,
  bottom_left: null,
  bottom_right: null,
};

window.addEventListener("load", () => {
  for (let key of Object.keys(TOSTR_MESSAGE_CONTAINER)) {
    TOSTR_MESSAGE_CONTAINER[key] = createTostrContainer(key);
  }
});

class ToastMessage {
  constructor(message, type, position, ease_in, stay, ease_out, anim_type) {
    this.message = message;
    this.type = type;
    this.position = position;
    this.ease_in = ease_in;
    this.stay = stay * 1000;
    this.ease_out = ease_out;
    this.element = undefined;
    this.anim_type = anim_type;

    this.show();
  }

  show() {
    let p = document.createElement("div");
    p.textContent = this.message;
    this.element = document.createElement("div");
    this.element.appendChild(p);
    this.element.classList.add("toast-message");
    this.element.classList.add(this.position);
    this.element.classList.add(this.type);
    this.element.classList.add(this.anim_type);
    this.element.style.transition = `all ${this.ease_out}s ease-in-out`;

    TOSTR_MESSAGE_CONTAINER[this.position].appendChild(this.element);

    setTimeout(() => {
      this.element.classList.add("shown");
      setTimeout(() => {
        this.element.classList.remove("shown");
        setTimeout(() => {
          this.element.remove();
        }, this.ease_out * 1000 + 100);
      }, this.stay);
    });
  }
}

function createToast(message, type, position, ease_in, stay, ease_out, anim_type) {
  new ToastMessage(message, type, position, ease_in, stay, ease_out, anim_type);
}

function createTostrContainer(position) {
  let container = document.createElement("div");
  container.classList.add("tostr_container");
  container.classList.add(position);
  document.body.appendChild(container);
  return container;
}
