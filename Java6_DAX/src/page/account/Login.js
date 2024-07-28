import React, { useState } from 'react';
import '../../assets/css/fontawesome.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/slick-theme.css';
import '../../assets/css/slick-theme.min.css';
import '../../assets/css/slick.min.css';
import '../../assets/css/slick.min.css.map';
import '../../assets/css/templatemo.css';
import '../../assets/css/templatemo.min.css';
import '../../assets/css/login.css';

// import hinh anh

export default function Login(props) {

    const labelStyle = {
        fontWeight: 'bold',
    };

    const [userLogin, setUserLogin] = useState({ taikhoan: '', matkhau: '' })

    console.log(userLogin)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        });

    }


    return (
        <div>
            <div>
                <body className='bodyLogin pt-5'>
                    <div className='pt-5'>
                        <div className='box col-6 offset-3'>
                            <h1>Đăng Nhập</h1>

                            <div className="in col-10">
                                <label style={labelStyle} htmlFor="exampleFormControlInput1" className="labelform ">Tên đăng nhập:</label>
                                <input type="text" className="form-control" placeholder="" name="taikhoan"  onClick={handleChange}/>
                            </div>

                            <div className="in col-10">
                                <label style={labelStyle} htmlFor="exampleFormControlInput1" className="labelform ">Mật khẩu:</label>
                                <input type="password" className="form-control" name="matkhau" onClick={handleChange} />
                            </div>

                            <div className='row'>
                                <div className='in col-4'>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Lưu mật khẩu
                                    </label>
                                </div>

                                <div className='in2 col-3'>
                                    <a className="link" href="/forgot-password">
                                        Quên mật khẩu
                                    </a>
                                </div>
                            </div>

                            <a className='btnLogin btn btn-primary' role="button" href="/login">
                                Đăng nhập
                            </a>
                            <p></p>

                            <a className='link1' href="/register">
                                Bạn chưa có tài khoản?
                            </a>
                            <a className='link2' href="/register">
                                <span>Đăng ký</span>
                            </a>
                            <p></p>

                            <a className='btn-link' href="https://vi-vn.facebook.com/"><button type="button" className='btn btn-link btn-floating mx-1'>
                                <i class="fab fa-facebook-f"></i>
                            </button></a>

                            <a href="https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=AaSxoQz58_g6PX3CbYOWteOz9gmgH-miEXZ5m4nbi_t4ztyaMSR0H4hgtZhfmLj21QBMp7Re
                          dIAX&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1676991987%3A1716096357083963&ddm=0">
                                <button type="button" className='btn btn-link btn-floating mx-1'>
                                    <i class="fa-brands fa-google"></i>
                                </button></a>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}
