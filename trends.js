fetch('trends.json')
  .then(response => response.json())
  .then(data => {
    const trendsContainer = document.getElementById('trends');

    data.forEach(trend => {
      const trendDiv = document.createElement('div');
      trendDiv.className = 'trend';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = trend.name;
      trendDiv.appendChild(nameSpan);

      const tweetVolumeSpan = document.createElement('span');
      tweetVolumeSpan.textContent = `Tweets: ${trend.tweet_volume}`;
      trendDiv.appendChild(tweetVolumeSpan);

      trendsContainer.appendChild(trendDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching trends:', error);
  });
