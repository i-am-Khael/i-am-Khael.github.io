
const toggleButton = document.querySelector('.toggleButton');
const toggleSwitch = document.querySelector('.toggleSwitch');
const pricing = document.querySelectorAll('.pricing');

toggleButton.addEventListener('click', () => {

  toggleSwitch.classList.toggle('active');
  
  if (toggleSwitch.classList.contains('active')) {
  
    pricing[0].textContent = '$199.99';
    pricing[1].textContent = '$249.99';
    pricing[2].textContent = '$399.99';
    
  } else {
    
    pricing[0].textContent = '$19.99';
    pricing[1].textContent = '$24.99';
    pricing[2].textContent = '$39.99';

  }

});



