// package com.edu.services;

// import com.edu.entities.ColorProductEntity;
// import com.edu.jpa.ColorProductJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ColorProductService {

//     @Autowired
//     private ColorProductJPA colorProductRepository;

//     public List<ColorProductEntity> getAllColorProducts() {
//         return colorProductRepository.findAll();
//     }

//     public ColorProductEntity getColorProductById(int id) {
//         return colorProductRepository.findById(id).orElse(null);
//     }

//     public ColorProductEntity saveColorProduct(ColorProductEntity colorProduct) {
//         return colorProductRepository.save(colorProduct);
//     }

//     public void deleteColorProduct(int id) {
//         colorProductRepository.deleteById(id);
//     }
// }
