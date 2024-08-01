// package com.edu.services;

// import com.edu.entities.OrderEntity;
// import com.edu.jpa.OrderJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class OrderService {

//     @Autowired
//     private OrderJPA orderRepository;

//     public List<OrderEntity> getAllOrders() {
//         return orderRepository.findAll();
//     }

//     public OrderEntity getOrderById(int id) {
//         return orderRepository.findById(id).orElse(null);
//     }

//     public OrderEntity saveOrder(OrderEntity order) {
//         return orderRepository.save(order);
//     }

//     public void deleteOrder(int id) {
//         orderRepository.deleteById(id);
//     }

//     public void updateOrderStatus(List<OrderEntity> orders) {
//         for (OrderEntity order : orders) {
//             // Cập nhật trạng thái của từng đơn hàng
//             OrderEntity existingOrder = orderRepository.findById(order.getOrderId()).orElse(null);
//             if (existingOrder != null) {
//                 existingOrder.setStatus(order.getStatus());
//                 orderRepository.save(existingOrder);
//             }
//         }
//     }
    
// }
