// package com.edu.entities;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import java.time.LocalDateTime;

// @Entity
// @Table(name = "admins")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class AdminEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "admin_id")
//     private int adminID;

//     @Column(name = "username", nullable = false)
//     private String username;

//     @Column(name = "password", nullable = false)
//     private String password;

//     @Column(name = "email", nullable = false)
//     private String email;

//     @Column(name = "fullName")
//     private String fullName;

//     @Column(name = "created_at", nullable = false, updatable = false)
//     @Temporal(TemporalType.TIMESTAMP)
//     private LocalDateTime createdAt;

//     @Column(name = "updated_at")
//     @Temporal(TemporalType.TIMESTAMP)
//     private LocalDateTime updatedAt;

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

