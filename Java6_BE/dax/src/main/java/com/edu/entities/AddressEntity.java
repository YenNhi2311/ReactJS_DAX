// package com.edu.entities;


// import java.util.Set;

// import com.fasterxml.jackson.annotation.JsonManagedReference;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Entity
// @Table(name = "address")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class AddressEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     private String addressName;

//     @OneToMany(mappedBy = "address")
//     @JsonManagedReference
//     private Set<EmployeeEntity> employees;

// }
