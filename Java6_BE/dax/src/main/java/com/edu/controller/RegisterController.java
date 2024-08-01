package com.edu.controller;

import com.edu.entities.EmployeeEntity;
import com.edu.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class RegisterController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/register")
    public EmployeeEntity registerEmployee(@RequestBody EmployeeEntity employee) {
        // Đảm bảo vai trò được đặt là 'user' theo mặc định
        employee.setRole(false); // Giả định 'false' có nghĩa là 'user'
        return employeeService.saveEmployee(employee);
    }
}
