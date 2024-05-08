import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
import { jwtDecode } from 'jwt-decode';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        // Fetch featured products
        axios.get('http://localhost:3000/getAllProduct')
            .then(response => {
                // Check if response data contains products array
                if (response.data && response.data.data) {
                    this.setState({ products: response.data.data });
                } else {
                    console.error('Invalid response format: Missing data array');
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }
    addToCart = (productId, quantity) => {
        // Retrieve token from localStorage
        const token = localStorage.getItem('token');
    
        // Check if token is available
        if (!token) {
            console.error('Token not found. User may not be logged in.');
            return; // Optionally handle this case
        }
    
        // Decode the token to extract user information
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
    
        // Create payload including userId
        const payload = {
            userId: userId,
            productId: productId,
            quantity: quantity
        };
    
        // Make request to addToCart endpoint with the userId
        axios.post('http://localhost:3000/addToCart', payload)
            .then(response => {
                // Handle success
                console.log('Product added to cart:', productId);
            })
            .catch(error => {
                // Handle error
                console.error('Error adding product to cart:', error);
            });
    }
    
    addToWishlist = (productId) => {
        const token = localStorage.getItem('token');
    
        if (!token) {
            console.error('Token not found. User may not be logged in.');
            return;
        }
    
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
    
        const payload = {
            userId: userId,
            productId: productId
        };
    
        axios.post('http://localhost:3000/addToWishlist', payload)
            .then(response => {
                console.log('Product added to wishlist:', productId);
            })
            .catch(error => {
                console.error('Error adding product to wishlist:', error);
            });
    }

    render() {
        const { products } = this.state;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };

        return(
            <>
                <Header />
                <div className="bg-light-2 pt-4 pb-5 featured mt-5 mb-5">
                <div className="container-fluid">
                    <div className="heading heading-center mb-2">
                        <h2 className="title">FEATURED PRODUCTS</h2>
                    </div>
                    {/* Use Slider component with settings */}
                  
                </div>
          

                    {/* Render trending products */}
                    <div className="banner-group-1 product_news mt-5 mb-5 mt-4">
                        <h2 className="title text-center mb-2">Trending Products</h2>
                        <div className="container">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                                data-owl-options='{
                                    "nav": true,
                                    "dots": true,
                                    "margin": 20,
                                    "loop": true,
                                    "responsive": {
                                        "0": {"items":3},
                                        "480": {"items":3},
                                        "768": {"items":5},
                                        "992": {"items":5, "nav": true}
                                    }
                                }'>

<Slider {...settings}>
                                {/* Map through products array */}
                                {products.map(product => (
                                    <div className="product product-7 text-center" key={product._id}>
                                        {/* Container for image and button */}
                                        <div className="product-image-container" style={{ position: 'relative' }}>
                                            {/* Product Image */}
                                            <img src={product.image} alt={product.name} />
                                            {/* Transparent Add to Cart Button */}
                                            <div className="add-to-cart-btn-container">
                                                <button className="btn btn-transparent" onClick={() => this.addToCart(product._id, 1)}>Add to Cart</button>
                                                <button className="btn btn-transparent" onClick={() => this.addToWishlist(product._id)}>Add to Wishlist</button>

                                            </div>
                                        </div>
                                        {/* Product Name */}
                                        <h3>{product.name}</h3>
                                    </div>
                                ))}
                            </Slider>
                                
                            </div>
                        </div>
                    </div>


                    <div className="container four_section mt-5">
                        <h2 className="title text-center mb-2">Offers & Sales</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner">
                                    <a href="#">
                                        <img src={require("../assets/images/banner12.webp")} alt="Banner" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner">
                                    <a href="#">
                                        <img src={require("../assets/images/banners22.webp")} alt="Banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner">
                                    <a href="#">
                                        <img src={require("../assets/images/mens.jpg")} alt="Banner" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner">
                                    <a href="#">
                                        <img src={require("../assets/images/womens.jpg")} alt="Banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="bulk_inqu">
                        <div className="container">
                            <div className="cta cta-horizontal cta-horizontal-box bg-image mb-4 mb-lg-6" style={{backgroundImage: "url(assets/images/bulk_bg.jpg)"}}>
                                <div className="row flex-column flex-lg-row align-items-lg-center">
                                    <div className="col">
                                        <h3 className="cta-title text-primary">Streamline Your Procurement Process with Our Bulk Inquiry Service.</h3>
                                        <p className="cta-desc">Get Simplify your purchasing tasks by submitting bulk inquiries effortlessly. Enjoy competitive pricing and expedited responses for all your procurement needs, saving you time and effort.</p>
                                    </div>
                                    <div className="col-auto">
                                        <a href="bulk-inquery" className="btn btn-white-primary btn-round"><span>Bulk Inquiry</span><i className="icon-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="blog-posts mb-5">
                        <div className="container">
                            <h2 className="title text-center mb-2">From Our Blog</h2>
                            <div className="owl-carousel owl-simple mb-3" data-toggle="owl"
                                data-owl-options='{
                                    "nav": false,
                                    "dots": true,
                                    "items": 3,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {"items":2},
                                        "600": {"items":2},
                                        "992": {"items":3}
                                    }
                                }'>
                                <article className="entry">
                                    <figure className="entry-media">
                                        <a href="single-blog">
                                            <img src={require("../assets/images/jeans.jpg")} alt="image desc"/>
                                        </a>
                                    </figure>
                                    <div className="entry-body text-center">
                                        <div className="entry-meta">
                                            <a href="#">Nov 22, 2018</a>, 1 Comments
                                        </div>
                                        <h3 className="entry-title">
                                            <a href="single-blog">Sed adipiscing ornare.</a>
                                        </h3>
                                        <div className="entry-content">
                                            <a href="single-blog" className="read-more">Read More</a>
                                        </div>
                                    </div>
                                </article>
                                {/* Add more blog articles like the one above */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-light-2 pt-7 pb-6 testimonials">
                        <div className="container">
                            <h2 className="title text-center mb-2">Our Customers Say</h2>
                            <div className="owl-carousel owl-theme owl-testimonials" data-toggle="owl"
                                data-owl-options='{
                                    "nav": false,
                                    "dots": true,
                                    "margin": 20,
                                    "loop": true,
                                    "responsive": {
                                        "0": {"items":2},
                                        "768": {"items":2},
                                        "992": {"items":3},
                                        "1200": {"items":3, "nav": true}
                                    }
                                }'>
                                <blockquote className="testimonial testimonial-icon text-center">
                                    <p>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus quet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis. ”</p>
                                    <cite>
                                        Jenson Gregory
                                        <span>Customer</span>
                                    </cite>
                                </blockquote>
                                {/* Add more testimonials like the one above */}
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </>
        );
    }
}

export default Home;
