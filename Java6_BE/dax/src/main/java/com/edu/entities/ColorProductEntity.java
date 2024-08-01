// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import com.fasterxml.jackson.annotation.JsonBackReference;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "color_product")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class ColorProductEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     private String color;
//     private String image;

//     @ManyToOne
//     @JoinColumn(name = "product_id")
//     @JsonBackReference
//     private ProductEntity product;
// }
