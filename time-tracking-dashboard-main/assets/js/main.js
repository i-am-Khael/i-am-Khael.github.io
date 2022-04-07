
// wtf, right? hahah
const btns = document.querySelectorAll('.btn');
const workTitle = document.querySelector('div.work-title h6');
const playTitle = document.querySelector('div.play-title h6');
const studyTitle = document.querySelector('div.study-title h6');
const exerciseTitle = document.querySelector('div.exercise-title h6');
const socialTitle = document.querySelector('div.social-title h6');
const selfCareTitle = document.querySelector('div.self-care-title h6');

const workTimeH2 = document.querySelector('div.work-time h2');
const playTimeH2 = document.querySelector('div.play-time h2');
const studyTimeH2 = document.querySelector('div.study-time h2');
const exerciseTimeH2 = document.querySelector('div.exercise-time h2');
const socialTimeH2 = document.querySelector('div.social-time h2');
const selfCareTimeH2 = document.querySelector('div.self-care-time h2');

const workTimeSpan = document.querySelector('div.work-time span');
const playTimeSpan = document.querySelector('div.play-time span');
const studyTimeSpan = document.querySelector('div.study-time span');
const exerciseTimeSpan = document.querySelector('div.exercise-time span');
const socialTimeSpan = document.querySelector('div.social-time span');
const selfCareTimeSpan = document.querySelector('div.self-care-time span');


// is this cheating? hahah!
// i have a problem fetching data.json file locally, CORS is the cuplrit. So i think an alternative way.

const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const removeActiveClass = () => {
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
}

const daily = () => {

  removeActiveClass();
  btns[0].classList.add('active');

  workTitle.textContent = `${data[0].title}`;
  playTitle.textContent = `${data[1].title}`;
  studyTitle.textContent = `${data[2].title}`;
  exerciseTitle.textContent = `${data[3].title}`;
  socialTitle.textContent = `${data[4].title}`;
  selfCareTitle.textContent = `${data[5].title}`;

  workTimeH2.textContent = `${data[0].timeframes.daily.current}hrs`;
  workTimeSpan.textContent = `Previous - ${data[0].timeframes.daily.previous}hrs`;

  playTimeH2.textContent = `${data[1].timeframes.daily.current}hrs`;
  playTimeSpan.textContent = `Previous - ${data[1].timeframes.daily.previous}hrs`;

  studyTimeH2.textContent = `${data[2].timeframes.daily.current}hrs`;
  studyTimeSpan.textContent = `Previous - ${data[2].timeframes.daily.previous}hrs`;

  exerciseTimeH2.textContent = `${data[3].timeframes.daily.current}hrs`;
  exerciseTimeSpan.textContent = `Previous - ${data[3].timeframes.daily.previous}hrs`;

  socialTimeH2.textContent = `${data[4].timeframes.daily.current}hrs`;
  socialTimeSpan.textContent = `Previous - ${data[4].timeframes.daily.previous}hrs`;

  selfCareTimeH2.textContent = `${data[5].timeframes.daily.current}hrs`;
  selfCareTimeSpan.textContent = `Previous - ${data[5].timeframes.daily.previous}hrs`;
  
}

const weekly = () => {

  removeActiveClass();
  btns[1].classList.add('active');
  workTitle.textContent = `${data[0].title}`;

  workTimeH2.textContent = `${data[0].timeframes.weekly.current}hrs`;
  workTimeSpan.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
  
  playTimeH2.textContent = `${data[1].timeframes.weekly.current}hrs`;
  playTimeSpan.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
  
  studyTimeH2.textContent = `${data[2].timeframes.weekly.current}hrs`;
  studyTimeSpan.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
  
  exerciseTimeH2.textContent = `${data[3].timeframes.weekly.current}hrs`;
  exerciseTimeSpan.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
  
  socialTimeH2.textContent = `${data[4].timeframes.weekly.current}hrs`;
  socialTimeSpan.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
  
  selfCareTimeH2.textContent = `${data[5].timeframes.weekly.current}hrs`;
  selfCareTimeSpan.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
  
}

const monthly = () => {
  
  removeActiveClass();
  btns[2].classList.add('active');
  workTitle.textContent = `${data[0].title}`;
  
  workTimeH2.textContent = `${data[0].timeframes.monthly.current}hrs`;
  workTimeSpan.textContent = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
  
  playTimeH2.textContent = `${data[1].timeframes.monthly.current}hrs`;
  playTimeSpan.textContent = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
  
  studyTimeH2.textContent = `${data[2].timeframes.monthly.current}hrs`;
  studyTimeSpan.textContent = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
  
  exerciseTimeH2.textContent = `${data[3].timeframes.monthly.current}hrs`;
  exerciseTimeSpan.textContent = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
  
  socialTimeH2.textContent = `${data[4].timeframes.monthly.current}hrs`;
  socialTimeSpan.textContent = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
  
  selfCareTimeH2.textContent = `${data[5].timeframes.monthly.current}hrs`;
  selfCareTimeSpan.textContent = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
  
}

btns[0].addEventListener('click', daily);
btns[1].addEventListener('click', weekly);
btns[2].addEventListener('click', monthly);

if(btns[0].classList.contains('active')) {
  daily();
}
