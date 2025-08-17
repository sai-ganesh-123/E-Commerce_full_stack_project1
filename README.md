
# 🚀 Forever Full-Stack E-commerce Application

## 🛒 Project Title & Description

This project is a **comprehensive full-stack e-commerce website** built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. It provides a complete online shopping experience for users and a dedicated admin panel for managing products and orders. The application includes robust features such as user authentication, product browsing, dynamic cart management, and integration with multiple payment gateways (Stripe and Razorpay), along with Cash on Delivery options.

## ✨ Features

### Frontend (User Interface)

*   **Homepage**: Displays the latest product collections (recently added 10 products), a curated list of best-seller products (5 products), essential store policies, an email subscription form, and standard footer information. Products feature interactive hover transitions for images.
*   **Collections Page**: Offers a comprehensive view of all available products. Users can **filter products** based on `category` (e.g., men, women, kids) and `type` (e.g., top wear, bottom wear, winter wear). Products can also be **sorted by price** (low to high or high to low) or `relevance`.
*   **Product Search**: An intuitive search bar allows users to find products quickly by entering keywords.
*   **Product Detail Page**: Each product has a dedicated page featuring a dynamic image gallery (main image updates upon selecting smaller thumbnails), product title, customer reviews, pricing, and a detailed description. Users can select product sizes and add items to their cart. Related products are displayed for easier browsing.
*   **Shopping Cart**: Displays all products added to the cart, allowing users to increase or decrease quantities and remove items. It dynamically calculates `subtotal`, `shipping charges`, and the `total cart amount`. Cart data is persisted in the database for logged-in users.
*   **User Authentication**: Includes full user `registration` and `login` functionalities.
*   **Checkout Process**: A dedicated page for users to enter `delivery information` and select their preferred payment method: **Stripe**, **Razorpay**, or **Cash on Delivery (COD)**.
*   **My Orders**: A page where users can view their past orders, including `order date`, `product size`, `quantity`, and `current order status`. A "Track Order" button allows users to refresh the order status.
*   **Responsive Design**: The entire frontend is designed to be fully `mobile-responsive`, ensuring a seamless experience across various screen sizes.

### Admin Panel

*   **Secure Admin Login**: A separate login interface to access the administrative functionalities.
*   **Order Management**: Admins can view a list of all user orders. A key feature is the ability to **update the status of an order** (e.g., "order placed," "packing," "out for delivery," "delivered"), which reflects instantly on the user's "My Orders" page.
*   **Product Management**:
    *   **List Items**: View all products currently available on the website.
    *   **Add New Products**: Admins can easily upload new products by providing `images`, `title`, `description`, `category`, `subcategory`, `price`, `available sizes`, and designating items as `best sellers`. Images are uploaded to `Cloudinary` for efficient storage.

## 🛠️ Tech Stack

The project leverages a modern full-stack architecture for scalability and performance.

*   **Frontend**:
    *   **React JS**: A JavaScript library for building user interfaces.
    *   **Vite**: A fast build tool for React projects.
    *   **React Router DOM**: For declarative routing in React applications.
    *   **React Toastify**: To display dynamic toast notifications.
    *   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
    *   **Axios**: A promise-based HTTP client for making API requests.
*   **Backend**:
    *   **Node.js**: A JavaScript runtime for server-side development.
    *   **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
    *   **MongoDB**: A NoSQL database for storing application data.
    *   **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
    *   **Multer**: A Node.js middleware for handling `multipart/form-data`, primarily used for file uploads.
    *   **JSON Web Token (JWT)**: For secure user authentication and authorization.
    *   **Bcrypt**: A library for hashing passwords securely.
    *   **Validator**: For validating and sanitizing strings, particularly for email formats.
    *   **Nodemon**: A utility that automatically restarts the Node.js server during development.
    *   **CORS**: Middleware to enable Cross-Origin Resource Sharing.
    *   **Cloudinary**: Cloud-based image and video management service used for storing product images.
    *   **Stripe**: A popular online payment processing platform for secure transactions.
    *   **Razorpay**: A prominent payment gateway for online transactions, specifically integrated for the Indian market.
*   **Database**:
    *   **MongoDB Atlas**: A cloud-based database service for MongoDB, used for hosting the database.
*   **Deployment**:
    *   **Vercel**: Platform for deploying frontend applications and serverless functions (used for both frontend and admin panel, and backend).
*   **Tools**:
    *   **VS Code**: Integrated Development Environment (IDE).
    *   **Thunder Client**: VS Code extension for testing API endpoints.

## 📦 Installation Guide

Follow these steps to set up and run the Forever Full-Stack E-commerce Application locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)
*   MongoDB Atlas Account (for database setup)
*   Cloudinary Account (for image storage)
*   Stripe Account (for payment gateway testing/usage)
*   Razorpay Account (for payment gateway testing/usage, if applicable)

### 1. Clone the Repository

```bash
git clone <repository_url>
cd e-commerce-app # This is the root project folder
```

### 2. Backend Setup

1.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```
2.  **Initialize npm and install dependencies**:
    ```bash
    npm init -y # Accept default package.json values
    npm install cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator bcrypt
    ```
3.  **Configure `package.json`**:
    Open `backend/package.json` and add/modify the `scripts` and `type` fields:
    ```json
    {
      {
      "main": "server.js",
      "type": "module",
      "scripts": {
        "server": "nodemon server.js",
        "start": "node server.js"
      },
    
    }
    ```
4.  **Database Configuration (MongoDB Atlas)**:
    *   Go to [MongoDB Atlas](https://cloud.mongodb.com/).
    *   Create a **New Project** and then a **New Cluster** (select the free `M0` tier).
    *   Create a **Database User** (e.g., `greatstack`) and **remember the password** (avoid `@` symbol in password).
    *   Set **Network Access** to "Allow Access from Anywhere" (`0.0.0.0/0`).
    *   Get your **Connection String (SRV record)**. Copy the part up to `.mongodb.net/`.
5.  **Cloudinary Configuration**:
    *   Go to [Cloudinary](https://cloudinary.com/).
    *   Sign up or log in and navigate to your Dashboard.
    *   Obtain your `Cloud Name`, `API Key`, and `API Secret`.
6.  **Stripe Configuration**:
    *   Go to [Stripe](https://stripe.com/).
    *   Sign up or log in and navigate to your Developer Dashboard.
    *   Obtain your `Secret Key` (usually starts with `sk_test_...`).
7.  **Razorpay Configuration**:
    *   Go to [Razorpay](https://razorpay.com/).
    *   Sign up or log in and navigate to your Dashboard.
    *   Obtain your `Key ID` and `Key Secret` from the API Keys section.
8.  **Create `.env` file**:
    In the `backend` directory, create a file named `.env` and populate it with your credentials:
    ```env
    PORT=4000
    MONGODB_URI=<Your_MongoDB_Atlas_Connection_String> # e.g., mongodb+srv://greatstack:password@cluster0.abcde.mongodb.net/ecommerce
    JWT_SECRET=greateststack # Or any strong secret string
    ADMIN_EMAIL=admin@forever.com # Your desired admin email
    ADMIN_PASSWORD=adminpassword # Your desired admin password
    CLOUDINARY_API_KEY=<Your_Cloudinary_API_Key>
    CLOUDINARY_SECRET_KEY=<Your_Cloudinary_Secret_Key>
    CLOUDINARY_NAME=<Your_Cloudinary_Cloud_Name>
    STRIPE_SECRET_KEY=<Your_Stripe_Secret_Key>
    RAZORPAY_KEY_SECRET=<Your_Razorpay_Key_Secret>
    RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID>
    ```

### 3. Frontend Setup

1.  **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```
2.  **Create React Project (if not already done)**:
    *(This step is typically done first, but included for completeness)*
    ```bash
    npm create vite@latest . # Creates project in current directory
    # Select React -> JavaScript
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    npm install react-router-dom react-toastify axios
    ```
4.  **Configure Frontend Port**:
    Open `frontend/vite.config.js` and add the `server` configuration:
    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
      server: {
        port: 5173, // Ensures consistent port
      },
    })
    ```
5.  **Set up Tailwind CSS**:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    *   Update `tailwind.config.js` with content paths (refer to source).
    *   Add Tailwind directives to `src/index.css` (refer to source).
     
6.  **Create `.env` file**:
    In the `frontend` directory, create a file named `.env` and populate it:
    ```env
    VITE_BACKEND_URL=http://localhost:4000 # Your local backend URL
    VITE_RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID> # Frontend needs this for Razorpay integration
    ```

### 4. Admin Panel Setup

1.  **Navigate to the admin directory**:
    ```bash
    cd ../admin
    ```
2.  **Create React Project (if not already done)**:
    *(This step is typically done first, but included for completeness)*
    ```bash
    npm create vite@latest . # Creates project in current directory
    # Select React -> JavaScript
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    npm install axios react-router-dom react-toastify
    ```
4.  **Configure Admin Panel Port**:
    Open `admin/vite.config.js` and add the `server` configuration:
    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
      server: {
        port: 5174, // Ensures consistent port
      },
    })
    ```
5.  **Set up Tailwind CSS**:
    *(Same steps as frontend)*
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    *   Update `tailwind.config.js` with content paths (refer to source).
    *   Add Tailwind directives to `src/index.css` (refer to source).

6.  **Create `.env` file**:
    In the `admin` directory, create a file named `.env` and populate it:
    ```env
    VITE_BACKEND_URL=http://localhost:4000 # Your local backend URL
    VITE_RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID> # Admin might need this if showing payment details etc.
    ```

### 5. Root Directory Configuration

1.  **Create `.gitignore` file**:
    In the root `e-commerce-app` directory, create a file named `.gitignore` and add:
    ```
    node_modules/
    .env
    ```
2.  **Add Vercel Configuration**:
    For Vercel deployment, create `vercel.json` in `backend`, `frontend`, and `admin` folders.
    *   `backend/vercel.json`: (For Express backend)
        ```json
        {
          "version": 2,
          "builds": [
            {
              "src": "server.js",
              "use": "@vercel/node"
            }
          ],
          "routes": [
            {
              "src": "/(.*)",
              "dest": "server.js"
            }
          ]
        }
        ```
    *   `frontend/vercel.json` and `admin/vercel.json`: (For React Router support)
        ```json
        {
          "rewrites": [
            {
              "source": "/(.*)",
              "destination": "/index.html"
            }
          ]
        }
        ```

## ▶️ Usage

To run the application, open three separate terminal windows, one for each part of the stack.

### 1. Start the Backend

Open a terminal, navigate to the `backend` directory:
```bash
cd e-commerce-app/backend
npm run server # For development with nodemon
# or
# npm start # For production/deployment
```
The backend server will run on **http://localhost:4000**. You should see "DB connected" and "Server started on Port 4000" messages.

### 2. Start the Frontend

Open a second terminal, navigate to the `frontend` directory:
```bash
cd e-commerce-app/frontend
npm run dev
```
The frontend application will typically open in your browser at **http://localhost:5173**.

### 3. Start the Admin Panel

Open a third terminal, navigate to the `admin` directory:
```bash
cd e-commerce-app/admin
npm run dev
```
The admin panel will typically open in your browser at **http://localhost:5174**.

**Note**: For initial product setup, you will need to use the admin panel (`http://localhost:5174`) to log in using your `ADMIN_EMAIL` and `ADMIN_PASSWORD` from the backend `.env` file, and then add products via the "Add Items" section. These products will then be visible on the frontend.

## 🔑 Environment Variables

Ensure you have created `.env` files in the root of `backend`, `frontend`, and `admin` directories with the following configurations:

### `backend/.env`

*   `PORT=4000` (Default port for the backend server)
*   `MONGODB_URI=<Your_MongoDB_Atlas_Connection_String>` (Connection string for MongoDB Atlas)
*   `JWT_SECRET=<Your_JWT_Secret_Key>` (A strong secret key for JSON Web Tokens)
*   `ADMIN_EMAIL=<Your_Admin_Email>` (Email for admin panel login)
*   `ADMIN_PASSWORD=<Your_Admin_Password>` (Password for admin panel login)
*   `CLOUDINARY_API_KEY=<Your_Cloudinary_API_Key>` (Cloudinary API Key for image uploads)
*   `CLOUDINARY_SECRET_KEY=<Your_Cloudinary_Secret_Key>` (Cloudinary Secret Key)
*   `CLOUDINARY_NAME=<Your_Cloudinary_Cloud_Name>` (Your Cloudinary cloud name)
*   `STRIPE_SECRET_KEY=<Your_Stripe_Secret_Key>` (Your Stripe account's secret key)
*   `RAZORPAY_KEY_SECRET=<Your_Razorpay_Key_Secret>` (Your Razorpay account's key secret)
*   `RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID>` (Your Razorpay account's key ID)

### `frontend/.env`

*   `VITE_BACKEND_URL=http://localhost:4000` (URL of your running backend server)
*   `VITE_RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID>` (Your Razorpay account's key ID, used by the frontend Razorpay SDK)

### `admin/.env`

*   `VITE_BACKEND_URL=http://localhost:4000` (URL of your running backend server)
*   `VITE_RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID>` (Your Razorpay account's key ID, if needed in admin panel, typically same as frontend)

## 🔗 API Documentation

Here's a brief overview of key API endpoints. All backend API endpoints start with `/api/`.

### User Routes (`/api/user`)

*   **`POST /api/user/register`**: Registers a new user account.
    *   **Requires**: `name`, `email`, `password` in request body.
*   **`POST /api/user/login`**: Logs in an existing user.
    *   **Requires**: `email`, `password` in request body.
*   **`POST /api/user/admin`**: Logs in an admin user.
    *   **Requires**: `email`, `password` in request body (should match `ADMIN_EMAIL` and `ADMIN_PASSWORD` from backend `.env`).

### Product Routes (`/api/product`)

*   **`POST /api/product/add`**: Adds a new product to the database.
    *   **Authentication**: Admin (requires `token` in headers).
    *   **Requires**: `name`, `description`, `price`, `category`, `subcategory`, `sizes` (JSON string), `bestSeller` (boolean string) in form data; `image1`, `image2`, `image3`, `image4` (files) in form data.
*   **`GET /api/product/list`**: Retrieves a list of all products.
*   **`POST /api/product/remove`**: Removes a product from the database.
    *   **Authentication**: Admin (requires `token` in headers).
    *   **Requires**: `ID` (product ID) in request body.
*   **`POST /api/product/single`**: Retrieves details of a single product.
    *   **Requires**: `productID` in request body.

### Cart Routes (`/api/cart`)

*   **`POST /api/cart/add`**: Adds a product to the user's cart.
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `itemID` (product ID), `size` in request body.
*   **`POST /api/cart/update`**: Updates the quantity of a product in the user's cart.
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `itemID`, `size`, `quantity` in request body.
*   **`POST /api/cart/get`**: Retrieves the current user's cart data.
    *   **Authentication**: User (requires `token` in headers).

### Order Routes (`/api/order`)

*   **`POST /api/order/list`**: Retrieves a list of all orders (for admin panel).
    *   **Authentication**: Admin (requires `token` in headers).
*   **`POST /api/order/status`**: Updates the status of an order.
    *   **Authentication**: Admin (requires `token` in headers).
    *   **Requires**: `orderID`, `status` in request body.
*   **`POST /api/order/place`**: Places an order using Cash on Delivery (COD).
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `items`, `amount`, `address` in request body.
*   **`POST /api/order/stripe`**: Initiates a Stripe payment session for an order.
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `items`, `amount`, `address` in request body.
*   **`POST /api/order/razorpay`**: Initiates a Razorpay payment for an order.
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `items`, `amount`, `address` in request body.
*   **`POST /api/order/userorders`**: Retrieves a specific user's orders (for frontend "My Orders" page).
    *   **Authentication**: User (requires `token` in headers).
*   **`POST /api/order/verifystripe`**: Verifies a Stripe payment after redirection.
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `orderID`, `success` (boolean string), `userID` in request body.
*   **`POST /api/order/verifyrazorpay`**: Verifies a Razorpay payment after successful transaction.
    *   **Authentication**: User (requires `token` in headers).
    *   **Requires**: `razorpay_order_id` in request body.

## 📂 Folder Structure

The project follows a modular structure, dividing the application into three main parts:

```
e-commerce-app/
├── admin/                     # React project for the Admin Panel UI
│   ├── public/
│   ├── src/
│   │   ├── assets/            # Admin-specific images and icons
│   │   ├── components/        # Reusable admin UI components (e.g., Navbar, Sidebar)
│   │   ├── pages/             # Admin sections (e.g., Add Product, List Products, Orders)
│   │   └── App.jsx
│   ├── .env                   # Environment variables for admin panel
│   ├── package.json
│   ├── tailwind.config.js
│   └── vercel.json            # Vercel deployment configuration for admin
├── backend/                   # Node.js/Express project for the API server
│   ├── config/                # Database and Cloudinary configurations
│   ├── controllers/           # Business logic for API endpoints (e.g., User, Product, Cart, Order)
│   ├── middleware/            # Authentication and file upload middleware (e.g., Auth, AdminAuth, Multer)
│   ├── models/                # Mongoose schemas for MongoDB collections (e.g., User, Product, Order)
│   ├── routes/                # Express route definitions
│   ├── .env                   # Environment variables for backend
│   ├── server.js              # Main Express server entry point
│   ├── package.json
│   └── vercel.json            # Vercel deployment configuration for backend
└── frontend/                  # React project for the User-facing Website
    ├── public/
    ├── src/
    │   ├── assets/            # Frontend-specific images and data (e.g., product data, icons)
    │   ├── components/        # Reusable frontend UI components (e.g., Navbar, Footer, ProductItem)
    │   ├── context/           # React Context API for global state management (e.g., ShopContext)
    │   ├── pages/             # Main application pages (e.g., Home, Collections, Product, Cart, Login)
    │   └── App.jsx
    ├── .env                   # Environment variables for frontend
    ├── package.json
    ├── tailwind.config.js
    └── vercel.json            # Vercel deployment configuration for frontend
