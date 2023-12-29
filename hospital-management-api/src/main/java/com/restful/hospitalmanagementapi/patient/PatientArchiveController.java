package com.restful.hospitalmanagementapi.patient;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PatientArchiveController {
    private PatientArchiveJpaRepository patientArchiveJpaRepository;

    public PatientArchiveController(PatientArchiveJpaRepository patientArchiveJpaRepository) {
        this.patientArchiveJpaRepository = patientArchiveJpaRepository;
    }
    @GetMapping("/admin/archive/patients")
    public List<PatientArchive> getAllArchivePatient(){
        return patientArchiveJpaRepository.findAll();
    }
    @GetMapping("/admin/archive/patients/{id}")
    public PatientArchive getAllArchivePatient(@PathVariable Integer id){
        return patientArchiveJpaRepository.findById(id).get();
    }

}
