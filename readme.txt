Backend
==========
1.Go to following link and clone "Node-back-end" repository.
Github repo link : https://github.com/vishwa-jay/Node-back-end
or run following code in command line inside your prefered location in your local machine.
git clone https://github.com/vishwa-jay/Node-back-end.git

2.it will contain node backend project. Open the directory, then you see "index.js" file, 
then open a command line and run "npm install" in the same directory.

3.now,there will be a "db.sql" file which is the mysql database backup. To import it, please follow the steps below.

4.please create a database in "phpmyadmin" as "cafe-employee" or any name as you prefer. then import the "db.sql" file from previous step.
which will create tables and fill seed data to your database. there will be two tables as "cafe" and "employees".

My machine configurations - 
Windows 10 pro, 
64-bit operating system, 
Wampserver, 
Node version - v18.17.0, 
NPM version - 9.6.7

5.Next, open "config.js" and make sure you have correct details updated as follows, if you have different values, please update and save
before run node backend.
		host: "localhost",
		user: "root",
		password: "",
		database: "cafe-employee"
6.Now open terminal or GIT bash window inside your cloned node backend project. there should be a file called "index.js".
so run "node index.js" command. this will start node backend server in "http://localhost:3001"

Next, will run frontend project.


Frontend
==========
1.Go to following link and clone "React-front-end" repository.
Github repo link : https://github.com/vishwa-jay/React-front-end
or run following code in command line inside your prefered location in your local machine.
git clone https://github.com/vishwa-jay/React-front-end.git

2.it will contain react frontend project. Open the directory, then you see "package.js" file. 
then open a command line and run "npm install" in the same directory.

3.next, open ".env" file and it should contain "REACT_APP_API_BASE_URL=http://localhost:3001" line, 
which is the url for your node js running backend. 
(In previous steps, if you run your node js backend in different port, please update this .env file content before run front-end).

4.next, run "npm start", this will start react frontend project in "http://localhost:3000" url.

Make sure your mysql server is up and running.
Make sure cloned node backend project is up and running.
Now you can check the running front-end project in "http://localhost:3000" url.

Thank you for your support and please reach me if you need any clarifications.
My Email : yatheendra88@gmail.com
My Contact: +94 71 570 9374