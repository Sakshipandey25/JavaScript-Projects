let products = [
  {
    id: 1,
    name: "Vichy Liftactiv Nuit Cream",
    price: 61.06,
    oldPrice: 69.00,
    discount: "8% off",
    rating: 5.0,
    reviews: 5,
    image: src = "./assets/image/Product9.webp"
  },

  {
    id: 2,
    name: "Sphygmomanometer",
    price: 61.10,
    oldPrice: 65.00,
    discount: "6% off",
    rating: 5.0,
    reviews: 5,
    image: src = "./assets/image/Product2.webp"
  },

  {
    id: 3,
    name: "Fresh Strawberry",
    price: 16.04,
    oldPrice: 18.00,
    discount: "11% off",
    rating: 3.0,
    reviews: 3,
    image: src = "./assets/image/Product3.webp"
  },

  {
    id: 4,
    name: "Nivea Cream",
    price: 18.77,
    oldPrice: 21.00,
    discount: "11% off",
    rating: 4.0,
    reviews: 4,
    image: src = "./assets/image/Product4.webp"
  },

  {
    id: 5,
    name: "Vichy Liftactiv Nuit Cream (Tube)",
    price: 73.88,
    oldPrice: 85.00,
    discount: "13% off",
    rating: 5.0,
    reviews: 5,
    image: src = "./assets/image/Product5.webp"
  },

  {
    id: 6,
    name: "Blue Stethoscope",
    price: 50.15,
    oldPrice: 65.00,
    discount: "23% off",
    rating: 3.0,
    reviews: 3,
    image: src = "./assets/image/Product6.webp"
  },

  {
    id: 7,
    name: "Sphygmomanometer (Manual)",
    price: 53.36,
    oldPrice: 57.00,
    discount: "12% off",
    rating: 3.0,
    reviews: 3,
    image: src = "./assets/image/Product7.webp"
  },

  {
    id: 8,
    name: "Vichy Liftactiv Cream",
    price: 51.59,
    oldPrice: 57.00,
    discount: "7% off",
    rating: 3.0,
    reviews: 3,
    image: src = "./assets/image/Product8.webp"
  },

  {
    id: 9,
    name: "Nivea Cream Soft Milk",
    price: 15.65,
    oldPrice: 18.00,
    discount: "13% off",
    rating: 3.0,
    reviews: 3,
    image: src = "./assets/image/Product9.webp"
  },

   {
    id: 10,
    name: "Nivea Cream",
    price: 18.77,
    oldPrice: 21.00,
    discount: "11% off",
    rating: 4.0,
    reviews: 4,
    image: src = "./assets/image/Product4.webp"
  },

  {
    id: 11,
    name: "Vichy Liftactiv Nuit Cream (Tube)",
    price: 73.88,
    oldPrice: 85.00,
    discount: "13% off",
    rating: 5.0,
    reviews: 5,
    image: src = "./assets/image/Product5.webp"
  },

  {
    id: 12,
    name: "Blue Stethoscope",
    price: 50.15,
    oldPrice: 65.00,
    discount: "23% off",
    rating: 3.0,
    reviews: 3,
    image: src = "./assets/image/Product6.webp"
  },
];

products.forEach((products) => {
  document.getElementById("product-list").innerHTML += `
                <div class="col-3 ">
                    <div class="card">
                       <span class="badge rounded-pill text-bg-primary">${products.discount}</span>
                        <div>
                            <img src="${products.image}" alt="${products.name}" width="100%">
                        </div>
                        <hr class="fw-bold ">
                        <div class="ms-4">
                            <p class="fw-medium mb-0">${products.name}</p>
                                <span class="yellow-color">
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                </span>
                                <span>${products.reviews}</span> <br>
                                <span class="blue-color fw-medium">US$${products.price}</span>
                                <span class="fw-medium"><s>US$${products.oldPrice}</s></span>
                        </div>
                        <div class="ms-4 mt-2 mb-3">
                            <button class="btn btn-primary ps-5 pe-5 fw-bold">+ Add to Cart</button>
                            <button class="btn btn-primary fw-bold"><i class="ri-poker-hearts-line"></i></button>
                        </div>
                    </div>
                </div>
    `
})