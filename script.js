const speakerWrapper = document.getElementById('speaker-wrapper');
const hambarButton = document.querySelector('.hambar');

// Popup
const closeButton = document.querySelector('.cross-btn');
const hambarSection = document.querySelector('.ham-popup');
function showMenu() {
  hambarSection.style.display = 'flex';
}
function hideMenu() {
  hambarSection.style.display = 'none';
}
hambarButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
// Popup

const featuredSpeakers = [
  {
    speakerImg: './assets/images/sheikh-didu.png',
    speakerName: 'Shayekh Mohammad Al-Hasan Al-Dido',
    designition:
      'President of Olama Information center, Abdallah ibn Yasin University',
    achievement:
      'Licenses in Hadith to teach Sahih al-Bukhari, Sahih Muslim, Sunan ibn Majah and many more.',
  },
  {
    speakerImg: './assets/images/bilal-philips.png',
    speakerName: 'Bilal Philips',
    designition: 'founder and chancellor of the International Open University',
    achievement:
      'Written, translated and commented on over 50 Islamic books.',
  },
  {
    speakerImg: './assets/images/dr-zakir.png',
    speakerName: 'Dr. Zakir Naik',
    designition:
      'Founder and president of IRF and Peace TV Network.',
    achievement:
      'Saudi Arabia’s highest honour King Faisal International Prize 2015. ',
  },
  {
    speakerImg: './assets/images/abdur-raheem.jpg',
    speakerName: 'Abdur Raheem Green',
    designition:
      'Chairman of iERA.',
    achievement:
      'CFO iERA and advocate for Islamic education and interfaith dialogue.',
  },
  {
    speakerImg: './assets/images/yusuf-estes.jpg',
    speakerName: 'Yusuf Estes',
    designition: 'Speaker and Preacher',
    achievement:
      'Globally recognized Islamic Scholar.',
  },
  {
    speakerImg: './assets/images/mizanur-rahman.jpg',
    speakerName: 'Mizanur Rahman Azhari',
    designition: 'Islamic Scholar and Preacher',
    achievement:
      'Earned title of “Azhari” after completing PHD in Islam from Al Azhar University, Kairo, Egypt.',
  },
];

featuredSpeakers.forEach((speaker) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('speaker', 'col-md-6');
  newDiv.innerHTML = `
          <img src="${speaker.speakerImg}" alt="">
          <div class="speaker-details">
            <div class="speakername-wrap">
              <h3>${speaker.speakerName}</h3>
            </div>
            <div class="designition-wrap">
              <p class="designition">${speaker.designition}</p>
            </div> 
            <div class="speaker-border"></div>
            <div class="speakerwork-wrap">
              <p class="speaker-work">${speaker.achievement}</p>
            </div>
          </div>`;
  speakerWrapper.append(newDiv);
});
