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
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "attributes_option")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class AttributeOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "attributes_id")
    private AttributeEntity attributes ;

    private String value;
    private String img;


    @OneToMany(mappedBy = "attributeOption")
    @JsonIgnore
    private Set<AttributesSkusEntity> attributesOptionSkus;
}
