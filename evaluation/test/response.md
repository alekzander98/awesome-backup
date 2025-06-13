为了满足作业要求，我们需要对现有的代码进行一系列修改和扩展。以下是详细的修改步骤和修改后的代码示例。

### 1. 增加用户注册和登录的表单验证
在 `script.js` 中添加表单验证函数，并使用正则表达式验证密码和邮箱。假设学生 ID 最后三位是 `123`。

```javascript
// script.js
// ... 已有代码 ...

// 表单验证函数，添加最后三位学生 ID
function validateRegistrationForm123() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const email = document.getElementById('signup-email').value;

    // 验证用户名
    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        return false;
    }

    // 验证密码
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one letter, one number, and one special character.');
        return false;
    }

    // 验证确认密码
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // 验证邮箱
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function validateLoginForm123() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // 验证用户名和密码是否为空
    if (username.length === 0 || password.length === 0) {
        alert('Please enter both username and password.');
        return false;
    }

    return true;
}

// 在注册和登录表单提交时调用验证函数
document.getElementById('signup-form').addEventListener('submit', function (e) {
    if (!validateRegistrationForm123()) {
        e.preventDefault();
    }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    if (!validateLoginForm123()) {
        e.preventDefault();
    }
});
```

### 2. 修改注册页面，增加确认密码、邮箱、电话和地址字段
```html
<!-- signup.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Freezing</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="logo-container">
            <img src="logo.png" alt="Logo" class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="login.html">Log In</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="auth-section">
            <h1>Sign Up</h1>
            <form id="signup-form" class="auth-form">
                <label for="signup-username">Username:</label>
                <input type="text" id="signup-username" required>
                <br>
                <label for="signup-password">Password:</label>
                <input type="password" id="signup-password" required>
                <br>
                <label for="signup-confirm-password">Confirm Password:</label>
                <input type="password" id="signup-confirm-password" required>
                <br>
                <label for="signup-email">Email:</label>
                <input type="email" id="signup-email" required>
                <br>
                <label for="signup-phone">Phone Number:</label>
                <input type="text" id="signup-phone" required>
                <br>
                <label for="signup-address">Address:</label>
                <input type="text" id="signup-address" required>
                <br>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <p>&copy; 2023 IT Store. All rights reserved.</p>
            <p>Freezing</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

### 3. 从 JSON 文件加载课程和资源包信息
创建 `courses.json` 和 `resourceKits.json` 文件，并在 `script.js` 中加载它们。

```json
// courses.json
[
    {
        "id": 1,
        "name": "Course 1",
        "courseware": "Courseware details 1",
        "assessment": "Assessment requirements 1",
        "sampleProject": "Sample project 1"
    },
    {
        "id": 2,
        "name": "Course 2",
        "courseware": "Courseware details 2",
        "assessment": "Assessment requirements 2",
        "sampleProject": "Sample project 2"
    },
    {
        "id": 3,
        "name": "Course 3",
        "courseware": "Courseware details 3",
        "assessment": "Assessment requirements 3",
        "sampleProject": "Sample project 3"
    },
    {
        "id": 4,
        "name": "Course 4",
        "courseware": "Courseware details 4",
        "assessment": "Assessment requirements 4",
        "sampleProject": "Sample project 4"
    },
    {
        "id": 5,
        "name": "Course 5",
        "courseware": "Courseware details 5",
        "assessment": "Assessment requirements 5",
        "sampleProject": "Sample project 5"
    }
]
```

```json
// resourceKits.json
[
    {
        "id": 1,
        "name": "Resource Kit 1",
        "price": "¥100",
        "description": "Description of resource kit 1",
        "image": "kit1.jpg",
        "unitNumber": "TG123"
    },
    {
        "id": 2,
        "name": "Resource Kit 2",
        "price": "¥200",
        "description": "Description of resource kit 2",
        "image": "kit2.jpg",
        "unitNumber": "TG456"
    },
    // ... 其他资源包 ...
    {
        "id": 10,
        "name": "Resource Kit 10",
        "price": "¥1000",
        "description": "Description of resource kit 10",
        "image": "kit10.jpg",
        "unitNumber": "TG999"
    }
]
```

```javascript
// script.js
// ... 已有代码 ...

// 加载课程信息
async function loadCourses123() {
    try {
        const response = await fetch('courses.json');
        const courses = await response.json();
        // 处理课程信息，例如显示在页面上
        console.log(courses);
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

// 加载资源包信息
async function loadResourceKits123() {
    try {
        const response = await fetch('resourceKits.json');
        const resourceKits = await response.json();
        // 处理资源包信息，例如显示在页面上
        console.log(resourceKits);
    } catch (error) {
        console.error('Error loading resource kits:', error);
    }
}

// 页面加载时调用加载函数
window.addEventListener('load', function () {
    loadCourses123();
    loadResourceKits123();
});
```

### 4. 完善购物车功能
确保购物车可以更新商品数量、计算小计和总价，并保存订单信息到 `localStorage`。

```javascript
// script.js
// ... 已有代码 ...

function addToCart123(productId) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Please log in to add items to the cart.');
        window.location.href = 'login.html';
        return;
    }

    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    if (document.title.includes('Shopping Cart')) {
        loadCart123();
    }
}

function removeFromCart123(productId) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Please log in to remove items from the cart.');
        window.location.href = 'login.html';
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    if (document.title.includes('Shopping Cart')) {
        loadCart123();
    }
}

function loadCart123() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let totalPrice = 0;
        cartContainer.innerHTML = cart.map((product, index) => {
            const price = parseFloat(product.price.replace('¥', ''));
            const quantity = product.quantity || 1;
            const subtotal = price * quantity;
            totalPrice += subtotal;

            return `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" width="100">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p>
                        ${product.price} x 
                        <input type="number" id="quantity-${index}" value="${quantity}" min="1" oninput="updateTotal123(${index})" 
                        style="
                            width: 50px; 
                            height: 25px; 
                            font-size: 14px;
                            -webkit-appearance: none; 
                            -moz-appearance: textfield; 
                            appearance: none;
                        "> 
                        = ¥<span id="total-${index}">${subtotal.toFixed(2)}</span>
                    </p>
                    <button class="cta-button" onclick="removeFromCart123(${product.id})">Remove</button>
                </div>
            `;
        }).join('');

        cartContainer.innerHTML += `<p>Total Price: ¥${totalPrice.toFixed(2)}</p>`;
    }
}

function updateTotal123(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantityInput = document.getElementById(`quantity-${index}`);
    const newQuantity = parseInt(quantityInput.value);
    const price = parseFloat(cart[index].price.replace('¥', ''));

    if (!isNaN(newQuantity) && newQuantity > 0) {
        const total = price * newQuantity;
        const totalElement = document.getElementById(`total-${index}`);
        totalElement.textContent = total.toFixed(2);

        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart123();
    } else {
        alert('Please enter a valid quantity.');
    }
}

function confirmOrder123() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Please log in to confirm your order.');
        window.location.href = 'login.html';
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const username = localStorage.getItem('username');
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('¥', ''));
        const quantity = item.quantity || 1;
        return total + price * quantity;
    }, 0);

    const order = {
        username: username,
        items: cart,
        totalPrice: totalPrice
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    window.location.href = 'orders.html';
}
```

### 5. 订单管理页面
提供下载订单历史为 JSON 文件、清空购物车和订单历史以及注销功能。

```html
<!-- orders.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freezing - Orders & Checkout</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="logo-container">
            <img src="logo.png" alt="Logo" class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Shopping Cart</a></li>
                <li><a id="auth-link" href="#">Log/Sign in</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="orders-section">
            <h2>Your Orders</h2>
            <div id="orders-container"></div>
            <button class="cta-button" id="download-orders-button" onclick="downloadOrders123()">Download Orders</button>
            <button class="cta-button" id="clear-storage-button" onclick="clearSession123()">Clear Storage</button>
            <button class="cta-button" id="logout-button" onclick="logout123()">Log Out</button>
        </section>

    </main>

    <footer>
        <p>&copy; 2023 IT Store. All rights reserved.</p>
        <p>Freezing</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

```javascript
// script.js
// ... 已有代码 ...

function downloadOrders123() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Please log in to download your orders.');
        window.location.href = 'login.html';
        return;
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length === 0) {
        alert('You have no orders to download.');
        return;
    }

    const jsonContent = JSON.stringify(orders, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'orders.json';
    link.click();

    URL.revokeObjectURL(url);
}

function clearSession123() {
    localStorage.removeItem('cart');
    localStorage.removeItem('orders');
    alert('Shopping cart and order history cleared.');
    loadCart123();
}

function logout123() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('cart');
    localStorage.removeItem('orders');
    localStorage.removeItem('users');
    window.location.href = 'index.html';
}
```

### 6. 响应式设计和动画过渡
确保 `style.css` 中使用了媒体查询和动画过渡效果。

```css
/* style.css */
/* ... 已有代码 ... */

/* 响应式设计 */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        text-align: center;
    }

    nav ul li {
        margin: 0.5rem 0;
    }

    header {
        flex-direction: column;
        text-align: center;
        min-height: 100px;
        padding: 0.5rem;
    }

    .logo-container {
        padding: 1rem 0;
        padding-left: 0;
    }
}

/* 动画过渡 */
.cta-button, .add-to-cart {
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover, .add-to-cart:hover {
    background-color: #555;
    transform: scale(1.05);
}

/* 导航链接动画 */
nav ul li a {
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #ddd;
}
```

### 7. 交互功能
可以在订单管理页面添加一个待办事项列表。

```html
<!-- orders.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freezing - Orders & Checkout</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="logo-container">
            <img src="logo.png" alt="Logo" class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Shopping Cart</a></li>
                <li><a id="auth-link" href="#">Log/Sign in</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="orders-section">
            <h2>Your Orders</h2>
            <div id="orders-container"></div>
            <button class="cta-button" id="download-orders-button" onclick="downloadOrders123()">Download Orders</button>
            <button class="cta-button" id="clear-storage-button" onclick="clearSession123()">Clear Storage</button>
            <button class="cta-button" id="logout-button" onclick="logout123()">Log Out</button>

            <h2>To-Do List</h2>
            <input type="text" id="todo-input" placeholder="Add a task">
            <button class="cta-button" onclick="addTodo123()">Add Task</button>
            <ul id="todo-list"></ul>
        </section>

    </main>

    <footer>
        <p>&copy; 2023 IT Store. All rights reserved.</p>
        <p>Freezing</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

```javascript
// script.js
// ... 已有代码 ...

function addTodo123() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText.length > 0) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}
```

### 总结
通过以上修改，我们满足了作业的大部分要求，包括用户认证、课程和资源包显示、购物车功能、订单管理、表单验证、响应式设计、动画过渡和交互功能。确保将修改后的代码上传到 GitHub，并将代码压缩后上传到 Moodle，同时提供网站的 URL 和项目文档的 PDF 文件。制作一个视频来演示网站，并将学生评估答案保存到 `answer.txt` 文件中，以英文名称重命名该文件。