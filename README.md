## To Run Backend Service

### Creating an Virtual environment

1. Install virtualenv
```bash
  pip install virtualenv
```
2. Create a new virtualenv named demo
```bash
  virtualenv demo
```
3. Activate the virtualenv
```bash
  demo\Scripts\activate
```

### Installing necessary modules
1. Go to backend directory
```bash
  cd backend
```
2. Install all modules
```bash
  pip install -r requirements.txt
```

### Running the backend server
1. Create a .env file
```
  HUGGING_FACE_TOKEN=your_huggingface_access_token
```
2. Run the server.py
```python
  python server.py
```



## To Run Frontend website
1. Open a new terminal

2. Go to frontend directory
```bash
  cd frontend
```

3. Install the necessary js modules using npm
```bash
  npm install
  after completion of  installation,
  npm install axios 
```

4. Run the website
```
  npm run dev
```

