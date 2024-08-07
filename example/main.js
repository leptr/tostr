window.addEventListener("load", () => {
  const button = document.querySelector("#click");
  button.addEventListener("click", () => {
    createToast(`${TOP}, ${FADE_IN}, ${SUCCESS}`, SUCCESS, TOP, 0.25, 2.5, 0.25, FADE_IN);
    createToast(`${BOTTOM}, ${FADE_IN}, ${ERROR}`, ERROR, BOTTOM, 0.25, 2.5, 0.25, FADE_IN);
    createToast(`${TOP_LEFT}, ${SCALE_IN}, ${WARNING}`, WARNING, TOP_LEFT, 0.25, 2.5, 0.25, SCALE_IN);
    createToast(`${TOP_RIGHT}, ${SLIDE_IN}, ${SUCCESS}`, SUCCESS, TOP_RIGHT, 0.25, 2.5, 0.25, SLIDE_IN);
    createToast(`${BOTTOM_LEFT}, ${SLIDE_IN}, ${ERROR}`, ERROR, BOTTOM_LEFT, 0.25, 2.5, 0.25, SLIDE_IN);
    createToast(`${BOTTOM_RIGHT}, ${SCALE_IN}, ${WARNING}`, WARNING, BOTTOM_RIGHT, 0.25, 2.5, 0.25, SCALE_IN);
  });
});
