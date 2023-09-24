
## Run Backend Server Locally

Clone the project

```bash
  git clone https://github.com/ndang247/2023sis-team8.git
```

Go to the project backend directory

```bash
  cd be
```

Install dependencies

```bash
  pip install fastapi
```
```bash
  pip install typing-extensions --upgrade
```
```bash
  pip install pymongo
```
```bash
  pip install python-dotenv
```
```bash
  pip install "uvicorn[standard]"
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

[ http://127.0.0.1:8000/docs]( http://127.0.0.1:8000/docs)

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

