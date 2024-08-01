// package com.edu.controller;

// import java.util.List;
// import java.util.Map;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.edu.services.StatisticsService;

// @RestController
// @RequestMapping("/api/statistics")
// public class StatisticsController {

//     @Autowired
//     private StatisticsService statisticsService;

//     @GetMapping("/products")
//     public List<Map<String, Object>> getProductStatistics() {
//         return statisticsService.getProductStatistics();
//     }

//     @GetMapping("/orders")
//     public Map<String, Object> getOrderStatistics() {
//         return statisticsService.getOrderStatistics();
//     }

//     @GetMapping("/customers")
//     public List<Map<String, Object>> getCustomerStatistics() {
//         return statisticsService.getCustomerStatistics();
//     }
// }
