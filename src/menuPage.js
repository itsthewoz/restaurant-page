import { createElement } from './createElement';

const pageContent = document.querySelector('#content');

const iceCreamMenu = [
  {
    picture: './assets/photo1.png',
    item: 'Pupcup',
    ingredients: 'yoghurt',
    cost: '3.00',
  },
  {
    picture: './assets/photo2.png',
    item: 'Frozen Puppuccino',
    ingredients: 'flavouring, sugar',
    cost: '4.00',
  },
  {
    picture: './assets/photo3.png',
    item: 'Yellow Snow',
    ingredients: 'lemon flavouring, sugar',
    cost: '5.50',
  },
  {
    picture: './assets/photo4.png',
    item: 'Trash Can',
    ingredients: 'everything including the kitchen sink',
    cost: '8.99',
  },
  {
    picture: './assets/photo1.png',
    item: '1 Woofle Scoop',
    ingredients: 'yoghurt',
    cost: '1.00',
  },
  {
    picture: './assets/photo2.png',
    item: 'Frozen Puppuccino',
    ingredients: 'flavouring, sugar',
    cost: '4.00',
  },
];

function createMenuPage({ picture, item, ingredients, cost } = iceCreamMenu) {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('grid-container');
  pageContent.appendChild(containerDiv);

  iceCreamMenu.forEach((ele, index) => {
    const newDiv = document.createElement('div');
    const itemEl = document.createElement('h2');
    itemEl.textContent = `${ele.item}`;
    const ingredientsEl = document.createElement('p');
    ingredientsEl.textContent = `Ingredients: ${ele.ingredients}`;
    const costEl = document.createElement('p');
    costEl.textContent = `Cost: ${ele.cost}`;
    const pictureEl = document.createElement('img');

    newDiv.appendChild(pictureEl);
    newDiv.appendChild(itemEl);
    newDiv.appendChild(ingredientsEl);
    newDiv.appendChild(costEl);

    containerDiv.appendChild(newDiv);
    newDiv.classList.add('menu-item', `card${index}`);
    pictureEl.src = `${ele.picture}`;
    pictureEl.alt = `${ele.item}`;
  });
}

export { createMenuPage, pageContent };
