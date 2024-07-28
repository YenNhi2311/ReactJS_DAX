import React, { Component } from 'react';
// import bannerImage from '../assets/img/ip.jpg'; // Import the image

export default class ThanhToan extends Component {
    render() {
        return (
            <div>
                {/* <div className="page-wrapper">
                    <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="container text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '100px', borderRadius: '110px' }}>
                            
                        </div> */}
                    {/* </div> */}
                  <div class="container mt-4">
    <div class="row">
        <div class="col-lg-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-light p-3 rounded shadow-sm">
                    <li class="breadcrumb-item">
                        <a href="/giohang" class="text-primary text-decoration-none">Giỏ hàng</a>
                    </li>
                    <li class="breadcrumb-item active text-dark" aria-current="page">
                        <a href="/ThanhToan" class="text-primary text-decoration-none">Thanh toán</a>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</div>

       

                <div className="row pt-5 p-3">
                    <div className="col-6">
                        <h5 style={{ textAlign: 'center' }}>Thông tin đặt hàng</h5>
                        <div className="col-8 offset-2 pt-4">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="customerName" className="form-label">Tên khách hàng</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="customerName"
                                        aria-describedby="helpId"
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Địa chỉ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        aria-describedby="helpId"
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phoneNumber"
                                        aria-describedby="helpId"
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="helpId"
                                        placeholder=""
                                    />
                                </div>

                                <hr />
                                <div className="pt-3">
                                    <a
                                        type="button"
                                        className="btn btn-primary"
                                        style={{ width: '100%' }}
                                        href="/VNPAY" // Corrected href
                                    >
                                        Thanh toán qua VNPAY
                                    </a>
                                </div>
                                <div className="pt-3">
                                    <a
                                        type="button"
                                        className="btn btn-success"
                                        style={{ width: '100%' }}
                                        href="/history" // Corrected href
                                    >
                                        Thanh toán khi nhận hàng
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div
                            className="col-8 offset-2"
                            style={{ border: '1px solid rgb(168, 167, 167)', padding: '20px' }}
                        >
                            <h5 style={{ textAlign: 'center' }}>Đơn hàng</h5>
                            <div className="row pt-3">
                                <div className="col-6">
                                    <h6>Sản phẩm</h6>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Iphone 14 pro max</h5>
                                        <p style={{ fontSize: '18px' }}>
                                            Phiên bản 128GB
                                        </p>
                                    </div>
                                    <div className="col-2">
                                        <p>x1</p>
                                    </div>
                                    <div className="col-4">
                                        <h6>39.000 VND</h6>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="row pt-3">
                                <div className="col-6">
                                    <h6>Phí vận chuyển:</h6>
                                </div>
                                <div className="col-6">
                                    <h6>Miễn phí</h6>
                                </div>
                            </div>

                            <div className="row pt-3">
                                <div className="col-6">
                                    <h6>Giảm giá:</h6>
                                </div>
                                <div className="col-6">
                                    <h6>0</h6>
                                </div>
                            </div>

                            <hr />
                            <div className="row pt-3">
                                <div className="col-6">
                                    <h6>Tổng tiền:</h6>
                                </div>
                                <div className="col-6">
                                    <h5>27.000.000 VND</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
