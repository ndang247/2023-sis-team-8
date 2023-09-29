## Run both backend and front end servers with Docker Compose 
Install Docker Desktop:
https://docs.docker.com/compose/install/

1. Make sure youre in the projects main directory
2. type in the terminal: ```docker compose build```
3. type in the terminal: ```docker compose up```

This should startup both the frontend and backend servers

## Run Back-end Server Locally

Clone the project

```bash
  git clone https://github.com/ndang247/2023sis-team8.git
```

Go to the project back-end directory

```bash
  cd be
```

Install dependencies

```bash
  pip install -r requirements.txt
```

```bash
  pip install typing-extensions --upgrade
```

Start the server

```bash
  uvicorn main:app
```

Add reload flag for auto-reload

```bash
  uvicorn main:app --reload
```

## API Documentation

[ http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

[ http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Running Tests

Install dependencies

```bash
  pip install starlette
```

```bash
  pip install httpx
```

```bash
  pip install pytest
```

To run tests, run the following command

```bash
  pytest
```
