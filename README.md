# Invoice Management System

A simple **full-stack web application** to create, view, and manage invoices digitally.
It replaces paper-based records by allowing users to add invoices with vendor, product, amount, and due date details. 

This project helped me learn end-to-end development: building a React frontend, Spring Boot backend APIs, and MySQL database integration.

## Tech Stack
- **Frontend**: React.js (with basic HTML, CSS for UI)
- **Backend**: Java + Spring Boot (REST APIs, Hibernate for database access)
- **Database**: MySQL
- **Tools**: Git, Visual Studio Code, IntelliJ IDEA, MySQL Workbench

## Features
- Add new invoices with vendor name, product name, amount (in Rs), and due date.
- View list of pending invoices in a table format.
- Mark an invoice as "done" (paid) using a button — updates status in real-time.
- Data persists in MySQL database.
- Basic CRUD operations on the backend.

## Screenshots

### 1. Empty State (No Pending Invoices)
![Empty Pending Invoices](Screenshots/empty-invoice-list.png)

Shows the clean UI when there are no invoices: add form at the top and empty table message.

### 2. Pending Invoices List with Data
![Pending Invoices with Entries](Screenshots/pending-invoices-list.png)

After adding multiple invoices:
- Table displays Vendor, Product, Amount, Date, Status (pending), and MARK DONE button.
- Clicking "MARK DONE" updates the status (backend PUT request).

### 3. MySQL Database View
![MySQL Workbench - Invoice Table](Screenshots/mysql-invoice-table.png)

Backend confirmation: Invoices are stored in the `invoice` table with columns like id, vendor, product, amount, date, action (status as 'pending').

## Setup Instructions (Local Development)

### Prerequisites
- Java 17+ (for Spring Boot)
- Node.js 16+ and npm (for React)
- MySQL 8+ installed and running
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Kranthiram/Invoice_management_system.git
cd Invoice_management_system

###2. **Database Setup**

Create a MySQL database named invoiceprocessing (or update application.properties if different).
The backend uses JPA/Hibernate — it can auto-create the invoice table on first run (ensure spring.jpa.hibernate.ddl-auto=update in server/src/main/resources/application.properties).
No need to run SQL scripts manually unless you want custom setup.

###3. **Backend (Spring Boot)**
Bashcd server
# Install dependencies (if using Maven wrapper)
./mvnw clean install
# Or with installed Maven: mvn clean install

# Run the application
./mvnw spring-boot:run

Backend runs on http://localhost:8080 (default port).
APIs: POST /invoices (add), GET /invoices (list), PUT /invoices/{id} (mark done).

###4. **Frontend (React)**
Bashcd ../client
npm install
npm start

Frontend runs on http://localhost:3000.
It fetches data from backend automatically.

###5. **Usage**
Start backend first.
Start frontend.
Open http://localhost:3000 in browser.
Add invoices → see them appear as pending → click "MARK DONE" to update.

### **Learnings & Future Improvements**

Understood REST API creation in Spring Boot and frontend-backend communication (fetch/axios).
Basic state management in React (useState/useEffect for data fetching and updates).
Simple database persistence with JPA.
Future: Add edit/delete, user authentication, search/filter, PDF generation, better error handling.

Feel free to fork/contribute!
