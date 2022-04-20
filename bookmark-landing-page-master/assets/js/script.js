
const navDesktop = document.querySelector('nav.nav-desktop');
const navMobile = document.querySelector('nav.nav-mobile');
const menu = document.querySelector('div.menu');
const closeMenu = document.querySelector('div.close');

menu.addEventListener('click', () => {
  
  navDesktop.style = 'display: none';
  navMobile.style = 'display: block';
  
});

closeMenu.addEventListener('click', () => {
  
  navMobile.style = 'display: none';
  navDesktop.style = 'display: block';
  
});

// tabs script
const tabs = document.querySelectorAll('button.btn-tabs');
const simpleTab = document.querySelector('div.tab-simple-container');
const speadyTab = document.querySelector('div.tab-speady-container');
const easyTab = document.querySelector('div.tab-easy-container');

const removeActiveClass = () => {
  
  tabs.forEach(tab => {
    
    tab.classList.remove('active');
    
  });
  
}

const simpleContent = () => {
  
  removeActiveClass();
  tabs[0].classList.add('active');
  simpleTab.style = 'display: block;';
  speadyTab.style = 'display: none;';
  easyTab.style = 'display: none;';
  
}

const speadyContent = () => {
  
  removeActiveClass();
  tabs[1].classList.add('active');
  speadyTab.style = 'display: block';
  simpleTab.style = 'display: none';
  easyTab.style = 'display: none';
  
}

const easyContent = () => {
  
  removeActiveClass();
  tabs[2].classList.add('active');
  easyTab.style = 'display: block';
  simpleTab.style = 'display: none';
  speadyTab.style = 'display: none';
  
}

simpleContent();

tabs[0].addEventListener('click', simpleContent);
tabs[1].addEventListener('click', speadyContent);
tabs[2].addEventListener('click', easyContent);

// FAQ Script
const faqBTN = document.querySelectorAll('.faq-btn');
const faqIcon = document.querySelectorAll('.faq-btn i');
const faqANS = document.querySelectorAll('.faq-answer');

const answerOne = () => {
  
  faqIcon[0].classList.toggle('fa-angle-down');
  faqIcon[0].classList.toggle('fa-angle-up');
  faqIcon[0].classList.toggle('active');
  faqANS[0].classList.toggle('active');
  
}

const answerTwo = () => {
  
  faqIcon[1].classList.toggle('fa-angle-down');
  faqIcon[1].classList.toggle('fa-angle-up');
  faqANS[1].classList.toggle('active');
  faqIcon[1].classList.toggle('active');
  
}

const answerThree = () => {
  
  faqIcon[2].classList.toggle('fa-angle-down');
  faqIcon[2].classList.toggle('fa-angle-up');
  faqANS[2].classList.toggle('active');
  faqIcon[2].classList.toggle('active');
  
}

const answerFour = () => {
  
  faqIcon[3].classList.toggle('fa-angle-down');
  faqIcon[3].classList.toggle('fa-angle-up');
  faqANS[3].classList.toggle('active');
  faqIcon[3].classList.toggle('active');

}

faqBTN[0].addEventListener('click', answerOne);
faqBTN[1].addEventListener('click', answerTwo);
faqBTN[2].addEventListener('click', answerThree);
faqBTN[3].addEventListener('click', answerFour);

// Contact Us Script
const emailInput = document.querySelector('input#email');
const btnEmail = document.querySelector('button#btnEmail');
const smallError = document.querySelector('div.email-container small');

const checkEml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = () => {
  
  if (emailInput.value.toLowerCase().match(checkEml)) {

    emailInput.value = 'EMAIL IS VALID, NICE!';
    
  } else {
    
    emailInput.classList.add('error');
    smallError.classList.add('error');
    
    setTimeout(() => {
      emailInput.classList.remove('error');
      smallError.classList.remove('error');
    }, 700);

  }

}

emailInput.addEventListener('keypress', trigger => {

  if( trigger.key === 'Enter' ) {

    checkEmail();
  
  }

});

btnEmail.addEventListener('click', checkEmail);







