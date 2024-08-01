package com.edu.services;

import com.edu.entities.PromotionEntity;
import com.edu.jpa.PromotionJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService {

    @Autowired
    private PromotionJPA promotionRepository;

    public List<PromotionEntity> getAllPromotions() {
        return promotionRepository.findAll();
    }

    public PromotionEntity getPromotionById(int id) {
        return promotionRepository.findById(id).orElse(null);
    }

    public PromotionEntity savePromotion(PromotionEntity promotion) {
        return promotionRepository.save(promotion);
    }

    public void deletePromotion(int id) {
        promotionRepository.deleteById(id);
    }
}
