package com.restful.hospitalmanagementapi.patient;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PatientController {
    private PatientJpaRepository patientJpaRepository;
    private PatientArchiveJpaRepository patientArchiveJpaRepository;

    public PatientController(PatientJpaRepository patientJpaRepository,PatientArchiveJpaRepository patientArchiveJpaRepository) {
        this.patientArchiveJpaRepository=patientArchiveJpaRepository;
        this.patientJpaRepository = patientJpaRepository;
    }

    @GetMapping("/admin/patients")
    public List<Patient> retriveAllPatient(){
        return patientJpaRepository.findAll();
    }
    @GetMapping("/admin/patients/{id}")
    public Patient retrivePatientById(@PathVariable Integer id){
        return patientJpaRepository.findById(id).get();
    }
    @PutMapping ("/admin/patients/{id}")
    public Patient updatePatientById(@PathVariable Integer id, @RequestBody Patient patient){
        return patientJpaRepository.save(patient);
    }
    @DeleteMapping ("/admin/patients/{id}")
    public ResponseEntity<Void> deletePatientById(@PathVariable Integer id){
         PatientArchive patientArchive = new PatientArchive(patientJpaRepository.findById(id).get());
         patientArchiveJpaRepository.save(patientArchive);
        patientJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping ("/admin/patients")
    public Patient createPatientById(@RequestBody Patient patient){
        patient.setPatientID(null);
        patient.setPatientAdmissionDate(LocalDateTime.now());
        return patientJpaRepository.save(patient);
    }
    @GetMapping("/admin/patients/count")
    public Long retrivePatientCount(){
        return patientJpaRepository.count();
    }
}
