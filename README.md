<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# MIS-Invoicing-System
## Management Information System and Invoicing platform for CodeB.
Description

The MIS and Invoicing System is an Internal Management System (IMS) designed for CodeB. It empowers the Sales Team to efficiently manage client information, monitor sales estimates, and generate invoices. The system integrates payment tracking, automates invoice generation upon payment completion, and ensures compliance with GST regulations.

🚀 **Project Overview**

The system enables the Sales Team to manage client information, create estimates, generate invoices, and track payments efficiently. It features role-based access control (RBAC) where Admins have full control, while Salespersons have limited access to invoicing and estimates.

**Key Features**

✔️ User Authentication (JWT-based)

✔️ Role-Based Access Control (Admin & Salesperson)

✔️ Client Management System

✔️ Sales Estimates & Invoice Generation

✔️ Payment Tracking & GST Compliance

✔️ Dashboard for Sales & Revenue Insights

✔️ REST API with Spring Boot & MySQL

**Features**

•  Client Management: Categorize clients under groups, chains, brands, and subzones.

•  Sales Tracking: Create, monitor, and update sales estimates linked to specific Chain IDs.

•  Invoice Generation: Generate invoices automatically upon payment completion.

•  Payment Integration: Track payments associated with invoices.

•  Role-Based Access Control:

     •  Admin: Full control over the system.
     
     •  Salesperson: Restricted access to invoicing features.
     
•  User Authentication:

     •   Secure login and registration.

     •   Forgot Password & Reset Password functionality.

  **Technology Stack**
  
    Frontend

     •    Framework: React.js (preferred for added advantage)

     •    Styling: Bootstrap for responsive design

    Backend

    •     Framework: Spring Boot (REST APIs)

    •     Database: MySQL

  **Code Structure:**

    Frontend

    src/
    
├── components/

│   ├── Dashboard.js

│   ├── Login.js

│   ├── Register.js

│   ├── ForgotPassword.js

│   ├── ResetPassword.js

│   └── Navbar.js

├── services/

│   └── authService.js

├── App.js

├── index.js

└── styles/

    └── App.css

Backend

    src/
    
├── main/

│   ├── java/com/codeb/mis/

│   │   ├── controllers/

│   │   │   ├── AuthController.java

│   │   │   └── InvoiceController.java

│   │   ├── models/

│   │   │   ├── User.java

│   │   │   ├── Invoice.java

│   │   │   └── Payment.java

│   │   ├── repositories/

│   │   │   ├── UserRepository.java

│   │   │   └── InvoiceRepository.java

│   │   └── services/

│   │       └── AuthService.java

└── resources/

    └── application.properties

**Installation**

    Prerequisites

    1. Node.js installed on your system (for frontend).

    2. Java Development Kit (JDK) installed (for backend).

    3. MySQL database set up locally or on a server.

**Steps**

1. Clone the repository:

      git clone https://github.com/<your-username>/MIS-Invoicing-System.git

2. Navigate to the repository:

      cd MIS-Invoicing-System
   
**Frontend Setup**

1. Navigate to the frontend directory:

      cd frontend

2. Install dependencies:

      npm install

3. Start the development server:

      npm start

**Backend Setup**

1. Navigate to the backend directory:

      cd backend

2. Configure database settings in application.properties:
   
      spring.datasource.url=jdbc:mysql://localhost:3306/codeb_mis_db
   
      spring.datasource.username=root
   
      spring.datasource.password=rootpassword
   
3.Run the backend server:
      mvn spring-boot:run

**API Endpoints**

## Authentication APIs

| Method  | Endpoint                   | Description               |
|---------|----------------------------|---------------------------|
| `POST`  | `/api/auth/register`       | User Registration         |
| `POST`  | `/api/auth/login`          | User Login (JWT)         |
| `POST`  | `/api/auth/forgot-password` | Send Password Reset Email |

## Client Management APIs

| Method   | Endpoint              | Description         |
|----------|-----------------------|---------------------|
| `GET`    | `/api/clients`        | Get All Clients    |
| `POST`   | `/api/clients`        | Create a New Client |
| `PUT`    | `/api/clients/{id}`   | Update Client Info  |
| `DELETE` | `/api/clients/{id}`   | Delete a Client     |

## Invoice APIs

| Method  | Endpoint               | Description           |
|---------|------------------------|-----------------------|
| `GET`   | `/api/invoices`        | Get All Invoices     |
| `POST`  | `/api/invoices`        | Create New Invoice   |
| `PUT`   | `/api/invoices/{id}/pay` | Mark Invoice as Paid |


**Usage**

Admin Features

1. Manage users (add/remove).

2. View all client information.

3. Generate and track invoices.

Salesperson Features

1.Create sales estimates.

2.Generate invoices linked to Chain IDs.

Authentication Flow

1.Register as a user with role selection.

2.Login with email and password.

3.Use "Forgot Password" to reset via email if needed.

**Database design**

| **Table Name** | **Description** |
|--------------|------------------------------|
| `Clients`   | Stores client information    |
| `Group`     | Tracks client groups         |
| `Chains`    | Represents chains of clients |
| `Brand`     | Tracks brands linked to clients |
| `Subzones`  | Tracks geographical subzones |
| `Estimate`  | Stores sales estimates       |
| `Invoice`   | Tracks invoices              |
| `Payment`   | Maps payments to invoices    |






>>>>>>> f8d696c269391f4d30809f4a19604fb63a5ceb7a
