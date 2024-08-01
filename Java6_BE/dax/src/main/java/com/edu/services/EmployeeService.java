// package com.edu.services;

// import com.edu.entities.EmployeeEntity;
// import com.edu.jpa.EmployeeJPA;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class EmployeeService {

//     @Autowired
//     private EmployeeJPA EmployeeRepository;

//     public List<EmployeeEntity> getAllEmployees() {
//         return EmployeeRepository.findAll();
//     }

//     public EmployeeEntity getEmployeeById(int id) {
//         return EmployeeRepository.findById(id).orElse(null);
//     }

//     public EmployeeEntity saveEmployee(EmployeeEntity Employee) {
//         return EmployeeRepository.save(Employee);
//     }

//     public void deleteEmployee(int id) {
//         EmployeeRepository.deleteById(id);
//     }
// }
