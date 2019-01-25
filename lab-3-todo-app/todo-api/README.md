# TODO App - REST API 

## Build

### Yarn

```bash
yarn install
```

### Docker

```bash
docker build -t todo-api .
```

## Run

### Yarn

Development:

```bash
yarn serve
```

Production:

```bash
yarn start
```

### Docker

Run the container:

```bash
docker run -p 8080:8080 todo-api
```

And using docker compose:

```bash
docker-compose up --build
```

If you need to change any of the environment variables, please use the `.env` file.

## Linting

To run ESLint, execute:

```bash
yarn lint
```

## Documentation

Once you run the application, the documentation of the API can be found at [http://localhost:8080/swagger](http://localhost:8080/swagger)
