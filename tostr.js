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
  top: [],
  bottom: [],
  top_left: [],
  top_right: [],
  bottom_left: [],
  bottom_right: [],
};

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

    let container = TOSTR_MESSAGE_CONTAINER[this.position];

    container.push(this.element);
    document.body.appendChild(this.element);

    if (container.length > 1) {
      for (let i = container.length - 1; i >= 0; i--) {
        let toast = container[i];
        let offset = 5;
        for (let j = container.length - 1; j > i; j--) offset += container[j].offsetHeight + 5;
        if (toast.classList.contains("top") || toast.classList.contains("top_left") || toast.classList.contains("top_right")) toast.style.marginTop = `${offset}px`;
        else toast.style.marginBottom = `${offset}px`;
      }
    }

    setTimeout(() => {
      this.element.classList.add("shown");
      setTimeout(() => {
        this.element.classList.remove("shown");
        setTimeout(() => {
          container.splice(container.indexOf(this.element), 1);
          this.element.remove();
        }, this.ease_out * 1000 + 100);
      }, this.stay);
    });
  }
}

function createToast(message, type, position, ease_in, stay, ease_out, anim_type) {
  new ToastMessage(message, type, position, ease_in, stay, ease_out, anim_type);
}
