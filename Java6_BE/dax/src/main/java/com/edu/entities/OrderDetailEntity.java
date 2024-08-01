// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import java.math.BigDecimal;

// import com.fasterxml.jackson.annotation.JsonBackReference;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "orderdetails")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class OrderDetailEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "orderdetail_id")
//     private int orderDetailId;

//     private String color;
//     private int price;
//     private int quantity;
//     private BigDecimal unitPrice;

//     @ManyToOne
//     @JoinColumn(name = "order_id")
//     private OrderEntity order;

//     @ManyToOne
//     @JoinColumn(name = "product_id")
//     @JsonBackReference
//     private ProductEntity product;
//         // Getters and Setters
//     }
    