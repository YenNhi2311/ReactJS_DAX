import React, { Component } from "react";
import "../../assets/css/fontawesome.css";
import "../../assets/css/fontawesome.min.css";
import "../../assets/css/slick-theme.css";
import "../../assets/css/slick-theme.min.css";
import "../../assets/css/slick.min.css";
import "../../assets/css/templatemo.css";
import "../../assets/css/templatemo.min.css";

export default class GioHang extends Component {
  render() {
    return (
      <div className="row p-3 pt-6">
        <div
          className="col-8"
          style={{ borderRight: "2px solid rgb(202, 200, 200)" }}
        >
          <div
            className="table-responsive"
            style={{ height: "500px", overflow: "auto" }}
          >
            <table className="table">
              <thead>
                <tr style={{ alignItems: "center", textAlign: "center" }}>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col"></th>
                  <th scope="col">Giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tạm tính</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(1)].map((_, index) => (
                  <tr key={index}>
                    <td scope="col">
                      <img
                        className="img-fluid"
                        src={require("../../assets/img/th.jpg")}
                        alt=""
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      <h5>Iphone 14 pro max</h5>
                    </td>
                    <td
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      27.000.000 VND
                    </td>
                    <td
                      style={{
                        verticalAlign: "middle",
                        textAlign: "center",
                        width: "130px",
                      }}
                    >
                      <div className="form-info__action">
                        <button
                          type="button"
                          id="increase"
                          className="btn form-action__handle form-action__handle--blue form-action__handle--circle"
                        >
                          -
                        </button>
                        <input
                          id="quantity"
                          className="form-action__quantity ms-2 me-2"
                          type="text"
                          value="1"
                          name="quantity"
                          readOnly
                          style={{
                            border: "none",
                            width: "10px",
                            fontSize: "15px",
                            fontWeight: "bold",
                          }}
                        />
                        <button
                          type="button"
                          id="decrease"
                          className="btn form-action__handle form-action__handle--blue form-action__handle--circle"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td
                      style={{ verticalAlign: "middle", textAlign: "center" }}
                    >
                      27.000.000 VND
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <i className="fa-solid fa-square-xmark"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-4">
          <div className="text-center">
            <h4 className="text">Tổng hóa đơn</h4>
          </div>
          <div
            className="row pt-3"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <div className="col-6">
              <p>Tạm tính:</p>
            </div>
            <div className="col-6">
              <h6>27.000.000 VND</h6>
            </div>
          </div>

          <div
            className="row pt-3"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <div className="col-6">
              <p>Giao hàng đến:</p>
            </div>
            <div className="col-6">
              <h6>lê bình,cái răng,cần thơ</h6>
            </div>
          </div>

          <div
            className="row pt-3"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <div className="col-6">
              <p>Phí vận chuyển:</p>
            </div>
            <div className="col-6">
              <h6>Miễn phí</h6>
            </div>
          </div>

          <div
            className="row pt-3"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <div className="col-6">
              <p>Tổng đơn hàng:</p>
            </div>
            <div className="col-6">
              <h6>27.000.000 VND</h6>
            </div>
          </div>
          <div className="pt-3">
            <a
              type="button"
              className="btn btn-success"
              style={{ width: "100%" }}
              href="/ThanhToan" // Corrected href
            >
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    );
  }
}
