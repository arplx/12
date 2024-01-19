const trendsContainer = document.getElementById('trends-container');

fetch('https://arplx.github.io/12/i/trends/trends.json')
  .then(response => response.json())
  .then(trends => {
    trends.forEach(trend => {
      const trendElement = document.createElement('div');
      trendElement.classList.add('trends');
      trendElement.innerHTML = `
       <img class="profilepicture" src="${trends.profilepicture}" alt="${trends.name}" style="width: 35px;height: 35px;object-fit: cover;object-position: top;border-radius: 3px;">
        <a class="product-tittle" href="${trends.url} target=" _blank"="" style="font-size: 60%;text-decoration: none;color: white;padding-bottom: 0px;margin-bottom: auto;display: flex;margin-top: -42px;margin-left: 40px;">
          <h2 style="margin-bottom: 0px;">${trends.name}</h2>
        </a>
        <a class="location" href="${trends.locationurl}" _blank"="" style="font-size: 100px;text-decoration: none;color: white;margin-left: 40px;display: flex;margin-top: -2px;">
          <h2 style="opacity: 80%;font-size: 10px;padding: 0px;margin: 0px;">${trends.location}</h2>
        </a>
        <a class="timestamp" href="${trends.timestamp}" _blank"="" style="font-size: 100px;text-decoration: none;color: white;margin-left: 40px;display: flex;margin-bottom: 5px;">
          <h2 style="opacity: 80%;font-size: 10px;padding: 0px;margin: 0px;">${trends.time}</h2>
        </a>
        <img src="${trends.image}" style="border-radius: 10px;box-sizing: border-box;width: -moz-available;object-fit: cover;object-position: top;height: 10%;">
        <p>${trends.description}</p>
        <a <button="" href="${trends.url} type=" button"="" style="padding: 0px;text-decoration: none;color: white;text-align: center;display: inline-flex;margin-top: auto;">
           <img alt="Image description" style="height: 30px;padding-right: 5px;margin-top: 17px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 100%;display: flex;margin-left: ;margin-top: 23px;font-weight: 600;font-size: 15px;"> ${trends.likes} </p></a>

        <a <button="" href="${trends.url}  type=" button"="" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;margin-top: -27px;display: inline-flex;">
           <img alt="Image description" style="height: 30px;margin-left: auto;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 100%;display: flex;margin-left: 5px;margin-top: 7px;font-weight: 600;"> ${trends.likes} </p></a>

        <a <button="" href="${trends.url}   type=" button"="" style="height: 45px;padding: 0px;text-decoration: none;color: white;text-align: center;display: inline-flex;margin-left: auto;margin-top: -45px;">
           <img alt="Image description" style="height: 30px;" src="https://i.postimg.cc/fbgg9FHp/ariaplus-blue-square-full-back1.jpg"> <p class="like-number" style="padding: 0px;margin: 0px;width: 100%;display: flex;margin-left: 5px;margin-top: 7px;font-weight: 600;"> ${trends.likes} </p></a>
      `;
      trendsContainer.appendChild(trendElement);
    });
  })
  .catch(error => console.error('Error fetching trends:', error));
