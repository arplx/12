const newsContainer = document.getElementById('news-container');

fetch('https://arplx.github.io/12/i/news/news.json')
  .then(response => response.json())
  .then(news => {
    news.forEach(n => {
      const nElement = document.createElement('div');
      nElement.classList.add('trends');
      nElement.innerHTML = `
          <p class="trending-heading">${n.name}</p>
          <p class="trending-text">${n.hastag}</p>
          <p class="trending-heading">${n.numberposts}</p>
      `;
      newsContainer.appendChild(nElement);
    });
  })
  .catch(error => console.error('Error fetching news:', error));
