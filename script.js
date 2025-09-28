const products = [
  { name: "iPhone 14", price: "₹1,29,000", category: "Electronics", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlFXOEB0FH1bGuSpI4Tixi5rFt_ZsoJDqWk4_oYh3gsy99vNhudKeI6tOR3533wnB7P4o5WlMavX25B1PQ4L439XaE4z7qZB99jLnOAH8&usqp=CAc" },
  { name: "Nike Shoes", price: "₹5,999", category: "Fashion", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/909028ed-6e94-4b69-886e-228957cf79f7/NIKE+PACIFIC.png" },
  { name: "Wooden Table", price: "₹7,999", category: "Home", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SKyYjwLqDeZe9LR0tJP9LMgDp0hK1DHsMw&s"},
  { name: "Smartwatch", price: "₹3,999", category: "Electronics", img: "https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp" },
  { name: "Treadmill", price: "₹25,000", category: "Sports", img: "https://www.maxprofitness.in/cdn/shop/files/treadmillforhome.jpg?v=1703655760" },
  
  { name: "LED Lamp", price: "₹799", category: "Electronics", img: "https://rukminim2.flixcart.com/image/480/480/xif0q/table-lamp/6/b/r/touch-control-multifunctional-led-lamp-with-eye-protect-mobile-original-imah6g7t3rkmjfuv.jpeg?q=90" },
  { name: "FAN", price: "₹1200", category: "Electronics", img: "https://d3vpmhw8imxmio.cloudfront.net/product-variants/1500000161/1500000161/1733829908141-2174-650x650.webp" },
  
  { name: "BOOK", price: "₹499", category: "Home", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzTTpLLgl0Yz5jm2FobQjISVOMlzHt2Ka0w&s"},
  { name: "Baby Sebamed", price: "₹550", category: "Beauty", img: "https://m.media-amazon.com/images/I/41Ptld1L0kL._SX522_.jpg"},
  { name: "Lizol Disinfectant ", price: "₹745", category: "Home", img: "https://m.media-amazon.com/images/I/71-pg4x-YKL._SX679_.jpg"},
  { name: "Handbag", price: "₹650", category: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1H5aTVbyk7jWQ1ya-tHQ4HrmgYqyNlJPWCA&s"},
  { name: "Sport-Tshirt", price: "₹450", category: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9A4bewEVQjNUvR-BUbSdAvR9pUhrTYHHqQ&s"},
  { name: "Boat Airdopes", price: "₹1200", category: "Electronic", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiawWLbJ1aCqONnLA2IZtbV8ytepi3OuA5sw&s"},
  { name: "Samsung S24", price: "₹51000", category: "Electronic", img: "https://www.91-img.com/gallery_images_uploads/f/f/ff3dde080a71191a059e110044e2233d515bc4ab.jpg?tr=h-271,c-at_max,q-70,pr-true"},
  { name: "Cetaphil Baby Daily", price: "₹1400", category: "Baby", img: "https://m.media-amazon.com/images/I/5177+ClbjmL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg"},
  { name: "CAP", price: "₹799", category: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTuEA_zJ-SAnCxi2FwkQ6sbl32B4cc1TZXA&s"},
  { name: "Halo Glow Liquid Filter", price: "₹1400", category: "Beauty", img: "https://m.media-amazon.com/images/I/61FYeDYHfFL._SX522_.jpg"},
  { name: "BAT", price: "₹399", category: "Sports", img: "https://m.media-amazon.com/images/I/71A-nhrqc0L._SX679_.jpg"},
  { name: " Jaspo-BALL", price: "₹799", category: "Sports", img: "https://m.media-amazon.com/images/I/71igfi8ibJL._SX679_.jpg"},
  { name: "Nivia-FootBall", price: "₹799", category: "Home", img: "https://m.media-amazon.com/images/I/412yZNfnbVL._SY300_SX300_QL70_FMwebp_.jpg"},
];


let cartCount = 0;

const productList = document.getElementById('product-list');
const cartCountDisplay = document.getElementById('cart-count');

function displayProducts(productArray) {
  productList.innerHTML = '';
  productArray.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === 'All') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function addToCart() {
  cartCount++;
  cartCountDisplay.textContent = cartCount;
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}
function openModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Simulate login
  localStorage.setItem("loggedInUser", username);
  alert("Login successful. Welcome, " + username);
  closeModal();
  updateLoginStatus();
}

function updateLoginStatus() {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    const loginLink = document.getElementById("login-link");
    if (loginLink) {
      loginLink.textContent = `Hi, ${user}`;
      loginLink.removeAttribute("onclick");
    }
  }
}

window.onload = updateLoginStatus;






// Initial display
displayProducts(products);


