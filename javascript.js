// https://dummyjson.com/products

function generateProductCards(data, secondData) {
  const productContainer = document.getElementById("product-container");
  const firstContainer = document.getElementById("firstContainer");
  const secondContainer = document.getElementById("secondContainer");

  // iterate through the data and create a card for each product
  data.forEach((product) => {
    // create a card element
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Set the card content using the product data
    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" />
            <div class='iconSection'>
              <h2 class='title'>${product.title}</h2>
              <div><i class="far fa-bookmark"></i></div>
            </div>
            <div class='productPrice'>
            <p class='price'>$ ${product.price}</p>
            <button>ADD TO CART</button>
            </div>
        `;

    // append the card to the product container
    firstContainer.appendChild(card);
  });

  secondData.forEach((product) => {
    // create a card element
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Set the card content using the product data
    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" />
            <div class='iconSection'>
              <h2 class='title'>${product.title}</h2>
              <div><i class="far fa-bookmark"></i></div>
            </div>
            <div class='productPrice'>
            <p class='price'>$ ${product.price}</p>
            <button>ADD TO CART</button>
            </div>
        `;

    // append the card to the product container
    secondContainer.appendChild(card);
  });
}

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      // Get the first 8 products from the data
      const returnedData = data.products.slice(0, 4);
      const secondData = data.products.slice(5, 9);

      // call the function to generate cards
      generateProductCards(returnedData, secondData);
    });
}

fetchProducts();
