package com.edu.services;

import com.edu.entities.OrderEntity;
import com.edu.entities.OrderDetailEntity;
import com.edu.jpa.OrderJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderJPA orderRepository;

    public List<OrderEntity> getAllOrders() {
        List<OrderEntity> orders = orderRepository.findAll();
        for (OrderEntity order : orders) {
            calculateTotalAmount(order);
        }
        return orders;
    }

    public OrderEntity getOrderById(int orderId) {
        OrderEntity order = orderRepository.findById(orderId).orElse(null);
        if (order != null) {
            calculateTotalAmount(order);
        }
        return order;
    }

    public List<OrderEntity> getOrdersByStatus(String status) {
        List<OrderEntity> orders = orderRepository.findByStatus(status);
        for (OrderEntity order : orders) {
            calculateTotalAmount(order);
        }
        return orders;
    }

    public List<OrderEntity> getOrdersByUserId(int userId) {
        List<OrderEntity> orders = orderRepository.findByUserId(userId);
        for (OrderEntity order : orders) {
            calculateTotalAmount(order);
        }
        return orders;
    }

    public OrderEntity saveOrder(OrderEntity order) {
        calculateTotalAmount(order);
        return orderRepository.save(order);
    }

    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }

    public void updateOrderStatus(List<OrderEntity> orders) {
        for (OrderEntity order : orders) {
            OrderEntity existingOrder = orderRepository.findById(order.getOrderId()).orElse(null);
            if (existingOrder != null) {
                existingOrder.setStatus(order.getStatus());
                orderRepository.save(existingOrder);
            }
        }
    }

    private void calculateTotalAmount(OrderEntity order) {
        BigDecimal totalAmount = BigDecimal.ZERO;
        for (OrderDetailEntity orderDetail : order.getOrderDetails()) {
            totalAmount = totalAmount.add(orderDetail.getUnitPrice().multiply(BigDecimal.valueOf(orderDetail.getQuantity())));
        }
        order.setTotalAmount(totalAmount);
    }
}
