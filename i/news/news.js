const newsContainer = document.getElementById('news-container');

fetch('https://arplx.github.io/12/i/news/news.json')
  .then(response => response.json())
  .then(news => {
    news.forEach(n => {
      const nElement = document.createElement('div');
      nElement.classList.add('news');
      nElement.innerHTML = `
          <a href="${n.publisherurl}" class="trending-heading" style="display: flex;margin-top: 10px;font-family: helvetica;text-decoration: none;color: white;opacity: 50%;font-size: 14px;">${n.publisher}</a>
          <a href="${n.url}" class="trending-text" style="display: flex;font-family: helvetica;text-decoration: none;color: white;font-weight: 500;font-size: 16px;margin-top: 5px;margin-bottom: auto;width: 60%;">${n.headline}</a>
          <p class="trending-heading" style="margin-top: 7px;">${n.numberposts}</p>
      `;
      newsContainer.appendChild(nElement);
    });
  })
  .catch(error => console.error('Error fetching news:', error));
