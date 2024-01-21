const newsContainer = document.getElementById('news-container');

fetch('https://arplx.github.io/12/i/news/news.json')
  .then(response => response.json())
  .then(news => {
    news.forEach(news => {
      const trendElement = document.createElement('div');
      newsElement.classList.add('news');
      newsElement.innerHTML = `
          <p class="trending-heading">${news.name}</p>
          <p class="trending-text">${news.hastag}</p>
          <p class="trending-heading">${news.numberposts}</p>
      `;
      newsContainer.appendChild(newsElement);
    });
  })
  .catch(error => console.error('Error fetching news:', error));
