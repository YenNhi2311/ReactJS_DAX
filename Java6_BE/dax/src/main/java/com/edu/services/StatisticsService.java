
// package com.edu.services;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.edu.jpa.*;

// import java.util.List;
// import java.util.Map;

// @Service
// public class StatisticsService {

//     @Autowired
//     private OrderJPA orderRepository;

//     @Autowired
//     private ProductJPA productRepository;

//     @Autowired
//     private EmployeeJPA customerRepository;

//     public List<Map<String, Object>> getProductStatistics() {
//         return productRepository.findProductStatistics();
//     }

//     public Map<String, Object> getOrderStatistics() {
//         return orderRepository.findOrderStatistics();
//     }

//     public List<Map<String, Object>> getCustomerStatistics() {
//         return customerRepository.findCustomerStatistics();
//     }
// }
