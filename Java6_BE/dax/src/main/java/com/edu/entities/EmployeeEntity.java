// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import jakarta.persistence.*;
// import java.util.Date;
// import java.util.Set;


// import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonIgnore;
// import com.fasterxml.jackson.annotation.JsonManagedReference;

// @Entity
// @Table(name = "employee")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class EmployeeEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "user_id")
//     private int id;

//     private String username;
//     private String password;
//     private String email;
//     private String fullname;
//     private String phoneNumber;
//     private String profilePicture;
//     private Date createdAt;
//     private Date updatedAt;
//     private boolean status;
//     private Boolean gender;
//     private boolean role;

//     @ManyToOne
//     @JoinColumn(name = "address_id")
//     @JsonBackReference
//     private AddressEntity address;

//     @OneToMany(mappedBy = "user")
//     @JsonIgnore
//     private Set<OrderEntity> orders;

//     @OneToMany(mappedBy = "employee")
//     @JsonManagedReference
//     private Set<ReportEntity> reports;

//     @OneToMany(mappedBy = "employee")
//     @JsonIgnore
//     private Set<ReviewEntity> reviews;
// }
