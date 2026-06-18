export function toggleClass(element, classes) {
  classes
    .split(' ')
    .forEach((className) => element.classList.toggle(className));
}