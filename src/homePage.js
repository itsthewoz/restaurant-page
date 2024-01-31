import { pageContent } from './menuPage';
import HomePhoto from './assets/homePhoto.png';

function createHomePage() {
  const cta = document.createElement('h2');
  const homePhoto = document.createElement('img');
  const endText = document.createElement('p');
  const containerDiv = document.createElement('div');

  containerDiv.appendChild(cta);
  containerDiv.appendChild(homePhoto);
  containerDiv.appendChild(endText);
  pageContent.appendChild(containerDiv);

  containerDiv.classList.add('homepage-container');

  cta.textContent = 'The best pupcups on the planet';
  homePhoto.src = HomePhoto;
  homePhoto.alt = 'White fluffy dog smiling';
  endText.textContent = 'Coming to a park near you!';
}

export { createHomePage };
