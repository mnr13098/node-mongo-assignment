# Person Service - RESTful API

This is a simple RESTful API built using **Node.js, Express, and MongoDB** for managing a collection of people. It supports CRUD operations.
https://drive.google.com/file/d/1WL-OD-D1yVVLu2WipmNMcgyEU9d0QAht/view?usp=drivesdk

## Features
- **GET /person** - Retrieve all persons
- **POST /person** - Create a new person
- **PUT /person/:id** - Update a person by ID
- **DELETE /person/:id** - Delete a person by ID

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally or on MongoDB Atlas
- [Postman](https://www.postman.com/) or cURL for API testing

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/person-service.git
   cd person-service
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start MongoDB locally:**
   ```sh
   mongod --dbpath C:\data\db
   ```
   *(Ensure the directory `C:\data\db` exists. Create it if necessary.)*

4. **Run the server:**
   ```sh
   node server.js
   ```
   OR using `nodemon` for auto-restart on file changes:
   ```sh
   npx nodemon server.js
   ```

The server should now be running at `http://localhost:5000`.

## API Endpoints

### **1. Get All Persons**
- **Method:** `GET`
- **URL:** `http://localhost:5000/person`
- **Response Example:**
  ```json
  [
    {
      "_id": "65abc1234567890",
      "name": "John Doe",
      "age": 30,
      "gender": "Male",
      "mobile": "1234567890"
    }
  ]
  ```

### **2. Create a Person**
- **Method:** `POST`
- **URL:** `http://localhost:5000/person`
- **Body (JSON):**
  ```json
  {
    "name": "Jane Doe",
    "age": 28,
    "gender": "Female",
    "mobile": "0987654321"
  }
  ```

### **3. Update a Person**
- **Method:** `PUT`
- **URL:** `http://localhost:5000/person/{id}`
- **Body (JSON - Example to update age):**
  ```json
  {
    "age": 29
  }
  ```

### **4. Delete a Person**
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/person/{id}`
- **Response:**
  ```json
  {
    "message": "Person deleted successfully"
  }
  ```

## Troubleshooting
- **MongoDB connection error (ECONNREFUSED):**
  - Ensure MongoDB is running: `mongod`
  - Use `127.0.0.1` instead of `localhost` in `mongoose.connect()`:
    ```js
    mongoose.connect('mongodb://127.0.0.1:27017/peopleDB');
    ```

## License
This project is licensed under the MIT License.

---

🚀 **Now your API is ready to use!**

