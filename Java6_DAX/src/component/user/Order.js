import React from "react";
import { Card, Button } from "react-bootstrap";
import request from "../../config/ApiConfig/index"; // Đảm bảo đường dẫn đúng với nơi bạn lưu trữ file request.js

const Order = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <Card className="order-item mb-3 bg-light" key={order.orderId}>
          <Card.Body className="d-flex align-items-center mb-3">
            <div className="container bg-white">
              <div className="p-3">
                <div className="section1 mb-3">
                  <div style={{ display: "inline-block" }}>
                    <span style={{ fontWeight: 600, marginRight: "10px" }}>
                      {order.user.fullname}
                    </span>
                    <span> -</span>
                    <span
                      style={{
                        padding: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      {order.address.addressName}
                    </span>
                    <span
                      style={{
                        padding: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      ({order.user.phoneNumber})
                    </span>
                  </div>
                  <div className="float-end text-success">
                    {order.status.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="section2">
                  {(order.orderDetails || []).map((orderDetail, index) => (
                    <div className="row mb-2" key={index}>
                      <div className="col-2">
                        <img
                          src={orderDetail.product.imgUrl}
                          alt=""
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                      <div className="col-8">
                        <span style={{ fontWeight: 400, fontSize: "20px" }}>
                          {orderDetail.product.name}
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontWeight: 500,
                            marginBottom: "10px",
                          }}
                        >
                          x{orderDetail.quantity}
                        </span>
                      </div>
                      <div
                        className="col-2"
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: "green" }}>
                          {orderDetail.unitPrice} VND
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div
                  className="section3"
                  style={{
                    justifyContent: "end",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Thành tiền:</span>
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "20px",
                      color: "green",
                    }}
                  >
                    {order.totalAmount} VND
                  </span>
                </div>
                <div
                  className="section4"
                  style={{
                    justifyContent: "end",
                    display: "flex",
                    marginTop: "20px",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{
                      color: "white",
                      borderRadius: 0,
                      marginRight: "10px",
                    }}
                  >
                    Liên hệ người bán
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ borderRadius: 0 }}
                  >
                    Hủy đơn
                  </button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Order;
