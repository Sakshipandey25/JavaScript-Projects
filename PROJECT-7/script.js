// ===== STATE =====
let products = JSON.parse(localStorage.getItem("products") || "[]");
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let previousPage = "view";

// Ensure all cart items have qty
cart = cart.map(item => ({ ...item, qty: item.qty || 1 }));
saveCart();

// ===== STORAGE =====
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function totalCartItems() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn:not(.cart-btn)').forEach(b => b.classList.remove('active'));

    const pageMap = { add: 'addPage', view: 'viewPage', cart: 'cartPage', detail: 'detailPage' };
    const btnMap  = { add: 'btnAdd', view: 'btnView' };

    const el = document.getElementById(pageMap[page]);
    if (el) el.classList.add('active');
    if (btnMap[page]) document.getElementById(btnMap[page]).classList.add('active');

    if (page === 'view') renderProducts();
    if (page === 'cart') renderCart();
}

// ===== IMAGE PREVIEW =====
function preview() {
    const url = document.getElementById("image").value.trim();
    const img = document.getElementById("preview");
    const ph  = document.getElementById("previewPlaceholder");

    if (url) {
        img.src = url;
        img.style.display = "block";
        ph.style.display  = "none";
    } else {
        img.style.display = "none";
        ph.style.display  = "";
    }
}

// ===== ADD PRODUCT =====
function addProduct() {
    const name  = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value.trim();
    const image = document.getElementById("image").value.trim();

    if (!name || !price) {
        showToast("⚠️", "Please fill all fields!");
        return;
    }

    products.push({ id: Date.now(), name, price: parseFloat(price), image });
    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("name").value  = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    preview();

    showToast("✅", `${name} added!`);
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const container = document.getElementById("products");
    const search    = document.getElementById("search").value.toLowerCase();

    const filtered = products.filter(p =>
        p.name
    );

    const statsBar = document.getElementById("statsBar");
    statsBar.style.display = "flex";
    const total = products.reduce((s, p) => s + p.price, 0);

    statsBar.innerHTML = `
        <div class="stat-pill">🛍️ <strong>${products.length}</strong> Products</div>
        <div class="stat-pill">🔍 <strong>${filtered.length}</strong> Shown</div>
        <div class="stat-pill">💰 Avg ₹<strong>${products.length ? Math.round(total / products.length) : 0}</strong></div>
    `;

    if (!filtered.length) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📭</span>
                ${products.length ? "No results found" : "No products yet — add one!"}
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-img-wrap">
                ${p.image
                    ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem">🛒</span>`
                    : '<span>🛒</span>'}
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
                <div class="product-actions">
                    <button class="btn-view" onclick="viewProduct(${p.id})">👁 View</button>
                    <button class="btn-cart" onclick="addToCart(${p.id});event.stopPropagation()">＋ Add</button>
                </div>
            </div>
        </div>
    `).join("");
}

// ===== VIEW PRODUCT (opens detail "page") =====
function viewProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    previousPage = "view";

    const detail = document.getElementById("detailContent");
    detail.innerHTML = `
        <div class="detail-card">
            <div class="detail-img-wrap">
                ${p.image
                    ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.innerHTML='🛒'">`
                    : '🛒'}
            </div>
            <div class="detail-info">
                <div class="detail-badge">✨ Featured Product</div>
                <div class="detail-name">${p.name}</div>
                <div class="detail-price">₹${p.price.toLocaleString('en-IN')}</div>
                <div class="detail-actions">
                    <button class="detail-add-btn" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    showPage('detail');
}

// ===== GO BACK =====
function goBack() {
    showPage(previousPage);
}

// ===== CART =====
function addToCart(id) {
    const p        = products.find(x => x.id === id);
    const existing = cart.find(x => x.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...p, qty: 1 });
    }

    saveCart();
    updateCartCount();
    showToast("🛒", `${p.name} added to cart!`);
}

function increaseQty(id) {
    const item = cart.find(x => x.id === id);
    if (item) { item.qty++; saveCart(); renderCart(); updateCartCount(); }
}

function decreaseQty(id) {
    const item = cart.find(x => x.id === id);
    if (item && item.qty > 1) { item.qty--; saveCart(); renderCart(); updateCartCount(); }
}

function deleteItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    updateCartCount();
    showToast("🗑️", "Item removed");
}

function renderCart() {
    const container = document.getElementById("cartItems");

    if (!cart.length) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🛒</span>
                Your cart is empty
            </div>`;
        return;
    }

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            ${item.image
                ? `<img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.outerHTML='<div class=\\'cart-item-img\\' style=\\'display:flex;align-items:center;justify-content:center;font-size:1.8rem\\'>🛒</div>'">`
                : `<div class="cart-item-img" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>`}
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} each</div>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="decreaseQty(${item.id})">−</button>
                <span class="qty-count">${item.qty}</span>
                <button class="qty-btn" onclick="increaseQty(${item.id})">＋</button>
            </div>
            <div class="item-total">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
            <button class="del-btn" onclick="deleteItem(${item.id})">🗑</button>
        </div>
    `).join("") + `
        <div class="cart-total">
            <div>
                <div class="cart-total-label">Total (${totalCartItems()} items)</div>
                <div class="cart-total-amount">₹${total.toLocaleString('en-IN')}</div>
            </div>
            <button class="checkout-btn" onclick="showToast('🎉','Order placed! Thank you!')">Checkout →</button>
        </div>
    `;
}

function updateCartCount() {
    document.getElementById("cartCount").textContent = totalCartItems();
}

// ===== MODAL =====
function handleModalClick(event) {
    if (event.target === document.getElementById("modal")) {
        closeModal();
    }
}

function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

// ===== TOAST =====
function showToast(icon, msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toastIcon").textContent = icon;
    document.getElementById("toastMsg").textContent  = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===== INIT =====
updateCartCount();