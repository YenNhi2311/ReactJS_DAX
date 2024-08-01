package com.edu.entities;


import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;

@Entity
@Table(name = "skus")
@Getter
@Setter
@AllArgsConstructor

public class SkusEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String code;


    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product ;


    private Double price;


     @OneToMany(mappedBy = "skus")
    @JsonIgnore
    private Set<AttributesSkusEntity> attributesOptionSkus;

}
