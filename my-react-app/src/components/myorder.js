import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const MyOrder = () => {
    return (
        <><Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="dashboard">My Account</a></li>
                        <li className="breadcrumb-item active" aria-current="page">My Orders</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="orders_new">
                                    <p>ORDER# 111111</p>
                                    <div className="order_list">
                                        <div className="order_img">
                                            <img src={require("../assets/images/skinny.jpg")} alt="Product image" />
                                        </div>
                                        <div className="order_content">
                                            <h5>Womens Skinny Jeans</h5>
                                            <p>Size: M</p>
                                            <p>Price: 130</p>
                                            <p>Address: 72 kisan market , Sanganer , Jaipur Rajashtan 302029</p>
                                            <p>Payment: Online</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="orders_new">
                                    <p>ORDER# 22223</p>
                                    <div className="order_list">
                                        <div className="order_img">
                                            <img src={require("../assets/images/skinny.jpg")} alt="Product image" />
                                        </div>
                                        <div className="order_content">
                                            <h5>Womens Skinny Jeans</h5>
                                            <p>Size: M</p>
                                            <p>Price: 130</p>
                                            <p>Address: 72 kisan market , Sanganer , Jaipur Rajashtan 302029</p>
                                            <p>Payment: Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/></>
    );
};

export default MyOrder;
