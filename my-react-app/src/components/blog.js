import React from 'react';
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import Header from './header';
import Footer from './footer';
const BlogComponent = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="entry-container max-col-2" data-layout="fitRows">
                                <div className="entry-item col-sm-6">
                                    {/* First Blog Post Entry */}
                                </div>

                                <div className="entry-item col-sm-6">
                                    {/* Second Blog Post Entry */}
                                </div>

                                {/* Add more blog post entries as needed */}
                            </div>

                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    {/* Pagination */}
                                </ul>
                            </nav>
                        </div>

                        <aside className="col-lg-3">
                            <div className="sidebar">
                                <div className="widget widget-search">
                                    {/* Search Widget */}
                                </div>

                                <div className="widget widget-cats">
                                    {/* Categories Widget */}
                                </div>

                                <div className="widget">
                                    {/* Popular Posts Widget */}
                                </div>

                                <div className="widget widget-banner-sidebar">
                                    {/* Banner Ad Widget */}
                                </div>

                                <div className="widget">
                                    {/* Browse Tags Widget */}
                                </div>

                                <div className="widget widget-text">
                                    {/* About Blog Widget */}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default BlogComponent;
