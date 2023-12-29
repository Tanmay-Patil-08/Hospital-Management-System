## Hospital Management Application

### follow the following step to run the application 

1. Step 1 -> Install docker (I have used docker to launch mysql image to perform CRUD opperation)
2. Step 2 -> Run this command to install and launch my sql container
   `docker run --detach --env MYSQL_ROOT_PASSWORD=Admin --env MYSQL_USER=Admin --env MYSQL_PASSWORD=Admin --env MYSQL_DATABASE=hospital-management-database --name mysql --publish 3306:3306 mysql:8-oracle`
3. Step 4 -> Launch Spring boot application(Backend)
   `cd hospital-management-api`
   `mvn spring-boot:run`
   or
   `java -jar target/hospital-management-api-0.0.1-SNAPSHOT.jar`
   or
   you can run the project using IDE
5. Step 4 -> Launch React Application (Frontend)
   `cd hospital-management-frontend/frontend-react`
   `npm start`
