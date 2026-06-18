export function addClass(element, classes) {
  element.classList.add(...classes.split(' '));
}