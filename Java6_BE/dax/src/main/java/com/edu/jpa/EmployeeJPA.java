package com.edu.jpa;

import com.edu.entities.EmployeeEntity;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeJPA extends JpaRepository<EmployeeEntity, Integer> {
    EmployeeEntity findByUsernameAndPassword(String username, String password);
    EmployeeEntity findByUsername(String username);
}
