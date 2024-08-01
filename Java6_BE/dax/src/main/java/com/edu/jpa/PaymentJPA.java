package com.edu.jpa;

import com.edu.entities.PaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentJPA extends JpaRepository<PaymentEntity, Integer> {
}
