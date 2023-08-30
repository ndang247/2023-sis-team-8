
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
  pip install "uvicorn[standard]"
```
```bash
  pip install langchain
  pip install openai
  pip install bs4
  pip install lxml
```

Start the server

```bash
  uvicorn main:app
```

