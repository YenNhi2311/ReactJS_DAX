// package com.edu.services;

// import com.edu.entities.AdminEntity;
// import com.edu.jpa.AdminJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class AdminService {

//     @Autowired
//     private AdminJPA adminRepository;

//     public List<AdminEntity> getAllAdmins() {
//         return adminRepository.findAll();
//     }

//     public AdminEntity getAdminById(int id) {
//         return adminRepository.findById(id).orElse(null);
//     }

//     public AdminEntity saveAdmin(AdminEntity admin) {
//         return adminRepository.save(admin);
//     }

//     public void deleteAdmin(int id) {
//         adminRepository.deleteById(id);
//     }
// }

