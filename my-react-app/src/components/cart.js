import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode from 'jwt-decode' library
import "../assets/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../assets/css/style.css"; // Import custom styles
import Header from './header'; // Import Header component
import Footer from './footer'; // Import Footer component
import { Link } from 'react-router-dom';
const Cart = () => {
    // Define state variables using useState hook
    const [cartData, setCartData] = useState(null); // State variable for cart data
    const [productData, setProductData] = useState(null); // State variable for product data
    const [couponData, setCouponData] = useState(null); // State variable for coupon data
    const [appliedCoupon, setAppliedCoupon] = useState(null); // State variable for applied coupon

    // useEffect hook to fetch cart data and coupon data when component mounts
    useEffect(() => {
        fetchCartData(); // Call fetchCartData function
        fetchCouponData(); // Call fetchCouponData function
    }, []);

    // Function to fetch cart data from backend API
    const fetchCartData = async () => {
        try {
            // Retrieve the JWT token from local storage
            const token = localStorage.getItem('token');
    
            // Check if token is available
            if (!token) {
                console.error('Token not found. User may not be logged in.');
                return; // Optionally handle this case
            }
    
            // Decode the token to extract user information
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            // Make a request to your backend API to fetch the cart data
            const response = await fetch(`http://localhost:3000/getCartOfUser/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Include the JWT token in the Authorization header
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch cart data');
            }

            const cart = await response.json();
            setCartData(cart);

            // If cart data is available, fetch product data using its product ID
            if (cart && cart.items && cart.items.length > 0) {
                const productId = cart.items[0].productId; // Assuming there's only one item in the cart for now
                fetchProductData(productId);
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
            // Handle error
        }
    };

    // Function to fetch product data using product ID
    const fetchProductData = async (productId) => {
        try {
            // Make a request to your backend API to fetch the product data
            const response = await fetch(`http://localhost:3000/getAllProductsById/${productId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }

            const product = await response.json();
            setProductData(product);
        } catch (error) {
            console.error('Error fetching product data:', error);
            // Handle error
        }
    };

    // Function to fetch coupon data from backend API
    const fetchCouponData = async () => {
        try {
            const response = await fetch('http://localhost:3000/getAllCoupons');
            if (!response.ok) {
                throw new Error('Failed to fetch coupon data');
            }
            const coupons = await response.json();
            setCouponData(coupons);
        } catch (error) {
            console.error('Error fetching coupons:', error);
        }
    };

    // Function to apply coupon when user submits coupon code
   // Function to apply coupon when user submits coupon code
const applyCoupon = (couponCode) => {
    if (!couponData) return;

    const coupon = couponData.find(coupon => coupon.code === couponCode);
    if (!coupon) {
        console.error('Coupon not found');
        return;
    }

    // Parse discountValue to a number
    coupon.amount = parseFloat(coupon.discountValue);

    console.log('Applied Coupon:', coupon); // Log the applied coupon
    setAppliedCoupon(coupon);
};


    // Function to remove applied coupon
    const removeCoupon = () => {
        setAppliedCoupon(null);
    };

    // Function to calculate subtotal of cart items
    const calculateSubtotal = (items) => {
        return items.reduce((subtotal, item) => {
            return subtotal + (item.quantity * (productData && productData.price));
        }, 0);
    };

   // Function to calculate total amount considering applied coupon
const calculateTotal = (items) => {
    let total = calculateSubtotal(items); // Calculate subtotal

    // If a coupon is applied, deduct the coupon amount from the total
    if (appliedCoupon) {
        total -= appliedCoupon.amount;
    }

    // Return the updated total amount
    return total < 0 ? 0 : total; // Ensure total is not negative
};



    

    // JSX structure for the Cart component
    return (
        <>
            <Header /> {/* Render Header component */}
            <main className="main">
                {/* Breadcrumb navigation */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                        </ol>
                    </div>
                </nav>
    
                <div className="page-content">
                    <div className="cart">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        {/* Table Header */}
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {/* Table Body */}
                                        <tbody>
                                            {/* Render cart items here */}
                                            {cartData && cartData.items && cartData.items.map((item, index) => (
                                                <tr key={index}>
                                                    {/* Product */}
                                                    <td className="product-col">
                                                        <div className="product">
                                                            <figure className="product-media">
                                                                <img src={productData && productData.image} alt="Product image" />
                                                            </figure>
                                                            <h3 className="product-title">
                                                                <a href="#">{productData && productData.name}</a>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    {/* Price */}
                                                    <td className="price-col">₹{productData && productData.price}</td>
                                                    {/* Quantity */}
                                                    <td className="quantity-col">
                                                        <div className="cart-product-quantity">
                                                            <input type="number" className="form-control" value={item.quantity} min="1" max="10" step="1" data-decimals="0" required />
                                                        </div>
                                                    </td>
                                                    {/* Total */}
                                                    <td className="total-col">₹{(productData && productData.price) * item.quantity}</td>
                                                    <td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
    
                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            {/* Coupon code form */}
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                const couponCode = e.target.elements.couponCode.value;
                                                applyCoupon(couponCode);
                                            }}>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name="couponCode" required placeholder="Enter coupon code" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary-2" type="submit">Apply</button>
                                                        {/* Render Remove Coupon button if coupon applied */}
                                                        {appliedCoupon && (
                                                            <button className="btn btn-outline-danger" type="button" onClick={removeCoupon}>Remove Coupon</button>
                                                        )}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
    
                                        <a href="#" className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh"></i></a>
                                    </div>
                                </div>
                                {/* Cart Detail */}
                                <aside className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className="summary-title">Cart Total</h3>
    
                                        <table className="table table-summary">
                                            <tbody>
                                                {/* Subtotal */}
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>₹{cartData && calculateSubtotal(cartData.items)}</td>
                                                </tr>
                                                {/* Shipping */}
                                                <tr className="summary-shipping">
                                                    <td>Shipping:</td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                {/* Shipping Options */}
                                                <tr className="summary-shipping-row">
                                                    {/* Free Shipping */}
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
                                                            <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                                                        </div>
                                                    </td>
                                                    <td>₹0.00</td>
                                                </tr>
                                                {/* Standard Shipping */}
                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" />
                                                            <label className="custom-control-label" htmlFor="standart-shipping">Standard:</label>
                                                        </div>
                                                    </td>
                                                    <td>₹10.00</td>
                                                </tr>
                                                {/* Express Shipping */}
                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="express-shipping" name="shipping" className="custom-control-input" />
                                                            <label className="custom-control-label" htmlFor="express-shipping">Express:</label>
                                                        </div>
                                                    </td>
                                                    <td>₹20.00</td>
                                                </tr>
                                                {/* Estimate Shipping */}
                                                <tr className="summary-shipping-estimate">
                                                    <td>Estimate for Your Country<br /> <a href="dashboard">Change address</a></td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                               {/* Total */}
<tr className="summary-total">
    <td>Total:</td>
    <td>₹{cartData && calculateSubtotal(cartData.items)}</td>
</tr>
{/* Discount */}
{appliedCoupon && (
    <tr className="summary-discount">
        <td>Discount:</td>
        <td>- ₹{appliedCoupon.amount}</td>
    </tr>
)}
{/* Updated Total */}
<tr className="summary-total">
    <td>Final Total:</td>
    <td>₹{cartData && calculateTotal(cartData.items)}</td>
</tr>

                                            </tbody>
                                        </table>
    
                                        <a href="checkout" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
                                    </div>
                                    <a href="category" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></a>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer /> {/* Render Footer component */}
        </>
    );
};

export default Cart;
