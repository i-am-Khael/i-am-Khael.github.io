
const btns = document.querySelectorAll('.btn');
const rating = document.querySelector('.rating');
const btnSubmit = document.querySelector('.btnSubmit');
const interactiveRating = document.querySelector('section.interactiveRating');
const container = document.querySelector('div.container');

const removeActiveClass = () => {

  btns.forEach(btn => {

    btn.classList.remove('active');

  });

}

btns.forEach((btn, index) => {
  
  const rate = index + 1;
  
  btn.addEventListener('click', (e) => {
    
    removeActiveClass();

    e.currentTarget.classList.add('active');

    btnSubmit.addEventListener('click', () => {

      rating.textContent = `You selected ${rate} out of 5`;
      interactiveRating.style = 'display: none';
      container.style = 'display: block';

    });

  });

});
