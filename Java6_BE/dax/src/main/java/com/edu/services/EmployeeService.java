package com.edu.services;

import com.edu.entities.EmployeeEntity;
import com.edu.jpa.EmployeeJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeJPA employeeRepository;

    // Phương thức lấy tất cả nhân viên
    public List<EmployeeEntity> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Phương thức lấy nhân viên theo ID
    public EmployeeEntity getEmployeeById(int id) {
        return employeeRepository.findById(id).orElse(null);
    }

    // Phương thức lưu nhân viên mới hoặc cập nhật thông tin nhân viên
    public EmployeeEntity saveEmployee(EmployeeEntity employee) {
        return employeeRepository.save(employee);
    }

    // Phương thức xóa nhân viên theo ID
    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);
    }

    // Phương thức xác thực nhân viên dựa trên tên đăng nhập và mật khẩu
    public EmployeeEntity authenticate(String username, String password) {
        EmployeeEntity employee = employeeRepository.findByUsernameAndPassword(username, password);
        if (employee != null && password.equals(employee.getPassword())) {
            return employee;
        }
        return null;
    }

    // Phương thức tạo token cho nhân viên (cần triển khai thêm logic)
    public String generateToken(EmployeeEntity employee) {
        // Implement token generation logic here, for example using JWT
        return "generated-jwt-token";
    }

    // Phương thức lấy tên đăng nhập từ token (cần triển khai thêm logic)
    public String getUsernameFromToken(String token) {
        // Implement token parsing logic here, for example using JWT
        return "parsed-username-from-token";
    }

    // Phương thức lấy nhân viên dựa trên tên đăng nhập
    public EmployeeEntity getEmployeeByUsername(String username) {
        return employeeRepository.findByUsername(username);
    }
}
