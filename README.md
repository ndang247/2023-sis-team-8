# An SIS Project (UTS AI Assistance)

## How to use Docker Compose to run both the front-end and back-end at the same time

- Install Docker Compose
- https://docs.docker.com/compose/install/linux/

1. Make sure you are in the project main directory
2. type in the terminal: `docker compose build`
3. type in the terminal: `docker compose up`

- This should startup both the front-end and back-end servers

## Running the front-end locally without Docker Compose

- Clone the project either via HTTP or SSH
- Open the project in a terminal and `cd` or navigate into `fe` directory
- Run the command `npm install` to install all the required dependencies
- Run the command `npm run dev` to run and open up the project in `localhost` or `http://127.0.0.1:5173`
