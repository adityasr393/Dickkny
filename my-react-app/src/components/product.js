import React, { useState } from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const Product = () => {
  const [selectedImage, setSelectedImage] = useState('');

  // Function to handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Header />
      <div>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container-fluid d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/home">Home</a></li>
              <li className="breadcrumb-item"><a href="/product">Products</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dark Blue Jeans</li>
            </ol>
          </div>
        </nav>

        <div className="container-fluid mt-4">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                <div className="product-gallery product-gallery-vertical">
                  <div className="row">
                    <figure className="product-main-image">
                      <img id="product-zoom" src={selectedImage || require("../assets/images/jea2.jpg")} alt="product image" />

                      <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                        <i className="icon-arrows"></i>
                      </a>
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery">
                      <a className="product-gallery-item active" href="#" onClick={() => handleImageSelect(require("../assets/images/pro.jpg"))}>
                        <img src={require("../assets/images/pro.jpg")} alt="product side" />
                      </a>

                      <a className="product-gallery-item" href="#" onClick={() => handleImageSelect(require("../assets/images/pro1.jpg"))}>
                        <img src={require("../assets/images/pro1.jpg")} alt="product cross" />
                      </a>

                      <a className="product-gallery-item" href="#" onClick={() => handleImageSelect(require("../assets/images/pro3.jpg"))}>
                        <img src={require("../assets/images/pro3.jpg")} alt="product with model" />
                      </a>

                      <a className="product-gallery-item" href="#" onClick={() => handleImageSelect(require("../assets/images/pro4.jpg"))}>
                        <img src={require("../assets/images/pro4.jpg")} alt="product back" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title">Dark Blue Jeans</h1>

                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: '80%' }}></div>
                    </div>
                    <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                  </div>

                  <div className="product-price">
                    ₹184.00
                  </div>

                  <div className="product-content">
                    <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
                  </div>

                  <div className="details-filter-row details-row-size">
                    <label>Color:</label>

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img src={require("../assets/images/jeansi.svg")} alt="product desc" />
                      </a>
                      <a href="#">
                        <img src={require("../assets/images/jeansi3.svg")} alt="product desc" />
                      </a>
                    </div>
                  </div>

                  <div className="details-filter-row details-row-size">
                    <label htmlFor="size">Size:</label>
                    <div className="select-custom">
                      <select name="size" id="size" className="form-control">
                        <option value="#" selected="selected">Select a size</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                      </select>
                    </div>
                    <button type="button" className="size-guide" data-toggle="modal" data-target="#exampleModal"><i className="icon-th-list"></i>size guide</button>
                  </div>

                  {/* Size Guide Modal */}
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Size Guide</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {/* Add size guide image here */}
                          <img src="" alt="size guide" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="product-details-action">
                    <div className="details-action-col">
                      <div className="product-details-quantity">
                        <input type="number" id="qty" className="form-control" defaultValue="1" min="1" max="10" step="1" data-decimals="0" required />
                      </div>
                      <button className="btn-product btn-cart" title="Add to Cart"><span>add to cart</span></button>
                    </div>

                    <div className="details-action-wrapper">
                      <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                      <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>

                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">Jeans</a>
                    </div>

                    <div className="social-icons social-icons-sm">
                      <span className="social-label">Share:</span>
                      <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                      <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                      <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                      <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional Information</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
              </li>
            </ul>

            {/* Product details tab content */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.</p>
              </div>
              <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Material:</td>
                      <td>Cotton</td>
                    </tr>
                    <tr>
                      <td>Model:</td>
                      <td>Model is wearing a size M</td>
                    </tr>
                    <tr>
                      <td>Care:</td>
                      <td>Machine Wash</td>
                    </tr>
                    <tr>
                      <td>Origin:</td>
                      <td>India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                <div className="product-shipping">
                  <h6>Delivery & returns</h6>
                  <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                </div>
              </div>
              <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                <div className="reviews">
                  {/* Product Reviews */}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="container-fluid relat_product">
            <h2 className="title text-center mb-4">Related Products</h2>
            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
              data-owl-options='{
                "nav": false,
                "dots": true,
                "margin": 20,
                "loop": false,
                "responsive": {
                  "0": {
                    "items":2
                  },
                  "480": {
                    "items":2
                  },
                  "768": {
                    "items":3
                  },
                  "992": {
                    "items":4
                  },
                  "1200": {
                    "items":4,
                    "nav": true,
                    "dots": false
                  }
                }
              }'>
              {/* Related Products */}
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <a href="/product">
                    <img src={require("../assets/images/jea5.JPG")} alt="Product image" className="product-image" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                  </div>
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>
                </figure>
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Jackets</a>
                  </div>
                  <h3 className="product-title"><a href="/product">Brown pant and Jeans</a></h3>
                  <div className="product-price">
                    ₹260.00
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: '20%' }}></div>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  <div className="product-nav product-nav-thumbs">
                    <a href="#" className="active">
                      <img src={require("../assets/images/jea2.jpg")} alt="product desc" />
                    </a>
                    <a href="#">
                      <img src={require("../assets/images/jea5.JPG")} alt="product desc" />
                    </a>
                    <a href="#">
                      <img src={require("../assets/images/jea8.JPG")} alt="product desc" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Related Products */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
