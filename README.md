# My Express API

A simple Express.js API with a POST endpoint to sort characters in a string, documented using Swagger.

---

## Features

- `/sort` POST endpoint to sort characters alphabetically.
- Swagger UI available for API documentation.
- JSON-based API with easy extensibility.
- Minimal setup using `express-generator`.

---

## Project Structure

```

my-api/
├── routes/
│   ├── index.js
│   ├── sort.js      # Your POST endpoint logic
├── swagger.js       # Swagger config
├── app.js           # Main Express app
├── bin/www          # Server entry point
├── package.json

```

---

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the server**

   ```bash
   npm start
   ```

3. **Access the API**

   * Swagger UI: [http://localhost:3000](http://localhost:3000)
   * API Endpoint: [http://localhost:3000/sort](http://localhost:3000/sort)

---

## API Usage

### POST `/sort`

**Request Body:**

```json
{
  "data": "example"
}
```

**Response:**

```json
{
  "word": ["a", "e", "e", "l", "m", "p", "x"]
}
```

---

## API Documentation

API is documented using [Swagger UI](https://swagger.io/tools/swagger-ui/).

Visit: [http://localhost:3000](http://localhost:3000)

---

## Author

Created by \[Boitumelo Moalosi]
