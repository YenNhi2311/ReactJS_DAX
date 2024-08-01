package com.edu.jpa;

import com.edu.entities.OrderEntity;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface OrderJPA extends JpaRepository<OrderEntity, Integer> {
    List<OrderEntity> findByStatus(String status);
    List<OrderEntity> findByUserId(int userId);
    // @Query("SELECT COUNT(o) AS totalOrders, SUM(o.totalAmount) AS totalRevenue FROM OrderEntity o")
    // Map<String, Object> findOrderStatistics();
}
