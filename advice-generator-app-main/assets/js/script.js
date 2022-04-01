
const adviceNum = document.querySelector('#adviceNum');
const advice = document.querySelector('#advice');
const btn = document.querySelector('#btn');
const divPattern = document.querySelector('#divPattern');
let width = document.body.clientWidth;

(() => {

  fetch(`https://api.adviceslip.com/advice/1`)
  .then(response => response.json())
  .then(data => {
    
    adviceNum.textContent = `ADVICE #${data.slip.id}`;
    advice.textContent = `"${data.slip.advice}"`;
    
  }).catch(error => console.log(`An Error occured: ${error}`));
  
})()


const fetchAdvice = () => {
  
  let num = Math.floor(Math.random() * 225);
  
  fetch(`https://api.adviceslip.com/advice/${num}`)
  .then(response => response.json())
  .then(data => {
    
    adviceNum.textContent = `ADVICE #${data.slip.id}`;
    advice.textContent = `"${data.slip.advice}"`;
    
  }).catch(error => console.log(`An Error occured: ${error}`));

}
  
btn.addEventListener('click', fetchAdvice);
