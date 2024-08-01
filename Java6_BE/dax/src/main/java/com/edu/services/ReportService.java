// package com.edu.services;

// import com.edu.entities.ReportEntity;
// import com.edu.jpa.ReportJPA;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ReportService {

//     @Autowired
//     private ReportJPA reportRepository;

//     public List<ReportEntity> getAllReports() {
//         return reportRepository.findAll();
//     }

//     public ReportEntity getReportById(int id) {
//         return reportRepository.findById(id).orElse(null);
//     }

//     public ReportEntity saveReport(ReportEntity report) {
//         return reportRepository.save(report);
//     }

//     public void deleteReport(int id) {
//         reportRepository.deleteById(id);
//     }
// }
