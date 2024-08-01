import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import request from "../../config/ApiConfig/index";
import Order from "../../component/user/Order";

const MainContent = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const fetchOrders = async (status) => {
    try {
      const response = await request({
        method: "GET",
        path: `/api/orders?status=${status === "all" ? "" : status}`,
      });
      setOrders(response);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  useEffect(() => {
    fetchOrders(selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    if (selectedStatus === "all") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter((order) => order.status === selectedStatus)
      );
    }
  }, [orders, selectedStatus]);

  return (
    <div className="main-content container mt-5 mb-5">
      <Tabs
        defaultActiveKey="all"
        id="order-tabs"
        onSelect={(key) => setSelectedStatus(key)}
      >
        <Tab eventKey="all" title="Tất cả">
          <Order orders={filteredOrders} />
        </Tab>
        <Tab eventKey="Chờ xác nhận" title="Chờ xác nhận">
          <Order orders={filteredOrders} />
        </Tab>
        <Tab eventKey="Đang vận chuyển" title="Vận chuyển">
          <Order orders={filteredOrders} />
        </Tab>
        <Tab eventKey="Đã nhận" title="Hoàn thành">
          <Order orders={filteredOrders} />
        </Tab>
        <Tab eventKey="Đã hủy" title="Đã hủy">
          <Order orders={filteredOrders} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MainContent;
