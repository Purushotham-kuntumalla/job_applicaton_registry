Job Application Tracker
This project is a job application tracker that allows users to add, view, edit, and delete job applications. The project is built using ReactJS and Firebase, and it uses Axios for making HTTP requests.

Features
Add Job Application: Users can add details about their job applications, including company name, role, date applied, status, and salary.
View Job Applications: Users can view their added job applications.
Edit Status: Users can edit the status of their job applications directly from the view page.
Delete Application: Users can delete their job applications.
Project Structure
The project contains the following main components:

AddApplication: Form to add a new job application.
ViewApplications: Displays the list of added job applications with options to edit and delete.
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/job-application-tracker.git
cd job-application-tracker
Install the dependencies:

sh
Copy code
npm install

sh
Copy code
npm start
Usage
Adding a Job Application
To add a job application, navigate to the "Add Application" page and fill out the form with the necessary details:

Company Name
Role
Date Applied
Status (Applied, Interview, Offer, Rejected)
Salary
Click the "Submit" button to save the application.

Viewing Job Applications
To view added job applications, navigate to the "View Applications" page. You will see a list of job applications with the details you entered. Each application card has options to edit the status or delete the application.

Editing the Status of a Job Application
To edit the status of a job application, navigate to the "View Applications" page. Click on the status dropdown of the respective application and select the new status. The status will be updated automatically.

Deleting a Job Application
To delete a job application, navigate to the "View Applications" page. Click on the "Delete" button on the respective application card. The application will be removed from the list.
