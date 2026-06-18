export function set(element, target) {
  if (Array.isArray(element)) {
    element.forEach((childElement) => target.appendChild(childElement));
  } else target.appendChild(element);
}