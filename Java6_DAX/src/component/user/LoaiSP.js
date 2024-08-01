import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

export default class LoaiSP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            filteredProducts: [], // Danh sách sản phẩm đã lọc
            searchQuery: '',
            openItem: null,
            currentPage: 1,
            productsPerPage: 6,
            sortOption: 'Nổi bật' // Lựa chọn sắp xếp mặc định
        };
    }

    componentDidMount() {
        this.fetchCategories();
        this.fetchProducts();
    }

    fetchCategories() {
        axios.get('http://localhost:8080/api/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }

    fetchProducts() {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                this.setState({ products: response.data, filteredProducts: response.data });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        this.setState({ searchQuery: query });

        if (query) {
            const filteredProducts = this.state.products.filter(product =>
                product.name.toLowerCase().includes(query)
            );
            this.setState({ filteredProducts, currentPage: 1 }, this.sortProducts);
        } else {
            this.setState({ filteredProducts: this.state.products, currentPage: 1 }, this.sortProducts);
        }
    }

    handleToggle = (id) => {
        this.setState(prevState => ({
            openItem: prevState.openItem === id ? null : id
        }));
    };

    handlePageChange = (newPage) => {
        this.setState({ currentPage: newPage });
    }

    handleSortChange = (event) => {
        this.setState({ sortOption: event.target.value }, this.sortProducts);
    }

    sortProducts = () => {
        const { filteredProducts, sortOption } = this.state;
        let sortedProducts = [...filteredProducts];

        switch (sortOption) {
            case 'Nổi bật':
                // Implement sorting logic for "Nổi bật"
                break;
            case 'Giảm giá':
                sortedProducts.sort((a, b) => b.discount - a.discount);
                break;
            case 'Thấp đến cao':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'Cao đến thấp':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        this.setState({ filteredProducts: sortedProducts });
    }

    render() {
        const { categories, filteredProducts, searchQuery, openItem, currentPage, productsPerPage, sortOption } = this.state;

        // Logic for displaying current products
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            {categories.map(category => (
                                <li className="pb-3" key={category.id}>
                                    <a
                                        className={`d-flex justify-content-between h3 text-decoration-none ${openItem === category.id ? '' : 'collapsed'}`}
                                        onClick={() => this.handleToggle(category.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {category.categoryName}
                                        <i className={`fa fa-fw ${openItem === category.id ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'} mt-1`}></i>
                                    </a>
                                    <ul className={`collapse ${openItem === category.id ? 'show' : ''} list-unstyled pl-3`}>
                                        {category.products.map(product => (
                                            <li key={product.id}>
                                                <Link className="text-decoration-none" to={`/product/${product.id}`}>{product.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tìm sản phẩm..."
                                        value={searchQuery}
                                        onChange={this.handleSearch}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <select className="form-control" value={sortOption} onChange={this.handleSortChange}>
                                        <option>Nổi bật</option>
                                        <option>Giảm giá</option>
                                        <option>Thấp đến cao</option>
                                        <option>Cao đến thấp</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {currentProducts.map(product => (
                                <div className="col-md-4" key={product.id}>
                                    <div className="card mb-4 product-wap rounded-0">
                                        <div className="card rounded-0">
                                            <img
                                                className="card-img rounded-0 img-fluid"
                                                src={`/assets/img/${product.imgUrl}`}
                                                alt={product.name}
                                            />
                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link className="btn btn-success text-white mt-2" to={`/chitiet/${product.id}`}>
                                                            <i className="far fa-eye" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="btn btn-success text-white mt-2" to={`/giohang`}>
                                                            <i className="fas fa-cart-plus" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`/chitiet/${product.id}`} className="h3 text-decoration-none">
                                                {product.name}
                                            </Link>
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
                                            <p className="text-center mb-0">${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <nav>
                                    <ul className="pagination">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => this.handlePageChange(currentPage - 1)}>Previous</button>
                                        </li>
                                        {[...Array(totalPages)].map((_, index) => (
                                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => this.handlePageChange(index + 1)}>{index + 1}</button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => this.handlePageChange(currentPage + 1)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
