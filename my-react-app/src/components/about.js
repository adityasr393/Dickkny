import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const AboutComponent = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About us</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content pb-0">
                <div className="container-fluid abouts_top mb-5">
                    <div className="row aboutsbanneer">
                        <div className="col-lg-6">  
                            <div className="leftbanner">
                                <img src={require("../assets/images/abouts_us.jpg")} alt="About Us" />
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <h2 className="title">Our Vision</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit...</p>
                            <h2 className="title">Our Mission</h2>
                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus...</p>
                        </div>
                    </div>
                </div>

                <div className="bg-image pt-7 pb-5 pt-md-12 pb-md-9" style={{backgroundImage: 'url(assets/images/backgrounds/bg-4.jpg)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="40" data-speed="3000" data-refresh-interval="50">0</span>k+
                                    </div>
                                    <h3 className="count-title text-white">Happy Customer</h3>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="20" data-speed="3000" data-refresh-interval="50">0</span>+
                                    </div>
                                    <h3 className="count-title text-white">Years in Business</h3>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="95" data-speed="3000" data-refresh-interval="50">0</span>%
                                    </div>
                                    <h3 className="count-title text-white">Return Clients</h3>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="15" data-speed="3000" data-refresh-interval="50">0</span>
                                    </div>
                                    <h3 className="count-title text-white">Awards Won</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light-2 pt-6 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title">Who We Are</h2>
                                <p className="lead text-primary mb-3">Pellentesque odio nisi, euismod pharetra a ultricies <br/>in diam. Sed arcu. Cras consequat</p>
                                <p className="mb-2">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>

                                <a href="blog" className="btn btn-sm btn-minwidth btn-outline-primary-2">
                                    <span>VIEW OUR NEWS</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src={require("../assets/images/about/img-1.jpg")} alt="" className="about-img-front" />
                                    <img src={require("../assets/images/about/img-2.jpg")} alt="" className="about-img-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" pt-6 pb-7 ">
                    <div className="container-fluid">
                        <h2 className="title text-center mb-4">Meet Our Team</h2>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="member member-2 text-center">
                                    <figure className="member-media">
                                        <img src={require("../assets/images/team/about-2/member-1.jpg")} alt="member photo" />
                                        <figcaption className="member-overlay">
                                            <div className="social-icons social-icons-simple">
                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className="member-content">
                                        <h3 className="member-title">Samanta Grey<span>Founder & CEO</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="member member-2 text-center">
                                    <figure className="member-media">
                                        <img src={require("../assets/images/team/about-2/member-2.jpg")} alt="member photo" />
                                        <figcaption className="member-overlay">
                                            <div className="social-icons social-icons-simple">
                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className="member-content">
                                        <h3 className="member-title">Bruce Sutton<span>Product Manager</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="member member-2 text-center">
                                    <figure className="member-media">
                                        <img src={require("../assets/images/team/about-2/member-3.jpg")} alt="member photo" />
                                        <figcaption className="member-overlay">
                                            <div className="social-icons social-icons-simple">
                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className="member-content">
                                        <h3 className="member-title">Veronica Mays<span>Product Designer</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="member member-2 text-center">
                                    <figure className="member-media">
                                        <img src={require("../assets/images/team/about-2/member-4.jpg")} alt="member photo" />
                                        <figcaption className="member-overlay">
                                            <div className="social-icons social-icons-simple">
                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className="member-content">
                                        <h3 className="member-title">James Richardson<span>Software Engineer</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <a href="blog" className="btn btn-sm btn-minwidth-lg btn-outline-primary-2">
                                <span>LETS START WORK</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about-testimonials bg-light-2 pt-6 pb-6">
                    <div className="container-fluid">
                        <h2 className="title text-center mb-3">What Customer Say About Us</h2>
                        <div className="owl-carousel owl-theme owl-testimonials" data-toggle="owl">
                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus quet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis. ”</p>
                                <cite>
                                    Jenson Gregory
                                    <span>Customer</span>
                                </cite>
                            </blockquote>

                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusand. ”</p>
            
                                <cite>
                                    Victoria Ventura
                                    <span>Customer</span>
                                </cite>
                            </blockquote>
            
                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab, modi animi. ”</p>
            
                                <cite>
                                    Angelica Lynch
                                    <span>Customer</span>
                                </cite>
                            </blockquote>
            
                            <blockquote className="testimonial testimonial-icon text-center">
                                <p>“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab. ”</p>
            
                                <cite>
                                    John Smith
                                    <span>Customer</span>
                                </cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default AboutComponent;
