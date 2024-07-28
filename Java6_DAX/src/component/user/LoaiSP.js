import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
export default class LoaiSP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openItem: null // Mặc định không có mục nào mở
        };
    }

    handleToggle = (id) => {
        this.setState({ openItem: this.state.openItem === id ? null : id });
    };
    render() {
        const { openItem } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a
                                    className={`d-flex justify-content-between h3 text-decoration-none ${openItem === 'collapseGender' ? '' : 'collapsed'}`}
                                    onClick={() => this.handleToggle('collapseGender')}
                                >
                                    Laptop
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul
                                    id="collapseGender"
                                    className={`collapse ${openItem === 'collapseGender' ? 'show' : ''} list-unstyled pl-3`}
                                >
                                    <li><a className="text-decoration-none" href="#">Macbook</a></li>
                                    <li><a className="text-decoration-none" href="#">Asus</a></li>
                                    <li><a className="text-decoration-none" href="#">Acer</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a
                                    className={`d-flex justify-content-between h3 text-decoration-none ${openItem === 'collapseSale' ? '' : 'collapsed'}`}
                                    onClick={() => this.handleToggle('collapseSale')}
                                >
                                    Điện Thoại
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul
                                    id="collapseSale"
                                    className={`collapse ${openItem === 'collapseSale' ? 'show' : ''} list-unstyled pl-3`}
                                >
                                    <li><a className="text-decoration-none" href="#">Iphone</a></li>
                                    <li><a className="text-decoration-none" href="#">Samsung</a></li>
                                    <li><a className="text-decoration-none" href="#">Oppo</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a
                                    className={`d-flex justify-content-between h3 text-decoration-none ${openItem === 'collapseProduct' ? '' : 'collapsed'}`}
                                    onClick={() => this.handleToggle('collapseProduct')}
                                >
                                    Đồng hồ
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul
                                    id="collapseProduct"
                                    className={`collapse ${openItem === 'collapseProduct' ? 'show' : ''} list-unstyled pl-3`}
                                >
                                    <li><a className="text-decoration-none" href="#">Apple Watch</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                {/* <div className="d-flex">
                                    <select className="form-control">
                                        <option>Nổi bật</option>
                                        <option>Giảm giá</option>
                                        <option>Thấp đến cao</option>
                                        <option>Cao đến thấp</option>
                                       
                                    </select>
                                </div> */}
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Nổi bật</option>
                                        <option>Giảm giá</option>
                                        <option>Thấp đến cao</option>
                                        <option>Cao đến thấp</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={require('../../assets/img/shop_01.jpg')} />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">

                                                <li><Link className="btn btn-success text-white mt-2" to='/chitiet'><i className="far fa-eye" /></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to='/giohang'><i className="fas fa-cart-plus" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/chitiet" className="h3 text-decoration-none">Oupidatat non</Link>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={require('../../assets/img/shop_01.jpg')} />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">

                                                <li><Link className="btn btn-success text-white mt-2" to='/chitiet'><i className="far fa-eye" /></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to='/giohang'><i className="fas fa-cart-plus" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/chitiet" className="h3 text-decoration-none">Oupidatat non</Link>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={require('../../assets/img/shop_01.jpg')} />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">

                                                <li><Link className="btn btn-success text-white mt-2" to='/chitiet'><i className="far fa-eye" /></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to='/giohang'><i className="fas fa-cart-plus" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/chitiet" className="h3 text-decoration-none">Oupidatat non</Link>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={require('../../assets/img/shop_01.jpg')} />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">

                                                <li><Link className="btn btn-success text-white mt-2" to='/chitiet'><i className="far fa-eye" /></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to='/giohang'><i className="fas fa-cart-plus" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/chitiet" className="h3 text-decoration-none">Oupidatat non</Link>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={require('../../assets/img/shop_01.jpg')} />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">

                                                <li><Link className="btn btn-success text-white mt-2" to='/chitiet'><i className="far fa-eye" /></Link></li>
                                                <li><Link className="btn btn-success text-white mt-2" to='/giohang'><i className="fas fa-cart-plus" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Link to="/chitiet" className="h3 text-decoration-none">Oupidatat non</Link>
                                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                            <li>M/L/X/XL</li>
                                            <li className="pt-2">
                                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                                            <li>
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-warning fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                                <i className="text-muted fa fa-star" />
                                            </li>
                                        </ul>
                                        <p className="text-center mb-0">$250.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
