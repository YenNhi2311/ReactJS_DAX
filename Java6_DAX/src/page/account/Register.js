import React, { Component } from 'react';
import '../../assets/css/fontawesome.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/slick-theme.css';
import '../../assets/css/slick-theme.min.css';
import '../../assets/css/slick.min.css';
import '../../assets/css/templatemo.css';
import '../../assets/css/templatemo.min.css';
import '../../assets/css/login.css';

// import hinh anh

export default class Login extends Component {
    render() {
        // const labelStyle = {
        //     fontWeight: 'bold',
        //     // Các thuộc tính CSS khác có thể được thêm vào đây
        // };

        return (
            <div>
                <body className='bodyLogin pt-5'>
                    
                        <div className='box col-8 offset-2'>
                            <h1>Đăng Ký</h1>

                            <div style={{ marginTop: '40px' }} className="row">
                                <div className="col-6">
                                    <div className="inRes">
                                        <label style={{ color: 'black', fontSize: '18px' }} className="form-label">
                                            Tên đăng nhập:
                                        </label>
                                        <input
                                            name="username"
                                            type="text"
                                            className="inpRes form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="inRes">
                                        <label style={{ color: 'black', fontSize: '18px' }} className="form-label">
                                            Họ và tên:
                                        </label>
                                        <input
                                            name="fullname"
                                            type="text"
                                            className="inpRes form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '20px' }} className="row">
                                <div className="col-6">
                                    <div className="inRes">
                                        <label style={{ color: 'black', fontSize: '18px' }} className="form-label">
                                            Mật khẩu:
                                        </label>
                                        <input
                                            name="pass"
                                            type="password"
                                            className="inpRes form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="inRes">
                                        <label style={{ color: 'black', fontSize: '18px' }} className="form-label">
                                            Xác nhận mật khẩu:
                                        </label>
                                        <input
                                            name="confirmpass"
                                            type="password"
                                            className="inpRes form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '20px' }} className="row">
                                <div className="col-6">
                                    <div className="inRes">
                                        <label style={{ color: 'black', fontSize: '18px' }} className="form-label">
                                            Email:
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="inpRes form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="inRes">
                                        <label style={{ color: 'black', fontSize: '18px' }} className="form-label">
                                            Số điện thoại:
                                        </label>
                                        <input
                                            name="phone"
                                            type="text"
                                            className="inpRes form-control"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                            </div>   

                            <div style={{ marginTop: '20px' }} className="inRes col-10">
                                <label htmlFor="exampleFormControlInput1" className="labelform ">Địa chỉ:</label>
                                <input type="text" className="inpAddress form-control" placeholder="" />
                            </div>                         

                            <button className='btnRes btn btn-primary' type="button">
                                Đăng ký
                            </button>
                            <p></p>  
                            <a className='back' href="/login"><button type="button" className='btn btn-floating mx-1'>
                            <i class="fa-solid fa-arrow-left">Quay lại</i>
                            </button></a>
                            {/* <i class="fa-solid fa-arrow-left"></i><span>Quay lại</span>                           */}
                        </div>                    
                </body>
            </div>
        );
    }
}