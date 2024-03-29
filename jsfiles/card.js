const projects = {
  first: {
    name: 'First Project',
    desc: `first project description <br> Lorem Ipsum is simply. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: '../images/Snapshoot Portfolio.png',
    techs: ['html', 'bootstrap', 'Ruby'],

    live: '',
    source: '',
  },
  second: {
    name: 'Second Project',
    desc: `second project description <br> Lorem Ipsum is simply.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: '../images/Snapshoot Portfolio.png',
    techs: ['html', 'Bootstrap', 'Ruby'],
    live: '"',
    sourse: '',
  },
  third: {
    name: 'Third project',
    desc: `Third project description <br> Lorem Ipsum is simply. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image:
      '../images/Snapshoot Portfolio.png',
    techs: ['html', 'Bootstrap', 'Ruby'],
    live: '',
    source: '',
  },
  fourth: {
    name: 'Fourth Project',
    desc: `Fourth project description <br> 
           Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image:
      '../images/Snapshoot Portfolio.png',
    techs: ['html', 'Bootstrap', 'Ruby'],
    live: '',
    source: '',
  },
  fifth: {
    name: 'Fifth Project',
    desc: `Fifth project description <br> Lorem Ipsum is simply. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image:
      '../images/Snapshoot Portfolio.png',
    techs: ['html', 'Bootstrap', 'Ruby'],
    live: '',
    source: '',
  },
  sixth: {
    name: 'Sixth Project',
    desc: `Sixth project description <br> Lorem Ipsum is simply. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image:
      '../images/Snapshoot Portfolio.png',
    techs: ['html', 'Bootstrap', 'Ruby'],
    live: '',
    source: '',
  },
};

const workCards = document.querySelector('.workCards');

function openPopup(proName) {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects[proName].name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects[proName].techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects[proName].image;
  document.getElementById('popupDesc').innerText = projects[proName].desc;
  document.getElementById('livelink').href = projects[proName].live;
  document.getElementById('sourcelink').href = projects[proName].source;
  document.querySelector('.popup').classList.remove('expand');
}

function addProject(proName) {
  const workCard = document.createElement('div');
  const workCardContent = document.createElement('div');
  const workTitle = document.createElement('h3');
  const workDesc = document.createElement('p');
  const usedTechs = document.createElement('ul');
  const myButton = document.createElement('button');

  workCard.classList.add('workCard');
  workCard.tabIndex = '0';

  workCardContent.classList.add('workCardContent');

  workTitle.classList.add('recentWorkTitle', 'wc');
  workTitle.innerHTML = projects[proName].name;

  workDesc.classList.add('recentWorkDesc', 'wc');
  workDesc.innerText = projects[proName].desc;

  usedTechs.classList.add('usedTechs', 'wc');
  let li;
  projects[proName].techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech', 'twc');
    usedTechs.appendChild(li);
  });
  workCardContent.appendChild(workTitle);
  workCardContent.appendChild(workDesc);
  workCardContent.appendChild(usedTechs);

  myButton.classList.add('mybtn', 'spwc');
  myButton.type = 'button';
  myButton.innerHTML = 'See Project';
  myButton.addEventListener('click', () => {
    openPopup(proName);
  });

  workCard.appendChild(workCardContent);
  workCard.appendChild(myButton);

  workCards.appendChild(workCard);
}

Object.keys(projects).forEach((key) => {
  addProject(key);
});

document.querySelector('.closebutn').addEventListener('click', () => {
  document.querySelector('.container').style.overflow = 'auto';
  document.querySelector('.popup').classList.add('expand');
});
