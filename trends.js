const productsContainer = document.getElementById('products-container');

fetch('trends.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
      <div class="trending-box">
          <p class="trending-heading">${product.category}</p>
          <p class="trending-text">${product.hashtag}</p>
          <p class="trending-heading">${product.postnumber}</p>
        </div>
       
         
         `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
