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

const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: 'images/SnapshootPortfolioD1.png',
    alt: 'Canopy project screenshot',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'http://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card'], cardImage: ['card-image'], cardDescription: ['card-description']},
    cssStyle: 'cardContainer',
  },

  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/images/SnapshootPortfolio.png',
    alt: 'Multi-Post stories project screenshot',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'https://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1']},
    cssStyle: 'cardContainerRight',
  },

  {
    title: 'Facebook 360',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/images/SnapshootPortfolio2.png',
    alt: 'Facebook 360 project screenshot',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'https://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-2', 'hide-ruby'], cardImage: ['card-image'], cardDescription: ['card-description']},
    cssStyle: 'cardContainer',
  },

  {
    title: 'Uber Navigation',
    roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
    image: '/images/SnapshootPortfolio3-1.png',
    alt: 'Uber Navigation project screenshot',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-3', 'flex-item-last', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1']},
    cssStyle: 'cardContainerRight',
    colse: 'close',
  },
];


const section = document.getElementById('portfolio');
projects.forEach((project, index) => {

  
  const div = document.createElement('div');
  div.className = 'main-container';
  div.innerHTML = 
  `     <article class="left">
      <div class=${project.cssStyle}>
        <img class="img" src= ${project.image} alt="First Image" />
        <div class="detail">
          <h3>${project.title}</h3>
          <h4>
            <span>CANOPY</span> &nbsp;
            <img src="images/Counter.png" alt="counter" />&nbsp; Back End Dev
            &nbsp; <img src="images/Counter.png" alt="counter" />&nbsp; 2015
          </h4>
          <p>
            ${project.description}
          </p>
          <ul>
            <li>html</li>
            <li>CSS</li>
            <li>javascript</li>
          </ul>
          <button class="button" value = ${projects.indexOf(project)}> ${project.seeproject}</button>
        </div>
      </div>
    </article>

    <article class="card">
        <div class="cardContainer">
          <img class="img" src = ${project.image} alt="First Image" />
          <h3>${project.title}</h3>
          <h4>
            <span>CANOPY</span>&nbsp;
            <img src="images/Counter.png" alt="counter" />&nbsp; Back End
            Dev&nbsp; <img src="images/Counter.png" alt="counter" />&nbsp; 2015
          </h4>
          <p>
              ${project.description}
          </p>
          <ul>
            <li>html</li>
            <li>CSS</li>
            <li>javascript</li>
          </ul>
          <button class="button"  value = ${projects.indexOf(project)}> ${project.seeproject}</button>
        </div>
      </article>`;  
  section.appendChild(div)
});



var modal = document.getElementById("myModal");
const btn1 = document.querySelectorAll('.button')

const title_popup = document.querySelector('.popup-title');
const image_popup = document.querySelector('.back-image');
for (i of btn1) {
  i.addEventListener('click', function() {
    modal.style.display = "block";
    var x = this.value
   console.log(this.value[0])
  // modal.innerHTML = 
  // `  `;
  title_popup.innerHTML =  `<h2 class="popup-h">${projects[x].title}</h2>`;
  image_popup.innerHTML=`<div class = "popup-img-card" style = "background-image: url('${projects[x].image}'); max-height: 300px; "></div>
  `
  });
}

const closeIcon = document.querySelector('.closeicon');
closeIcon.addEventListener('click', () => {
  modal.style.display = "none";
});




window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



