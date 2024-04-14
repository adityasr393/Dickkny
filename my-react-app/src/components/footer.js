import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="mob_footer">
                        <div className="accordion" id="accordion-1">
                            <div className="card">
                                <div className="card-header" id="heading-2">
                                    <h2 className="card-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                            More About Dickkny
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="widget">
                                                    <h4 className="widget-title">Useful Links</h4>
                                                    <ul className="widget-list">
                                                        <li><a href="about">About Dickkny</a></li>
                                                        <li><a href="product-list">Shop</a></li>
                                                        <li><a href="coupon">Coupon</a></li>
                                                        <li><a href="contact">Contact us</a></li>
                                                        <li><a href="login">Log in</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="widget">
                                                    <h4 className="widget-title">Customer Service</h4>
                                                    <ul className="widget-list">
                                                        <li><a href="#">Payment Methods</a></li>
                                                        <li><a href="#">Money-back guarantee!</a></li>
                                                        <li><a href="#">Returns</a></li>
                                                        <li><a href="#">Shipping</a></li>
                                                        <li><a href="#">Terms and conditions</a></li>
                                                        <li><a href="#">Privacy Policy</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="widget">
                                                    <h4 className="widget-title">My Account</h4>
                                                    <ul className="widget-list">
                                                        <li><a href="cart">View Cart</a></li>
                                                        <li><a href="wishlist">My Wishlist</a></li>
                                                        <li><a href="dashboard">My Account</a></li>
                                                        <li><a href="bulkinquery">Bulk Inquiry</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="destop_footer">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget widget-about">
                                    <img src={require("../assets/images/logo.png")} className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                                    <div className="social-icons">
                                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Links</h4>
                                    <ul className="widget-list">
                                        <li><a href="about">About Dickkny</a></li>
                                        <li><a href="product-list">Shop</a></li>
                                        <li><a href="coupon">Coupon</a></li>
                                        <li><a href="contact">Contact us</a></li>
                                        <li><a href="login">Log in</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>
                                    <ul className="widget-list">
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back guarantee!</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>
                                    <ul className="widget-list">
                                        <li><a href="cart">View Cart</a></li>
                                        <li><a href="wishlist">My Wishlist</a></li>
                                        <li><a href="dashboard">My Account</a></li>
                                        <li><a href="bulkinquery">Bulk Inquiry</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-fluid">
                    <p className="footer-copyright">Copyright © 2024 Dickkny. All Rights Reserved.
                    </p>
                    <figure className="footer-payments">
                        <img src={require("../assets/images/payments.png")} alt="Payment methods" width="272" height="20" />
                    </figure>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
