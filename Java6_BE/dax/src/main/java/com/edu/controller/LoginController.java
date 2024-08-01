package com.edu.controller;

import com.edu.entities.EmployeeEntity;
import com.edu.services.EmployeeService;
import com.edu.payload.LoginRequest;
import com.edu.payload.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        EmployeeEntity employee = employeeService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        if (employee != null) {
            String token = employeeService.generateToken(employee);
            System.out.println("Employee Role: " + employee.getRole()); // Debugging
            System.out.println("token" + token);
            return ResponseEntity.ok(new LoginResponse(employee, token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("Invalid username or password"));
        }
    }

    @GetMapping("/user")
    public ResponseEntity<LoginResponse> getCurrentUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        try {
            // Trích xuất tên người dùng từ token
            String username = employeeService.getUsernameFromToken(token);
            // Lấy thông tin người dùng từ tên người dùng
            EmployeeEntity employee = employeeService.getEmployeeByUsername(username);
            if (employee != null) {
                return ResponseEntity.ok(new LoginResponse(employee, null));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new LoginResponse("User not found"));
            }
        } catch (Exception e) {
            // Xử lý lỗi khi giải mã token hoặc tìm người dùng
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("Invalid or expired token"));
        }
    }
}

