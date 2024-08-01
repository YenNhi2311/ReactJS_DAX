package com.edu.jpa;

import com.edu.entities.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryJPA extends JpaRepository<CategoryEntity, Integer> {
}

