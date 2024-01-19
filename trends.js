const trends = document.getElementById('trends-container');

fetch('trends.json')
  .then(response => response.json())
  .then(trends => {
    trends.forEach(trends => {
      const trendsElement = document.createElement('div');
      trendsElement.classList.add('trends');
      trendsElement.innerHTML = `
      <div class="trending-box">
          <p class="trending-heading">${trends.category}</p>
          <p class="trending-text">${trends.hashtag}</p>
          <p class="trending-heading">${trends.postnumber}</p>
        </div>
                
         `;
      trends.appendChild(trendsElement);
    });
  })
  .catch(error => console.error('Error fetching trends:', error));
