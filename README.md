# Chunked-file-upload-ctruh


### Table of Contents

1. [Repository Cloning and Setup Guide](#repository-cloning-and-setup-guide)
2. [Folder Structure](#folder-structure)
3. [API Documentation](#api-documentation)
   - [POST /upload](#post-upload)
4. [Frontend Interaction](#frontend-interaction)
5. [Additional Notes](#additional-notes)

---

### 1. Repository Cloning and Setup Guide

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/shashanksb17/Chunked-file-upload-ctruh
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd Chunked-file-upload-ctruh
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following content and replace values as needed:
     ```env
     PORT=3000
     ```

5. **Run the Application:**
   ```bash
   npm run start 
   or
   npm run server
   ```

---

### 2. Folder Structure

```
chunked-file-upload/
|-- controllers/
|   |-- fileController.js
|
|-- routes/
|   |-- index.js
|
|-- services/
|   |-- fileService.js
|
|-- utils/
|   |-- chunkedUpload.js
|
|-- uploads/   // Folder to store uploaded files
|-- .env       // Environment variable configuration
|-- index.html
|-- server.js
|-- package.json
```

---

### 3. API Documentation

#### `POST /upload`
- **Description:** Uploads a file in chunks with parallel processing.
- **Request:**
  - **Method:** POST
  - **Endpoint:** `/upload`
  - **Headers:**
    - Content-Type: multipart/form-data
  - **Body:**
    - form-data
      - Key: `file`
      - Value: (Select your file)

- **Response:**
  - **Success:**
    - Status: 200 OK
    - Body:
      ```json
      {
        "success": true,
        "filePath": "/uploads/your-file-name.ext"
      }
      ```
  - **Error:**
    - Status: 500 Internal Server Error
    - Body:
      ```json
      {
        "success": false,
        "error": "Error message"
      }
      ```

---

### 4. Frontend Interaction

- **Open the Webpage:**
  - Open your browser and go to `http://localhost:3000`.
  - You will see a file upload form.

- **Upload a File:**
  - Click on "Choose File" and select a file.
  - Click on the "Upload" button.

- **View Upload Status:**
  - During upload, a loader will be displayed.
  - After completion, a success message will appear with the file path.
  - If there's an error, an error message will be displayed.

---

### 5. Additional Notes

- **File Storage:**
  - Uploaded files are stored in the `uploads` folder.

- **Environment Variables:**
  - `PORT`: Specifies the port on which the server runs.

