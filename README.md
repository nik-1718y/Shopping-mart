
# **ShopSmart-Ecommerce-MERN**

### **Overview**
ShopSmart is a full-stack e-commerce platform built using the MERN stack, designed for both users and admins. It provides features like secure authentication, product management, order handling, and virtual payments with PayPal. Cloudinary integration is used for media storage and optimization.

---

## **Demo**
- **Live Demo:** https://shop-smart-qs29.onrender.com/   

---

## **Technologies Used**
- **Frontend:**
  - React.js
  - Redux Toolkit
  - Tailwind CSS
  - ShadCN UI

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

- **Others:**
  - JWT (Authentication & Authorization)
  - PayPal Payment Gateway (for demo virtual payments)
  - Cloudinary (Media Storage & Optimization)

---

## **Features**
- **User Features:**
  - User registration, login, and logout.
  - Browse products, add to cart, and place orders.
  - View order history and payment status.
  - Secure payments using PayPal integration.

- **Admin Features:**
  - Admin dashboard for managing products, orders, and users.
  - Role-based access control using JWT.
  - Cloudinary integration for uploading product images.

---

## **Installation**

### **Prerequisites:**
- Node.js installed on your machine
- MongoDB instance (local or cloud)
- PayPal sandbox account (for demo payments)
- Cloudinary account (for media storage)

### **Steps:**
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Amar-Gupta-721/ShopSmart-Ecommerce-MERN.git
   cd ShopSmart-Ecommerce-MERN
    ```
2. **Install Dependencies:** For both frontend and backend:    
     ```bash
     cd client
    npm install
    cd ../server
    npm install

3. **Setup Environment Variables for Frontend:** 
Create a ```.env``` file in the backend directory and add the following:

```bash 
VITE_API_URL=http://localhost:5000
```

4. **Setup Environment Variables for Backend:** 
Create a ```.env``` file in the backend directory and add the following:

```bash 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```
5. **Run the Application:** In the backend folder, run:
```bash 
npm run dev
```

In the frontend folder, run:

```bash 
npm run dev
```

## Usage
- **User Flow:**

    1. Register or login as a user.
    2. Browse products, add items to your cart, and proceed to     checkout.
    3. Use the PayPal payment gateway to make a virtual payment.
    4. View your order history and payment status.


- **Admin Flow:**

   1. Login as an admin.
   2. Manage products, view orders, and update their status.
   3. View and manage registered users.

   
