package com.edu.jpa;

import com.edu.entities.ProductEntity;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface ProductJPA extends JpaRepository<ProductEntity, Integer> {
    // @Query("SELECT p.id AS productId, p.name AS productName, SUM(oi.quantity) AS totalQuantitySold, SUM(oi.quantity * oi.unitPrice) AS totalRevenue FROM OrderDetailEntity oi JOIN oi.product p GROUP BY p.id, p.name ORDER BY totalRevenue DESC")
    // List<Map<String, Object>> findProductStatistics();
}
