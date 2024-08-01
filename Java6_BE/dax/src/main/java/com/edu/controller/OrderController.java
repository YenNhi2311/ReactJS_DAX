// package com.edu.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.edu.entities.OrderEntity;
// import com.edu.services.OrderService;

// @CrossOrigin("*")
// @RestController
// @RequestMapping("/api/orders")
// public class OrderController {
    
//     @Autowired
//     private OrderService orderService;

//     // Get all orders
//     @GetMapping
//     public List<OrderEntity> getAllOrders() {
//         return orderService.getAllOrders();
//     }

//     @PostMapping("/updateStatus")
// public ResponseEntity<String> updateOrderStatus(@RequestBody List<OrderEntity> orders) {
//     try {
//         orderService.updateOrderStatus(orders);
//         return ResponseEntity.ok("Cập nhật thành công");
//     } catch (Exception e) {
//         e.printStackTrace(); // In ra lỗi nếu có
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Cập nhật không thành công");
//     }
// }


// }
