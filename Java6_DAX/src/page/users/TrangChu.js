import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/fontawesome.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/slick-theme.css';
import '../../assets/css/slick-theme.min.css';
import '../../assets/css/slick.min.css';
import '../../assets/css/templatemo.css';
import '../../assets/css/templatemo.min.css';
// import '../../assets/css/carousel.css'; // Import CSS cho carousel

// Import các thành phần
import SanPhamNoiBat from '../../component/user/SanPhamNoiBat';
import Loai from '../../component/user/Loai';

export default function TrangChu() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {/* Modal */}
            <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <form method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Banner Hero */}
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    {products.map((_, index) => (
                        <li key={index} data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} />
                    ))}
                </ol>
                <div className="carousel-inner">
                    {products.map((product, index) => (
                        <div key={product.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="container">
                                <div className="row p-5">
                                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                        <img className="img-fluid" src={`/assets/img/${product.imgUrl}`} alt={product.name} />
                                    </div>
                                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                                        <div className="text-align-left">
                                            <h1 className="h1 text-success"><b>{product.name}</b></h1>
                                            <h3 className="h2">{product.description}</h3>
                                            <p>
                                                {/* {product.description} */}
                                                <Link className="btn btn-success text-white mt-2" to={`/chitiet/${product.id}`}>
                                                            Chi tiết
                                                        </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left" />
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right" />
                </a>
            </div>

            {/* Categories of The Month */}
            <section className="container py-5">
                <Loai/>
            </section>

            {/* Featured Product */}
            <section className="bg-light">
                <SanPhamNoiBat/>
            </section>
        </div>
    );
}
