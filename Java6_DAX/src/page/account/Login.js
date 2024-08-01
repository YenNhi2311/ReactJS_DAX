import React, { useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { useCookies } from 'react-cookie';
import '../../assets/css/fontawesome.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/slick-theme.css';
import '../../assets/css/slick-theme.min.css';
import '../../assets/css/slick.min.css';
import '../../assets/css/slick.min.css.map';
import '../../assets/css/templatemo.css';
import '../../assets/css/templatemo.min.css';
import '../../assets/css/login.css';

export default function Login(props) {
    const labelStyle = {
        fontWeight: 'bold',
    };

    const [cookies, setCookie] = useCookies(['token']);
    const [userLogin, setUserLogin] = useState({ taikhoan: '', matkhau: '' });
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosClient.post('/login', {
                username: userLogin.taikhoan,
                password: userLogin.matkhau,
            });
            // Xử lý phản hồi từ API
            console.log('API Response:', response);
            // Lưu token vào cookie và chuyển hướng người dùng
            if (response.accessToken) {
                setCookie('token', response.accessToken, { path: '/' });
                if (response.role === 'admin') {
                    window.location.href = '/admin';
                } else {
                    window.location.href = '/home';
                }
            } else {
                setError('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.');
            }
        } catch (error) {
            // Kiểm tra chi tiết lỗi từ server
            if (error.response) {
                console.error('Server responded with status:', error.response.status);
                console.error('Response data:', error.response.data);
                setError('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.');
            } else {
                console.error('Error:', error.message);
                setError('Có lỗi xảy ra. Vui lòng thử lại.');
            }
        }
    };

    return (
        <div>
            <div className='bodyLogin pt-5'>
                <div className='pt-5'>
                    <div className='box col-6 offset-3'>
                        <h1>Đăng Nhập</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="in col-10">
                                <label style={labelStyle} htmlFor="exampleFormControlInput1" className="labelform">Tên đăng nhập:</label>
                                <input type="text" className="form-control" placeholder="" name="taikhoan" onChange={handleChange} />
                            </div>

                            <div className="in col-10">
                                <label style={labelStyle} htmlFor="exampleFormControlInput1" className="labelform">Mật khẩu:</label>
                                <input type="password" className="form-control" name="matkhau" onChange={handleChange} />
                            </div>

                            <div className='row'>
                                <div className='in col-4'>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">Lưu mật khẩu</label>
                                </div>

                                <div className='in2 col-3'>
                                    <a className="link" href="/forgot-password">Quên mật khẩu</a>
                                </div>
                            </div>

                            <button type="submit" className='btnLogin btn btn-primary'>Đăng nhập</button>

                            {error && <p className="text-danger">{error}</p>}

                            <p></p>
                            <a className='link1' href="/register">Bạn chưa có tài khoản?</a>
                            <a className='link2' href="/register"><span>Đăng ký</span></a>
                            <p></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
