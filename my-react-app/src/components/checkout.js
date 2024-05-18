// src/components/checkout.js
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Corrected import statement
import Header from './header';
import Footer from './footer';
import PayPalButton from './paypalbutton'; // Ensure this path is correct

const Checkout = () => {
    const [cartData, setCartData] = useState(null);
    const [productData, setProductData] = useState(null);
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponData, setCouponData] = useState(null);
    const [couponCode, setCouponCode] = useState('');
    const [showPayPal, setShowPayPal] = useState(false); // State to control PayPal button visibility

    useEffect(() => {
        fetchCartData();
        fetchCouponData();
    }, []);

    const fetchCartData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found. User may not be logged in.');
                return;
            }
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            const response = await fetch(`http://localhost:3000/getCartOfUser/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch cart data');
            }

            const cart = await response.json();
            setCartData(cart);

            if (cart && cart.items && cart.items.length > 0) {
                const productId = cart.items[0].productId;
                fetchProductData(productId);
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const fetchProductData = async (productId) => {
        try {
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
        }
    };

    const applyCoupon = (couponCode) => {
        if (!couponData) return;

        const coupon = couponData.find(coupon => coupon.code === couponCode);
        if (!coupon) {
            console.error('Coupon not found');
            return;
        }

        coupon.amount = parseFloat(coupon.discountValue);

        setAppliedCoupon(coupon);
    };

    const calculateSubtotal = (items) => {
        if (items && items.length > 0 && productData && productData.price) {
            return items.reduce((subtotal, item) => {
                return subtotal + (item.quantity * productData.price);
            }, 0);
        } else {
            return 0;
        }
    };

    const calculateTotal = (items) => {
        let total = calculateSubtotal(items);

        if (appliedCoupon) {
            const discountAmount = parseFloat(appliedCoupon.discountValue);
            total -= discountAmount;
        }

        return total < 0 ? 0 : total;
    };

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

    const handlePlaceOrder = () => {
        setShowPayPal(true); // Show the PayPal button when "Place Order" is clicked
    };

    const handlePaymentSuccess = (order) => {
        console.log('Payment successful!', order);
        // Add further order processing logic here, such as saving the order to your backend
    };

    return(
        <>
            <Header/>
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="checkout">
                        <div className="container-fluid">
                            <div className="checkout-discount">
                                <form action="#">
                                    <input type="text" className="form-control" required id="checkout-discount-input" value={couponCode} onChange={e => setCouponCode(e.target.value)} />
                                    <label htmlFor="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
                                    <button type="submit" className="btn btn-primary" onClick={() => applyCoupon(couponCode)}>Apply Coupon</button>
                                </form>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h2 className="checkout-title">Billing Details</h2>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>First Name *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Last Name *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <label>Company Name (Optional)</label>
                                        <input type="text" className="form-control" />
                                        <label>Country *</label>
                                        <input type="text" className="form-control" required />
                                        <label>Street address *</label>
                                        <input type="text" className="form-control" placeholder="House number and Street name" required />
                                        <input type="text" className="form-control" placeholder="Apartments, suite, unit etc ..." required />
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Town / City *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>State / County *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Postcode / ZIP *</label>
                                                <input type="text" className="form-control" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Phone *</label>
                                                <input type="tel" className="form-control" required />
                                            </div>
                                        </div>
                                        <label>Email address *</label>
                                        <input type="email" className="form-control" required />
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkout-create-acc" />
                                            <label className="custom-control-label" htmlFor="checkout-create-acc">Create an account?</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkout-diff-address" />
                                            <label className="custom-control-label" htmlFor="checkout-diff-address">Ship to a different address?</label>
                                        </div>
                                        <label>Order notes (optional)</label>
                                        <textarea className="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                    </div>
                                    <aside className="col-lg-3">
                                        <div className="summary">
                                            <h3 className="summary-title">Your Order</h3>
                                            <table className="table table-summary">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartData && cartData.items.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.productName}</td>
                                                            <td>{item.quantity * (productData && productData.price)}</td>
                                                        </tr>
                                                    ))}
                                                    <tr className="summary-subtotal">
                                                        <td>Subtotal:</td>
                                                        <td>{calculateSubtotal(cartData && cartData.items)}</td>
                                                    </tr>
                                                    {appliedCoupon && (
                                                        <tr>
                                                            <td>Coupon ({appliedCoupon.code}):</td>
                                                            <td>-{appliedCoupon.amount}</td>
                                                        </tr>
                                                    )}
                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>{calculateTotal(cartData && cartData.items)}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="accordion-summary" id="accordion-payment">
                                                <div className="card">
                                                    <div className="card-header" id="heading-1">
                                                        <h2 className="card-title">
                                                            <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                                                Direct bank transfer
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
                                                        <div className="card-body">
                                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-2">
                                                        <h2 className="card-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                                Check payments
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
                                                        <div className="card-body">
                                                            Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-3">
                                                        <h2 className="card-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                                                Cash on delivery
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
                                                        <div className="card-body">
                                                            Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-4">
                                                        <h2 className="card-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                                                PayPal <small className="float-right paypal-link">What is PayPal?</small>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
                                                        <div className="card-body">
                                                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-5">
                                                        <h2 className="card-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                                                                Credit Card (Stripe)
                                                                <img src={require("../assets/images/payments-summary.png")} alt="payments cards" />
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
                                                        <div className="card-body">
                                                            Donec nec justo eget felis facilisis fermentum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {!showPayPal ? (
                                                <button type="button" className="btn btn-outline-primary-2 btn-order btn-block" onClick={handlePlaceOrder}>
                                                    <span className="btn-text">Place Order</span>
                                                    <span className="btn-hover-text">Proceed to Checkout</span>
                                                </button>
                                            ) : (
                                                <PayPalButton amount={calculateTotal(cartData && cartData.items)} onSuccess={handlePaymentSuccess} />
                                            )}
                                        </div>
                                    </aside>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Checkout;
