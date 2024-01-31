import { createElement } from './createElement';

const pageContent = document.querySelector('#content');

const iceCreamMenu = [
  { picture: '', item: 'Pupcup', ingredients: 'yoghurt', cost: '3' },
  {
    picture: '',
    item: 'Frozen Puppuccino',
    ingredients: 'flavouring, sugar',
    cost: '4',
  },
  {
    picture: '',
    item: 'Yellow Snow',
    ingredients: 'lemon flavouring, sugar',
    cost: '5.50',
  },
  {
    picture: '',
    item: 'Trash Can',
    ingredients: 'everything including the kitchen sink',
    cost: '8.99',
  },
];

function createMenuPage() {
  // const containerDiv = document.createElement('div');
  // containerDiv.classList.add('grid-container');
  // pageContent.appendChild(containerDiv);

  // iceCreamMenu.forEach((item, index) => {
  //   const newDiv = document.createElement('div');
  //   containerDiv.appendChild(newDiv);
  //   newDiv.classList.add('menu-item', `card${index}`);
  // });
  createElement('div', pageContent, ['grid-container']);
  iceCreamMenu.forEach((ele, index) => {
    createElement('div', pageContent.firstChild, ['menu-item', `card${index}`]);
  });
}

export { createMenuPage };

// lets = name of element, type of element, parent to append, classes to add
