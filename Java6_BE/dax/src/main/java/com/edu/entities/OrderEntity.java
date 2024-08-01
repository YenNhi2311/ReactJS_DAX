// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import jakarta.persistence.*;

// import java.math.BigDecimal;
// import java.util.Date;
// import java.util.Set;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// @Entity
// @Table(name = "orders")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class OrderEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int orderId;

//     private Date orderDate;
//     private BigDecimal totalAmount;
//     private String status;
//     private BigDecimal shippingFee;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private EmployeeEntity user;

//     @ManyToOne
//     @JoinColumn(name = "payment_id")
//     private PaymentEntity payment;

//     @ManyToOne
//     @JoinColumn(name = "promotion_id")
//     private PromotionEntity promotion;

//     @OneToMany(mappedBy = "order")
//     @JsonIgnore
//     private Set<OrderDetailEntity> orderDetails;
// }
