
const btns = document.querySelectorAll('.btn');
const rating = document.querySelector('.rating');
const btnSubmit = document.querySelector('.btnSubmit');
const interactiveRating = document.querySelector('section.interactiveRating');
const container = document.querySelector('div.container');


btns.forEach((btn, index) => {
  
  btn.addEventListener('click', () => {
    
    const rate = index + 1;

    btn.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn.style.color = 'var(--neutral-white)';
    
    btnSubmit.addEventListener('click', () => {

      interactiveRating.style = 'display: none';
      container.style = 'display: block';

      rating.textContent = `You selected ${rate} out of 5`;

    })

  });
    
});
