import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode from 'jwt-decode' library
import "../assets/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../assets/css/style.css"; // Import custom styles


const Header = () => {
    // Define state variables using useState hook
    const [cartData, setCartData] = useState({}); // Initialize with empty object
    const [productData, setProductData] = useState({}); // Initialize with empty object
    const [couponData, setCouponData] = useState(null); // State variable for coupon data
    const [appliedCoupon, setAppliedCoupon] = useState({}); // Initialize with empty object
    

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
    if (!items || !Array.isArray(items)) {
        return 0; // Return 0 if items is not defined or not an array
    }

    return items.reduce((subtotal, item) => {
        return subtotal + (item.quantity * (productData && productData.price));
    }, 0);
};


// Function to calculate total amount considering applied coupon
const calculateTotal = (items) => {
    let total = calculateSubtotal(items); // Calculate subtotal

    // If a coupon is applied, deduct the coupon amount from the total
    if (appliedCoupon && appliedCoupon.amount) {
        total -= appliedCoupon.amount;
    }

    // Return the updated total amount
    return total >= 0 ? total : 0; // Ensure total is not negative
};




    

    // JSX structure for the Cart component
    return  (
        <header className="header header-7">
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <a className="back_btn" href="/home">
                            <i className="icon-angle-left"></i>
                        </a>
                        <p className="heading_page">Login & Sign Up</p>

                        <a href="/home" className="logo">
                            <img src={require("../assets/images/logo.png")} alt="Dickkny Logo" width="145" height="28" />
                        </a>

                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li>
                                    <a href="#" className="">Jackets </a>
                                </li>
                                <li>
                                    <a href="#" className="">Joggers </a>
                                </li>
                                <li>
                                    <a href="#" className="">Shorts </a>
                                </li>
                                <li>
                                    <a href="#" className="">Capri </a>
                                </li>
                                <li>
                                    <a href="#" className="sf-with-ul">Jeans </a>
                                    <ul>
                                        <li><a href="#">Wide lag Fit</a></li>
                                        <li><a href="#">Skinny Fit</a></li>
                                        <li><a href="#">Boot-leg Fit</a></li>
                                        <li><a href="#">Straight Fit</a></li>
                                        <li><a href="#">Cargo Fit</a></li>
                                        <li><a href="#">Formal Fit</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search header-search-extended header-search-visible">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="login_whislist">
                            <ul>
                                <li><a href="wishlist"><i className="icon-heart-o"></i><span>3</span></a></li>
                                <li><a href="login"><i className="icon-user"></i></a></li>
                            </ul>
                        </div>
                        <div className="dropdown cart-dropdown">
                            {/* <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                            </a> */}
                            <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">{cartData && cartData.items ? cartData.items.length : 0}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    {/* Display cart items dynamically */}
                                    {cartData.items && cartData.items.map((item, index) => (
    <div className="product" key={index}>
        <div className="product-cart-details">
            <h4 className="product-title">
                <a href="product">{productData && productData.name}</a> {/* Display product name */}
            </h4>
            <span className="cart-product-info">
                <span className="cart-product-qty">{item.quantity}</span>
                x {productData && productData.price}
            </span>
        </div>
        <figure className="product-image-container">
            <a href="product" className="product-image">
                <img src={productData && productData.image} alt="product" /> {/* Display product image */}
            </a>
        </figure>
        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
    </div>
))}

                                </div>
                                <div className="dropdown-cart-total">
                                    <span>Total</span>
                                    <span className="cart-total-price">{calculateTotal(cartData.items).toFixed(2)}</span> {/* Display total price */}
                                </div>
                                <div className="dropdown-cart-action">
                                    <a href="cart" className="btn btn-primary">View Cart</a>
                                    <a href="checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;
