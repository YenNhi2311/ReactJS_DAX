package com.edu.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private BigDecimal price;
    private String imgUrl;
    private Date createdAt;
    private Date updatedAt;

    

    @ManyToOne
    @JoinColumn(name = "promotion_id")
    private PromotionEntity promotion;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonBackReference
    private CategoryEntity category;



    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private Set<SkusEntity> skus;

    @OneToMany(mappedBy = "product")
    @JsonManagedReference
    private Set<RatingEntity> ratings;

    @OneToMany(mappedBy = "product")
    @JsonManagedReference
    private Set<ReviewEntity> reviews;


    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private Set<OrderDetailEntity> orderDetails;

}
