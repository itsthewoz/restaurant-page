import { pageContent } from './menuPage';

function createContactPage() {
  const containerDiv = document.createElement('div');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');

  const googleMap = document.createElement('iframe');

  div.appendChild(googleMap);
  ul.appendChild(li1);
  ul.appendChild(li2);
  containerDiv.appendChild(div);
  containerDiv.appendChild(ul);
  pageContent.appendChild(containerDiv);

  containerDiv.classList.add('flex-container');

  li1.textContent = 'Phone: 123 456 789';
  li2.textContent = 'Email: YukisWinterWorld@dafloofwoofs.awo';

  googleMap.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316098.67219890526!2d9.953666297984906!3d51.760084245733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a53d6d4fd9d78d%3A0xd7d8c9c208826bb1!2sHarz!5e0!3m2!1sen!2sus!4v1706713379974!5m2!1sen!2sus';
  googleMap.width = '500';
  googleMap.height = '350';
  googleMap.style = 'border:0;';
  googleMap.allowFullscreen = '';
  googleMap.loading = 'lazy';
  googleMap.referrerPolicy = 'no-referrer-when-downgrade';
}

export { createContactPage };
