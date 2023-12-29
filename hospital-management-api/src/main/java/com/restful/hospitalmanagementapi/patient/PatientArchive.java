package com.restful.hospitalmanagementapi.patient;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Entity
public class PatientArchive {
    @Id
    private Integer ID;
    private String patientName;
    private String DoctorName;

    private String patientGender;
    private Boolean patientCovidStatus;
    @Past(message = "Enter a date in past")
    private LocalDate patientDOB;
    private String patientMaritalS;
    private String patientAddress;
    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    private String patientphNumber;
    @Email
    private String patientEmail;
    private String patientMedicalHistory;
    private String patientCurrentSymptoms;
    private String patientBloodType;
    private String patientHealthInsurancenumber;
    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    private String patientEmergencyContact;
    private LocalDateTime patientAdmissionDate;
    @GeneratedValue
    private LocalDateTime patientDischargeDate;

    public PatientArchive(){

    }

    public PatientArchive(Integer ID, String patientName, String doctorName, String patientGender, Boolean patientCovidStatus, LocalDate patientDOB, String patientMaritalS, String patientAddress, String patientphNumber, String patientEmail, String patientMedicalHistory, String patientCurrentSymptoms, String patientBloodType, String patientHealthInsurancenumber, String patientEmergencyContact, LocalDateTime patientAdmissionDate, LocalDateTime patientDischargeDate) {
        this.ID = ID;
        this.patientName = patientName;
        DoctorName = doctorName;
        this.patientGender = patientGender;
        this.patientCovidStatus = patientCovidStatus;
        this.patientDOB = patientDOB;
        this.patientMaritalS = patientMaritalS;
        this.patientAddress = patientAddress;
        this.patientphNumber = patientphNumber;
        this.patientEmail = patientEmail;
        this.patientMedicalHistory = patientMedicalHistory;
        this.patientCurrentSymptoms = patientCurrentSymptoms;
        this.patientBloodType = patientBloodType;
        this.patientHealthInsurancenumber = patientHealthInsurancenumber;
        this.patientEmergencyContact = patientEmergencyContact;
        this.patientAdmissionDate = patientAdmissionDate;
        this.patientDischargeDate = patientDischargeDate;
    }

    public PatientArchive(Patient patient) {
        this.ID = patient.getPatientID();
        this.patientName = patient.getPatientName();
        this.DoctorName = patient.getDoctorName();
        this.patientGender = patient.getPatientGender();
        this.patientCovidStatus = patient.getPatientCovidStatus();
        this.patientDOB = patient.getPatientDOB();
        this.patientMaritalS = patient.getPatientMaritalS();
        this.patientAddress = patient.getPatientAddress();
        this.patientphNumber = patient.getPatientphNumber();
        this.patientEmail = patient.getPatientEmail();
        this.patientMedicalHistory = patient.getPatientMedicalHistory();
        this.patientCurrentSymptoms = patient.getPatientCurrentSymptoms();
        this.patientBloodType = patient.getPatientBloodType();
        this.patientHealthInsurancenumber = patient.getPatientHealthInsurancenumber();
        this.patientEmergencyContact = patient.getPatientEmergencyContact();
        this.patientAdmissionDate = patient.getPatientAdmissionDate();
        this.patientDischargeDate = LocalDateTime.now();
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDoctorName() {
        return DoctorName;
    }

    public void setDoctorName(String doctorName) {
        DoctorName = doctorName;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public Boolean getPatientCovidStatus() {
        return patientCovidStatus;
    }

    public void setPatientCovidStatus(Boolean patientCovidStatus) {
        this.patientCovidStatus = patientCovidStatus;
    }

    public LocalDate getPatientDOB() {
        return patientDOB;
    }

    public void setPatientDOB(LocalDate patientDOB) {
        this.patientDOB = patientDOB;
    }

    public String getPatientMaritalS() {
        return patientMaritalS;
    }

    public void setPatientMaritalS(String patientMaritalS) {
        this.patientMaritalS = patientMaritalS;
    }

    public String getPatientAddress() {
        return patientAddress;
    }

    public void setPatientAddress(String patientAddress) {
        this.patientAddress = patientAddress;
    }

    public String getPatientphNumber() {
        return patientphNumber;
    }

    public void setPatientphNumber(String patientphNumber) {
        this.patientphNumber = patientphNumber;
    }

    public String getPatientEmail() {
        return patientEmail;
    }

    public void setPatientEmail(String patientEmail) {
        this.patientEmail = patientEmail;
    }

    public String getPatientMedicalHistory() {
        return patientMedicalHistory;
    }

    public void setPatientMedicalHistory(String patientMedicalHistory) {
        this.patientMedicalHistory = patientMedicalHistory;
    }

    public String getPatientCurrentSymptoms() {
        return patientCurrentSymptoms;
    }

    public void setPatientCurrentSymptoms(String patientCurrentSymptoms) {
        this.patientCurrentSymptoms = patientCurrentSymptoms;
    }

    public String getPatientBloodType() {
        return patientBloodType;
    }

    public void setPatientBloodType(String patientBloodType) {
        this.patientBloodType = patientBloodType;
    }

    public String getPatientHealthInsurancenumber() {
        return patientHealthInsurancenumber;
    }

    public void setPatientHealthInsurancenumber(String patientHealthInsurancenumber) {
        this.patientHealthInsurancenumber = patientHealthInsurancenumber;
    }

    public String getPatientEmergencyContact() {
        return patientEmergencyContact;
    }

    public void setPatientEmergencyContact(String patientEmergencyContact) {
        this.patientEmergencyContact = patientEmergencyContact;
    }

    public LocalDateTime getPatientAdmissionDate() {
        return patientAdmissionDate;
    }

    public void setPatientAdmissionDate(LocalDateTime patientAdmissionDate) {
        this.patientAdmissionDate = patientAdmissionDate;
    }

    public LocalDateTime getPatientDischargeDate() {
        return patientDischargeDate;
    }

    public void setPatientDischargeDate(LocalDateTime patientDischargeDate) {
        this.patientDischargeDate = patientDischargeDate;
    }

    @Override
    public String toString() {
        return "PatientArchive{" +
                "ID=" + ID +
                ", patientName='" + patientName + '\'' +
                ", DoctorName='" + DoctorName + '\'' +
                ", patientGender='" + patientGender + '\'' +
                ", patientCovidStatus=" + patientCovidStatus +
                ", patientDOB=" + patientDOB +
                ", patientMaritalS='" + patientMaritalS + '\'' +
                ", patientAddress='" + patientAddress + '\'' +
                ", patientphNumber='" + patientphNumber + '\'' +
                ", patientEmail='" + patientEmail + '\'' +
                ", patientMedicalHistory='" + patientMedicalHistory + '\'' +
                ", patientCurrentSymptoms='" + patientCurrentSymptoms + '\'' +
                ", patientBloodType='" + patientBloodType + '\'' +
                ", patientHealthInsurancenumber='" + patientHealthInsurancenumber + '\'' +
                ", patientEmergencyContact='" + patientEmergencyContact + '\'' +
                ", patientAdmissionDate=" + patientAdmissionDate +
                ", patientDischargeDate=" + patientDischargeDate +
                '}';
    }
}
