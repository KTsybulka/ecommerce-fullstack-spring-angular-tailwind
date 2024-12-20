# Ecommerce Platform (Fullstack Project)

Welcome to the **Ecommerce Platform** project repository! This project is built using a modern technology stack and adheres to clean coding principles, including **Hexagonal Architecture** and optimized front-end and back-end integration.

---

## Overview

This project demonstrates a fully functional ecommerce application with the following stack:

- **Backend**: Spring Boot 3
- **Frontend**: Angular 18, Tailwind CSS
- **Database**: PostgreSQL
- **Authentication**: Kinde
- **Payments**: Stripe
- **Deployment**: Docker with Compose

The repository follows a **monorepo structure** for streamlined management of all services and components.

---

## Key Features

- 🛠️ **Admin Panel**: Comprehensive control over product and category management.
- 🔍 **Filter Engine**: Efficient search and filtering options for products.
- 🌐 **Angular SSR**: Improved SEO and performance through server-side rendering.
- 💳 **Stripe Integration**: Seamless and secure payment processing.
- 🏗️ **Hexagonal Architecture**: Decoupled and scalable backend.
- 📦 **Dockerized Deployment**: Simplified setup and consistent environments.

---

## Prerequisites

Before running the project, ensure the following tools are installed:

- **Node.js**: v20.17 LTS
- **Angular CLI**: v18
- **JDK**: v21
- **Docker**: Docker Desktop (latest version)
- **IDE**: IntelliJ IDEA or VS Code

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ecommerce-springboot-angular.git
cd ecommerce-springboot-angular
```

### 2. Backend Setup

Navigate to the backend folder and build the Spring Boot application:
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

### 3. Frontend Setup

Navigate to the frontend folder, install dependencies, and start the Angular application:
```bash
cd frontend
npm install
ng serve
```

### 4. Run with Docker

For a fully dockerized setup, use Docker Compose:
```bash
docker-compose up --build
```

---

## Accessing the Application

- Frontend: [http://localhost:4200](http://localhost:4200)
- Backend API: [http://localhost:8080](http://localhost:8080)

---

## Project Structure

This repository uses a monorepo structure for clarity and efficiency:

```
/
├── backend/   # Spring Boot API
├── frontend/  # Angular client
├── docker/    # Docker configurations
└── docs/      # Documentation
```

---

## Default Admin Credentials

To access the admin panel:
- **Username**: `admin`
- **Password**: `admin123`

---

## Contribution Guidelines

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For support or inquiries, please email [your-email@example.com](mailto:your-email@example.com).

---

Thank you for exploring the **Ecommerce Platform** project! 🚀
