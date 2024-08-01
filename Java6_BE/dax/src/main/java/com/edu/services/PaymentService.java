// package com.edu.services;

// import com.edu.entities.PaymentEntity;
// import com.edu.jpa.PaymentJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class PaymentService {

//     @Autowired
//     private PaymentJPA paymentRepository;

//     public List<PaymentEntity> getAllPayments() {
//         return paymentRepository.findAll();
//     }

//     public PaymentEntity getPaymentById(int id) {
//         return paymentRepository.findById(id).orElse(null);
//     }

//     public PaymentEntity savePayment(PaymentEntity payment) {
//         return paymentRepository.save(payment);
//     }

//     public void deletePayment(int id) {
//         paymentRepository.deleteById(id);
//     }
// }
