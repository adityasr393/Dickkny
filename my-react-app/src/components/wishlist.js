import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
import { jwtDecode } from 'jwt-decode';

const Wishlist = () => {
    // State to store wishlist items
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        // Function to fetch wishlist items when component mounts
        const fetchWishlist = async () => {
            try {
                // Retrieve token from localStorage
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Token not found. User may not be logged in.');
                    return;
                }
                // Decode the token to extract user information
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;
                // Make request to backend API to fetch wishlist items for the user
                const response = await axios.get(`http://localhost:3000/getWishListOfUser/${userId}`);
                // Update state with wishlist items
                setWishlistItems(response.data.items);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        // Call the fetchWishlist function
        fetchWishlist();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <>
            <Header /> {/* Include the Header component */}
            <main className="main">
                {/* Breadcrumb Navigation */}
                <div className="page-content">
                    <div className="container-fluid">
                        {/* Wishlist Table */}
                        <table className="table table-wishlist table-mobile">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Stock Status</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Mapping through wishlistItems to render each wishlist item */}
                                {wishlistItems.map(item => (
                                    <tr key={item._id}>
                                        {/* Product Column */}
                                        <td className="product-col">
                                            <div className="product">
                                                <figure className="product-media">
                                                    {/* Product Image */}
                                                    <img src={item.productId.image} alt="Product image" />
                                                </figure>
                                                {/* Product Title */}
                                                <h3 className="product-title">
                                                    <a href="#">{item.productId.name}</a>
                                                </h3>
                                            </div>
                                        </td>
                                        {/* Price Column */}
                                        <td className="price-col">{item.productId.price}</td>
                                        {/* Stock Status Column */}
                                        <td className="stock-col">
                                            <span className={item.productId.stock > 0 ? "in-stock" : "out-of-stock"}>
                                                {/* Displaying stock status */}
                                                {item.productId.stock > 0 ? "In stock" : "Out of stock"}
                                            </span>
                                        </td>
                                        {/* Action Column */}
                                        <td className="action-col">
                                            {/* Conditional rendering of Add to Cart button based on stock availability */}
                                            {item.productId.stock > 0 ? (
                                                <button className="btn btn-block btn-outline-primary-2">
                                                    <i className="icon-cart-plus"></i>Add to Cart
                                                </button>
                                            ) : (
                                                <button className="btn btn-block btn-outline-primary-2 disabled">
                                                    Out of Stock
                                                </button>
                                            )}
                                        </td>
                                        {/* Remove Column */}
                                        <td className="remove-col">
                                            <button className="btn-remove">
                                                <i className="icon-close"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Wishlist Share Buttons */}
                        <div className="wishlist-share">
                            <div className="social-icons social-icons-sm mb-2">
                                <label className="social-label">Share on:</label>
                                {/* Social Media Icons */}
                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer /> {/* Include the Footer component */}
        </>
    );
};

export default Wishlist;
