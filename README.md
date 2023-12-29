# Hospital Management Application

### Follow the following steps to run the application 
---
1. Step 1 -> Install docker (I have used docker to launch MySQL image to perform CRUD operations)

2. Step 2 -> Run this command to install and launch my SQL container

   `docker run --detach --env MYSQL_ROOT_PASSWORD=Admin --env MYSQL_USER=Admin --env MYSQL_PASSWORD=Admin --env MYSQL_DATABASE=hospital-management-database --name mysql --publish 3306:3306 mysql:8-oracle`

   Additionally, you can tweak changes in the application.properties to connect to different databases I have mentioned it there

   ![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/4f2de14a7f26fcf503e0cd61f72c6d4b132af8b5/ScreenShots/Screenshot%20from%202023-12-28%2019-05-05.png)
     
3. Step 3 -> Launch Spring boot application(Backend)
   `cd hospital-management-api`
   `mvn spring-boot:run`
   or
   `java -jar target/hospital-management-api-0.0.1-SNAPSHOT.jar`
   or
   you can run the project using the IDE

   ![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2019-10-08.png)
6. Step 4 -> Launch React Application (Frontend)
   `cd hospital-management-frontend/frontend-react`
   `npm start`

   ![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2019-11-37.png)

# Some of the sample screenshots 

### Login form

![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-58-24.png)

### Welcome page to show number of active patients

![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-57-58.png)

### Lists of all active patient we can see details,update the patient,discharge the patient

![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-57-07.png)

### List of archive patient when the patient is discharge it goes into archive list 
![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-57-48.png)

### Create new Patient

![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-57-54.png)

### Update Patient properties like COVID status 

![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-57-29.png)

### We can see details of patients 
![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-58-44.png)

### Logout page 

![Alt text for the image](https://github.com/Tanmay-Patil-08/Hospital-Management-System/blob/278ee578c564cf2f43bab4b040dd167ea7421066/ScreenShots/Screenshot%20from%202023-12-28%2018-58-07.png)
