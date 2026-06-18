export function create(element, classes) {
  const createdElement = document.createElement(element);
  if (classes) createdElement.className = classes;
  return createdElement;
}