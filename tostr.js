const SUCCESS = "success";
const ERROR = "error";
const WARNINT = "warning";

const TOP = "top";
const BOTTOM = "bottom";
const TOP_LEFT = "top-left";
const TOP_RIGHT = "top-right";
const BOTTOM_LEFT = "bottom-left";
const BOTTOM_RIGHT = "bottom-right";

const ToastMessage = function(message, type, position, lifespan) {
  this.message = message;
  this.type = type;
  this.position = position;
  this.lifespan = lifespan;
  this.element = undefined;

  this.show();
};

ToastMessage.prototype.show = function() {
  this.element = document.createElement("div");
  this.element.classList.add("toast-message");
  this.element.classList.add(this.position);
  this.element.classList.add(this.type);
  this.element.textContent = this.message;

  document.body.appendChild(this.element);

  setTimeout(() => {
    this.element.classList.add("shown");
    setTimeout(() => {
      this.element.classList.remove("shown");
      setTimeout(() => {
        this.element.remove();
      }, 500);
    }, this.lifespan);
  }, 50);
};

function createToast(message, type, position, lifespan) {
  new ToastMessage(message, type, position, lifespan);
}
