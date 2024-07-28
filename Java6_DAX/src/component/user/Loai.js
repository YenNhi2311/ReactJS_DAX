import React, { Component } from 'react'


export default class Loai extends Component {
    render() {
        return (
            <div>
                <div className="row text-center pt-3">
                    {/* <div className="col-lg-6 m-auto">
                        <h1 className="h1">Loại Sản Phẩm</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-3 p-5 mt-3">
                        <a href="#"><img src={require('../../assets/img/smartphone3.jpg')} className="rounded-circle img-fluid border" /></a>
                        <h5 className="text-center mt-3 mb-3">Điện thoại</h5>
                        <p className="text-center"><a className="btn btn-success">Mua ngay</a></p>
                    </div>
                    <div className="col-3 p-5 mt-3">
                        <a href="#"><img src={require('../../assets/img/smartwatch.png')} className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Đồng hồ</h2>
                        <p className="text-center"><a className="btn btn-success">Mua ngay</a></p>
                    </div>
                    <div className="col-3  p-5 mt-3">
                        <a href="#"><img src={require('../../assets/img/maylanh.jpg')} className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Máy lạnh</h2>
                        <p className="text-center"><a className="btn btn-success">Mua ngay</a></p>
                    </div>
                    <div className="col-3  p-5 mt-3">
                        <a href="#"><img src={require('../../assets/img/phukien.jpg')} className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Phụ kiện</h2>
                        <p className="text-center"><a className="btn btn-success">Mua ngay</a></p>
                    </div>
                 
                </div>
            </div>
        )
    }
}
