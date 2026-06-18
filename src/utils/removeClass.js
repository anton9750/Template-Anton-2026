export function removeClass(element, classes) {
  element.classList.remove(...classes.split(' '));
}