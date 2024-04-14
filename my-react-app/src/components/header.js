import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
const Header = () => {
    return (
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
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product">Blue utility pinafore denim Jeans</a>
                                            </h4>
                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x   76.00
                                            </span>
                                        </div>
                                        <figure className="product-image-container">
                                            <a href="product" className="product-image">
                                                <img src={require("../assets/images/products/jea5.JPG")} alt="product" />
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-cart-total">
                                    <span>Total</span>
                                    <span className="cart-total-price">76.00</span>
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
        </header>
    );
};

export default Header;
