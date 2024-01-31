// lets = name of element, type of element, parent to append, classes to add

function createElement(type, parent, classNames) {
  const item = document.createElement(type);
  parent.appendChild(item);
  item.classList.add(...classNames);
}

export { createElement };
