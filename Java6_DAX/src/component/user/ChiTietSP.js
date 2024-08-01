import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ChiTietSP = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [imgProduct, setImgProduct] = useState(require('../../assets/img/iphone-15-den-1.jpg'));

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setImgProduct(response.data.imgUrl ? `/assets/img/${response.data.imgUrl}` : require('../../assets/img/iphone-15-den-1.jpg'));
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, [id]);

    const renderPhone = (imgNewProduct) => {
        setImgProduct(imgNewProduct);
    }

    return (
        <div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid mt-3 mb-3" style={{ width: '70%', marginLeft: '80px' }} src={imgProduct} alt="Card image cap" id="product-detail" />
                        </div>
                        {/* <div className="row">
                            <div className="col-4" onClick={() => renderPhone(require('../../assets/img/iphone-15-den-1.jpg'))}>
                                <button type="button">
                                    <img className="card-img img-fluid" src={require('../../assets/img/iphone-15-den-1.jpg')} alt="Product Image 1" />
                                </button>
                            </div>
                            <div className="col-4" onClick={() => renderPhone(require('../../assets/img/iphone-15-vang-1.jpg'))}>
                                <button type="button">
                                    <img className="card-img img-fluid" src={require('../../assets/img/iphone-15-vang-1.jpg')} alt="Product Image 2" />
                                </button>
                            </div>
                            <div className="col-4" onClick={() => renderPhone(require('../../assets/img/iphone-15-xanh-1.jpg'))}>
                                <button type="button">
                                    <img className="card-img img-fluid" src={require('../../assets/img/iphone-15-xanh-1.jpg')} alt="Product Image 3" />
                                </button>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{product.name}</h1>
                                <p className="h3 py-2">Giá: {product.price} VND</p>
                                {/* <p className="py-2">
                                    <i className="fa fa-star text-warning" />
                                    <i className="fa fa-star text-warning" />
                                    <i className="fa fa-star text-warning" />
                                    <i className="fa fa-star text-warning" />
                                    <i className="fa fa-star text-secondary" />
                                    <span className="list-inline-item text-dark">
                                        Rating 4.8 | 36 Comments
                                    </span>
                                </p> */}
                                <ul className="list-inline">
                                    {/* <li className="list-inline-item">
                                        <h6>Thương hiệu:</h6>
                                    </li> */}
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>{product.brand}</strong></p>
                                    </li>
                                </ul>
                                <h6>Mô tả:</h6>
                                <p>{product.description}</p>
                                {/* <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Có sẵn:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>In Stock</strong></p>
                                    </li>
                                </ul> */}
                                <h6>Thông số sản phẩm:</h6>
                                <ul className="list-unstyled pb-3">
                                    <li>• {product.spec1}</li>
                                    <li>• {product.spec2}</li>
                                    <li>• {product.spec3}</li>
                                    <li>• {product.spec4}</li>
                                </ul>
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-success btn-lg">Thêm vào giỏ hàng</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-success btn-lg">Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChiTietSP;
