# Django + React + PostgreSQL 3D Model Viewer

This project is a web application for managing and viewing 3D models using Django as the backend, React as the frontend, and PostgreSQL as the database. It allows you to upload, store, and retrieve metadata and files for 3D models, which can be rendered in the browser using Three.js.

---

## Features

- **Django Backend**: Handles file uploads, metadata storage, REST API, and API endpoints.
- **PostgreSQL Database**: Stores metadata about 3D models (e.g., file paths, names, descriptions).
- **React Frontend**: Fetches metadata from the API and displays the 3D models using Three.js and AR View option for mobile devices.
- **File Management**: Uploads and serves 3D model files via Django's media handling.
- **RESTful API**: Enables CRUD operations on 3D model data.

---

## Video Link :[Watch here](https://www.loom.com/share/e1bc399aaa9547c8a9b05ec021f39913?sid=11a21c6d-ffe0-4d6d-be1b-54f39304ef98)

---

## Prerequisites

- Python 3.x
- Node.js and npm/yarn
- PostgreSQL

---

## Setup Instructions

### Backend (Django)

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Set up a virtual environment**:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure PostgreSQL**:
   - Create a PostgreSQL database.
   - Update the `DATABASES` setting in `settings.py`:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.postgresql',
             'NAME': 'your_database_name',
             'USER': 'your_database_user',
             'PASSWORD': 'your_database_password',
             'HOST': 'localhost',
             'PORT': '5432',
         }
     }
     ```

5. **Run migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Start the development server**:
   ```bash
   python manage.py runserver
   ```

7. **Serve media files**:
   Ensure your `MEDIA_URL` and `MEDIA_ROOT` settings are configured in `settings.py`:
   ```python
   MEDIA_URL = '/media/'
   MEDIA_ROOT = BASE_DIR / 'media'
   ```

8. **Test API Endpoints**:
   - Navigate to `http://127.0.0.1:8000/api/models/1` to test the API.

---

### Frontend (React)

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open `http://localhost:5173` in your browser.

---

## API Endpoints

| Endpoint             | Method | Description                    |
|----------------------|--------|--------------------------------|
| `/api/models/`       | GET    | Retrieve all 3D models         |
| `/api/models/<id>/`  | GET    | Retrieve a single 3D model     |
| `/api/models/`       | POST   | Upload a new 3D model          |
| `/api/models/<id>/`  | PUT    | Update a 3D model's metadata   |
| `/api/models/<id>/`  | DELETE | Delete a 3D model              |

---

## Project Structure

```
.
├── backend
│   ├── models.py          # Django models for 3D metadata
│   ├── serializers.py     # Django REST Framework serializers
│   ├── views.py           # API views for 3D models
│   ├── urls.py            # URL routing for the backend
│   └── settings.py        # Backend configuration
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── ModelViewer.js # Renders 3D models using Three.js
│   │   │   └── Scanner.js     # For scanning the QR Code
│   │   ├── App.js             # Main React component
│   │   └── index.js           # React entry point
│   ├── package.json           # Frontend dependencies
│   └── .env                   # Environment variables for frontend
├── requirements.txt        # Backend dependencies
└── README.md               # Project documentation
```

---

## Example Usage

1. **Upload a 3D Model**:
   - Use Django Admin or a REST client (e.g., Postman) to upload a `.glb` or `.gltf` file.

2. **Fetch and Render the Model**:
   - The React frontend fetches the model metadata and renders the 3D model using Three.js.

3. **View the Model**:
   - Open the React app and interact with the 3D model viewer.

---

## Technologies Used

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Three.js
- **Database**: PostgreSQL
- **Other**: Docker, Media file handling

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
