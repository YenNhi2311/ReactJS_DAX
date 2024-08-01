// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import jakarta.persistence.*;
// import java.time.LocalDateTime;

// import org.springframework.boot.autoconfigure.amqp.RabbitConnectionDetails.Address;

// @Entity
// @Table(name = "users")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class UserEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "id")
//     private int id;

//     @Column(name = "username", nullable = false)
//     private String username;

//     @Column(name = "password", nullable = false)
//     private String password;

//     @Column(name = "email", nullable = false)
//     private String email;

//     @Column(name = "fullname")
//     private String fullname;

//     @Column(name = "phone_number")
//     private String phoneNumber;

//     @ManyToOne
//     @JoinColumn(name = "address_id", referencedColumnName = "id")
//     private Address address;

//     @Column(name = "profile_picture")
//     private String profilePicture;

//     @Column(name = "created_at", nullable = false, updatable = false)
//     private LocalDateTime createdAt = LocalDateTime.now();

//     @Column(name = "updated_at")
//     private LocalDateTime updatedAt = LocalDateTime.now();

//     @Column(name = "status")
//     private Boolean status = false;

//     @OneToMany(mappedBy = "user")
//     private java.util.Set<OrderEntity> orders;

//     @OneToMany(mappedBy = "user")
//     private java.util.Set<ReviewEntity> reviews;

//     @PrePersist
//     protected void onCreate() {
//         createdAt = LocalDateTime.now();
//         updatedAt = LocalDateTime.now();
//     }

//     @PreUpdate
//     protected void onUpdate() {
//         updatedAt = LocalDateTime.now();
//     }
// }
