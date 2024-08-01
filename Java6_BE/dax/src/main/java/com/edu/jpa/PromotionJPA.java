package com.edu.jpa;

import com.edu.entities.PromotionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionJPA extends JpaRepository<PromotionEntity, Integer> {
}
