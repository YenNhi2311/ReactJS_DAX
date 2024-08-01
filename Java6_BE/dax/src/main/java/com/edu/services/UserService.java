// package com.edu.services;

// import com.edu.entities.UserEntity;
// import com.edu.jpa.UserJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class UserService {

//     @Autowired
//     private UserJPA userRepository;

//     public List<UserEntity> getAllUsers() {
//         return userRepository.findAll();
//     }

//     public UserEntity getUserById(int id) {
//         return userRepository.findById(id).orElse(null);
//     }

//     public UserEntity saveUser(UserEntity user) {
//         return userRepository.save(user);
//     }

//     public void deleteUser(int id) {
//         userRepository.deleteById(id);
//     }
// }
