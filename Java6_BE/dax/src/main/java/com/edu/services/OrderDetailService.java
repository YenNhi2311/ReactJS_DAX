// package com.edu.services;

// import com.edu.entities.OrderDetailEntity;
// import com.edu.jpa.OrderDetailJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class OrderDetailService {

//     @Autowired
//     private OrderDetailJPA orderDetailRepository;

//     public List<OrderDetailEntity> getAllOrderDetails() {
//         return orderDetailRepository.findAll();
//     }

//     public OrderDetailEntity getOrderDetailById(int id) {
//         return orderDetailRepository.findById(id).orElse(null);
//     }

//     public OrderDetailEntity saveOrderDetail(OrderDetailEntity orderDetail) {
//         return orderDetailRepository.save(orderDetail);
//     }

//     public void deleteOrderDetail(int id) {
//         orderDetailRepository.deleteById(id);
//     }
// }
