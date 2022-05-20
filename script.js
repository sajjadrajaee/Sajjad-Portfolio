const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const main = document.querySelector('.cover');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  if (main.classList.contains('active')) {
    main.classList.remove('active');
  } else {
    main.classList.toggle('active');
  }
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Form Validation
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  const emailInput = form.email.value;
  if (emailInput.toLowerCase() !== emailInput) {
    event.preventDefault();
    const errorTag = document.querySelector('.error-message');
    errorTag.innerHTML = 'Error: Please insert email in lowercase!';
  } else {
    form.action = 'https://formspree.io/f/mbjwpgvg';
  }
});

// popup section
const btn = document.querySelector('.button');
const popupactive = document.querySelector('.popup');
const closepopup = document.querySelector('.close');
const popupConstainer = document.querySelector('.popup-container');

btn.addEventListener('click', () => {
  popupactive.classList.toggle('active');
  popupConstainer.classList.toggle('show');
});

closepopup.addEventListener('click', () => {
  popupConstainer.classList.toggle('show');
});

const projects = [
  {
    id: 'card1',
    title: 'Tonic',
    image: 'images/SnapshootPortfolioD1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },

  {
    id: 'card2',
    title: 'Multi-Post Stories',
    image: 'images/SnapshootPortfolio4-1.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    liveLink: 'divinecharlotte.github.io/portifolio-setup',
  },

  {
    id: 'card3',
    title: 'Facebook 360',
    image: 'images/SnapshootPortfolio3-1.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
  {
    id: 'card4',
    title: 'Uber Navigation',
    image: 'images/SnapshootPortfolio0.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
];

const popup = ` <div class="popup">
<div class="popup-top">
  <h2 class="head-text">${projects.title}</h2>
  <img class="close" src="images/close.webp">
</div>

<h4>
  <span>CANOPY</span> &nbsp;
  <img src="images/Counter.png" alt="counter" />&nbsp; Back End Dev
  &nbsp; <img src="images/Counter.png" alt="counter" />&nbsp; 2015
</h4>
<img class="popup-image" src="${projects.image}">
<div id="popup-content">
  <div class="popup-details">
    ${projects.description}
  </div>
  <div class="popup-tech">
    <ul>
      <li>${projects.technologyList[0]}</li>
      <li>${projects.technologyList[1]}</li>
      <li>${projects.technologyList[2]}</li>
    </ul>
    <hr id="hr"/>
    <div class="buttons">
      <a href="sajjadrajaee.github.io/Sajjad-Portfolio"><button class="button">See Live <img src="images/link.png" class="popup-icon"
            alt="Ellipse"></img></button></a>
      <a href="github.com/sajjadrajaee/Sajjad-Portfolio"><button class="button">Source Code <img src="images/git.png" class="popup-icon"
            alt="Git"></img></button></a>
    </div>
  </div>
</div>
</div>`;

popupConstainer.innerHTML=popup;


// Preserve Data to browser
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
      formData = { name: '', email: '', message: '' };
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const textArea = document.getElementById('user-message');
textArea.addEventListener('change', (event) => {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = { name: '', email: '', message: '' };
  }
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

function retrieveFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('email').value = formData.email;
    document.getElementById('name').value = formData.name;
    document.getElementById('message').value = formData.message;
  }
}

retrieveFormData();