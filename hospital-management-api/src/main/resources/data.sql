INSERT INTO Patient
(ID,PATIENT_COVID_STATUS, PATIENT_EMERGENCY_CONTACT, PATIENTDOB, PATIENTPH_NUMBER,
 DOCTOR_NAME, PATIENT_ADDRESS, PATIENT_BLOOD_TYPE,
 PATIENT_CURRENT_SYMPTOMS, PATIENT_EMAIL, PATIENT_GENDER, PATIENT_HEALTH_INSURANCENUMBER,
 PATIENT_MARITALS, PATIENT_MEDICAL_HISTORY, PATIENT_NAME,patient_Admission_Date)
VALUES
    (101,FALSE, '9423927777', '1990-05-15', '9876543210', 'Dr. Smith', '123 Main St, Cityville', 'O+',
     'Fever, Cough', 'patient1@email.com', 'Male', 'H123456789',
     'Married', 'No significant history', 'John Doe',current_timestamp()),
    (102, FALSE, '8888888888', '1985-01-23', '7777777777', 'Dr. Kapoor', '456 Park Ave, Mumbai', 'B+',
     'Headache, Nausea', 'riyapatel@email.com', 'Female', 'H456789123',
     'Single', 'Asthma', 'Riya Patel', current_timestamp()),
    (103, TRUE, '9999999999', '1970-06-12', '6666666666', 'Dr. Sharma', '789 Beach Rd, Chennai', 'AB-',
     'Fever, Shortness of breath', 'arvindsingh@email.com', 'Male', 'H789123456',
     'Married', 'Diabetes', 'Arvind Singh', current_timestamp()),
    (111, FALSE, '2222222222', '1995-08-10', '5555555555', 'Dr. Desai', '123 New Colony, Delhi', 'A+',
     'Fatigue, Body aches', 'meenakumari@email.com', 'Female', 'H123789456',
     'Married', 'Hypertension', 'Meenakshi Kumari', current_timestamp()),
    (112, TRUE, '3333333333', '1987-03-04', '4444444444', 'Dr. Agarwal', '456 Hill Crest, Kolkata', 'O-',
     'Loss of taste, Cough', 'rajeshrao@email.com', 'Male', 'H456123789',
     'Single', 'No significant history', 'Rajesh Rao', current_timestamp()),
    (113, FALSE, '0000000000', '1978-09-29', '3333333333', 'Dr. Patel', '789 Main Rd, Bangalore', 'B-',
     'Dizziness, Vomiting', 'nehalikapoor@email.com', 'Female', 'H789456123',
     'Widowed', 'Gastritis', 'Nehalika Kapoor', current_timestamp()),
    (119, FALSE, '7777777777', '1992-02-18', '2222222222', 'Dr. Khan', '12345 Nehru Nagar, Hyderabad', 'AB+',
     'Skin rash, Joint pain', 'abhijeetgupta@email.com', 'Male', 'H123456789',
     'Divorced', 'Allergic rhinitis', 'Abhijeet Gupta', current_timestamp()),
    (120, TRUE, '6666666666', '1982-11-07', '1111111111', 'Dr. Rao', '567 Skyview Apartments, Mumbai', 'O+',
     'Fever, Fatigue', 'priyadarshini@email.com', 'Female', 'H456789123',
     'Married', 'Hyperthyroidism', 'Priyadarshini Devi', current_timestamp()),
    (122, TRUE, '0987654321', '1988-12-15', '8888888888', 'Dr. Iyer', '333 Park Avenue, Chennai', 'A-',
     'Sore throat, Runny nose', 'deepikasharma@email.com', 'Female', 'H777666555',
     'Single', 'Asthma', 'Deepika Sharma', current_timestamp());

INSERT INTO PATIENT_ARCHIVE
(ID,PATIENT_COVID_STATUS, PATIENT_EMERGENCY_CONTACT, PATIENTDOB, PATIENTPH_NUMBER,
 DOCTOR_NAME, PATIENT_ADDRESS, PATIENT_BLOOD_TYPE,
 PATIENT_CURRENT_SYMPTOMS, PATIENT_EMAIL, PATIENT_GENDER, PATIENT_HEALTH_INSURANCENUMBER,
 PATIENT_MARITALS, PATIENT_MEDICAL_HISTORY, PATIENT_NAME,patient_Admission_Date,patient_Discharge_Date)
VALUES
    (121, FALSE, '1234567890', '1975-05-20', '9999999999', 'Dr. Mukherjee', '222 Lake View Rd, Kolkata', 'B+',
     'Chest pain, Shortness of breath', 'sukhvindersingh@email.com', 'Male', 'H888777666',
     'Married', 'Heart disease', 'Sukhvinder Singh', current_timestamp(),current_timestamp());

