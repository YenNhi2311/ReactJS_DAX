// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import jakarta.persistence.*;

// import java.math.BigDecimal;
// import java.util.Date;

// import com.fasterxml.jackson.annotation.JsonBackReference;

// @Entity
// @Table(name = "reviews")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class ReviewEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     private String comment;
//     private Date createdAt;
//     private Date updatedAt;
//     private String reviewContent;
//     private BigDecimal reviewRating;
//     private Date reviewTime;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private EmployeeEntity employee;

//     @ManyToOne
//     @JoinColumn(name = "product_id")
//     @JsonBackReference
//     private ProductEntity product;
// }
