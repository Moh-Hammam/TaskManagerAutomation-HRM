# Full Stack Task Automation Demo

This project demonstrates automated UI and API testing for a simple full-stack web application built with a **React frontend** and a **Node.js/Express backend**. It includes:

- Functional UI automation with **Cypress**
- API testing with **Jest** and **Supertest**
- Test reporting and documentation

---

## Tech Stack

- **Frontend**: React (with routing, login, task CRUD)
- **Backend**: Node.js + Express (with `/login` and `/tasks` endpoints)
- **UI Testing**: Cypress
- **API Testing**: Jest + Supertest
- **Reporting**: Cypress HTML Reports, Jest JUnit

---

2. Start Backend
bash
Copy code
cd Backend
npm install
npm start
Server will run at: http://localhost:5000

3. Start Frontend
bash
Copy code
cd ../Frontend
npm install
npm start
App will run at: http://localhost:3000



Functional UI Tests (Cypress)
Scenarios Covered:
1- Login with valid and invalid credentials

2- Create new task

3- Edit task

4- Delete task

5- Assertions on task visibility

Run Cypress Tests:

1- cd Frontend
2- npx cypress open



API Tests (Jest + Supertest)
Scenarios Covered
POST /login: Valid/Invalid credentials

GET /tasks: List all tasks

POST /tasks: Create task

PUT /tasks/:id: Edit task

DELETE /tasks/:id: Delete task

Run API Tests:


1- cd Backend
2- npm test

.
├── Backend/
│   ├── server.js
│   ├── server.test.js
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   └── SignIn.jsx
│   │   ├── App.js
│   │   
│   ├── cypress/
│   │   └── e2e/
│   │       └── taskFlow.cy.ts
│   └── package.json
├── README.md


Test Strategy Summary:

UI:	Login, Create/Edit/Delete tasks
API:	Auth & Task CRUD
Reports:	Cypress HTML + Jest JUnit
Tools Used:	Cypress, Jest, Supertest