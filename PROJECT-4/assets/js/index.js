let products = [

    {
        id: 1,
        name: "Blue Dress For Woman",
        price: 45,
        oldPrice: 55.25,
        discount: "35% Off",
        rating: "★★★★★",
        reviews: 21,
        image: "./assets/images/product_img1.jpg.jpeg"
    },

    {
        id: 2,
        name: "Leather Gray Tuxedo",
        price: 55,
        oldPrice: 95,
        discount: "25% Off",
        rating: "★★★★☆",
        reviews: 15,
        image: "./assets/images/product_img2.jpg.jpeg"
    },

    {
        id: 3,
        name: "Woman Full Sliv Dress",
        price: 68,
        oldPrice: 99,
        discount: "",
        rating: "★★★★★",
        reviews: 25,
        image: "./assets/images/product_img3.jpg.jpeg"
    },

    {
        id: 4,
        name: "Blue Casual Check Shirt",
        price: 55,
        oldPrice: 95,
        discount: "25% Off",
        rating: "★★★★☆",
        reviews: 15,
        image: "./assets/images/product_img4.jpg.jpeg"
    },

    {
        id: 5,
        name: "White Black Line Dress",
        price: 68,
        oldPrice: 99,
        discount: "20% Off",
        rating: "★★★★★",
        reviews: 25,
        image: "./assets/images/product_img5.jpg.jpeg"
    },

    {
        id: 6,
        name: "Men Blue Jins Shirt",
        price: 69,
        oldPrice: 89,
        discount: "20% Off",
        rating: "★★★★☆",
        reviews: 22,
        image: "./assets/images/product_img6.jpg.jpeg"
    },

    {
        id: 7,
        name: "Black T-Shirt For Woman",
        price: 69,
        oldPrice: 89,
        discount: "20% Off",
        rating: "★★★★☆",
        reviews: 22,
        image: "./assets/images/product_img7.jpg.jpeg"
    },

    {
        id: 8,
        name: "Red & Black Check Shirt",
        price: 55,
        oldPrice: 95,
        discount: "25% Off",
        rating: "★★★★☆",
        reviews: 15,
        image: "./assets/images/product_img8.jpg.jpeg"
    },

    {
        id: 9,
        name: "Pink Dress For Woman",
        price: 65,
        oldPrice: 80,
        discount: "30% Off",
        rating: "★★★★★",
        reviews: 28,
        image: "./assets/images/product_img9.jpg.jpeg"
    }

];


const container = document.getElementById("productContainer");


products.forEach((product) => {
    container.innerHTML += `
    <div class="col-lg-4 col-md-6">
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            
            <div class="product-info">
                <h6>${product.name}</h6>

                <div class="d-flex align-items-center mb-2">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
                    <span class="discount">${product.discount}</span>
                </div>

                <div class="rating">
                    ${product.rating} 
                    <span class="review-count">(${product.reviews})</span>
                </div>
            </div>
        </div>
    </div>`;
});