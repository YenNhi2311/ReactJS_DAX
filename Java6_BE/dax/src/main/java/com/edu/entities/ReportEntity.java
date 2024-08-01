// package com.edu.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import jakarta.persistence.*;
// import java.util.Date;

// import com.fasterxml.jackson.annotation.JsonBackReference;

// @Entity
// @Table(name = "reports")
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// public class ReportEntity {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int reportId;

//     private String contentType;
//     private String reason;
//     private String status;
//     private String reportContent;
//     private Date reportTime;
//     private String reportTitle;

//     @ManyToOne
//     @JoinColumn(name = "reportedbyuser_id")
//     @JsonBackReference
//     private EmployeeEntity employee;
// }
