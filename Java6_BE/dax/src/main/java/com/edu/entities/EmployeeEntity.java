package com.edu.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "employee")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    private String username;
    private String password;
    private String email;
    private String fullname;
    private String phoneNumber;
    private String profilePicture;
    private Date createdAt;
    private Date updatedAt;
    private Boolean status;
    private Boolean gender;

    @ManyToOne
    @JoinColumn(name = "address_id")
    @JsonBackReference
    private AddressEntity address;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<OrderEntity> orders;

  

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private Set<ReviewEntity> reviews;

    @Column(name = "role")
    private Boolean role; // Bit type in database mapped as Boolean

    // @Override
    // public String toString() {
    //     return "EmployeeEntity [id=" + id + ", username=" + username + ", role=" + role + "]";
    // }

}
