
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const label = document.querySelectorAll('p');

let lat = 0, lng = 0;
let map = L.map('map-result');

const ipAddress = async () => {
  
  const value = searchInput.value;
  
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_TD8ibL4egCSZYhSZ6kFWuBdYFHWmG&ipAddress=${value}&domain=${value}`;
  
  await fetch(url)
      .then(response => response.json())
      .then(data => {
        
        label[0].textContent = `${data.ip}`;
        label[1].textContent = `${data.location.region} ${data.location.city} ${data.location.postalCode}`;
        label[2].textContent = `UTC ${data.location.timezone}`;
        label[3].textContent = `${data.isp}`;
        lat = `${data.location.lat}`;
        lng = `${data.location.lng}`;        
        
      })
      .catch(error => console.log(`An error occured: ${error}`));
      
  map.setView([lat, lng], 10);
    
  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=OiS2W2371uYq1Bo2M6i5', {
    
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    
  }).addTo(map);
  
  L.marker([lat, lng]).addTo(map);
      
}

ipAddress();

searchInput.addEventListener('keypress', (trigger) => {
  
  if (trigger.key === 'Enter') {

    ipAddress();

  }

})

searchBtn.addEventListener('click', ipAddress);
