package com.edu.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "categories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private int categoryId;
    
    @Column(name = "category_name", nullable = false)
    private String categoryName;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "img", nullable = false)
    private String img;

    @OneToMany(mappedBy = "category")
    @JsonManagedReference
    private Set<ProductEntity> products;
}
