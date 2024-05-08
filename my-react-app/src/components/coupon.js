import React, { useState, useEffect } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
import axios from 'axios'; // Import axios for making API requests

const CouponComponent = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        // Function to fetch coupons data from the API
        const fetchCoupons = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getAllCoupons'); // Adjust the API endpoint accordingly
                setCoupons(response.data);
            } catch (error) {
                console.error('Error fetching coupons:', error);
            }
        };

        fetchCoupons(); // Call the fetchCoupons function when the component mounts
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                {/* Breadcrumb navigation */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 ">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Coupon</li>
                        </ol>
                    </div>
                </nav>

                {/* Coupon content */}
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title text-center">Exclusive Offers Just For You!</h2>
                                {/* Map through the coupons array and render each coupon dynamically */}
                                {coupons.map(coupon => (
                                    <div key={coupon._id} className="coupon_box">
                                        <div className="coupon_content">
                                            <h5>{coupon.code}</h5>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" >
                                                    <g>
                                                        <path d="M271 512H80c-44.113 0-80-35.887-80-80V161c0-44.113 35.887-80 80-80h191c44.113 0 80 35.887 80 80v271c0 44.113-35.887 80-80 80zM80 121c-22.055 0-40 17.945-40 40v271c0 22.055 17.945 40 40 40h191c22.055 0 40-17.945 40-40V161c0-22.055-17.945-40-40-40zm351 261V80c0-44.113-35.887-80-80-80H129c-11.047 0-20 8.953-20 20s8.953 20 20 20h222c22.055 0 40 17.945 40 40v302c0 11.047 8.953 20 20 20s20-8.953 20-20zm0 0" fill="#003e70" opacity="1" data-original="#000000" className=""></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        <p>Upto {coupon.discountValue}% off for {coupon.code} from a great selection at Dickkny Store.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CouponComponent;
