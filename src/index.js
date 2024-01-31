import './style.css';
import { createMenuPage } from './menuPage';
import { pageContent } from './menuPage';
import { createHomePage } from './homePage';
import { createContactPage } from './contactPage';

const homeButton = document.querySelectorAll('button');
homeButton[0].addEventListener('click', () => {
  pageContent.textContent = '';
  createHomePage();
});

homeButton[1].addEventListener('click', () => {
  pageContent.textContent = '';
  createMenuPage();
});

homeButton[2].addEventListener('click', () => {
  pageContent.textContent = '';
  createContactPage();
});

window.onload = createHomePage();

// createMenuPage();
// createHomePage();
// createContactPage();
