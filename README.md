# Portfolio Data Server

This is a simple Node.js server designed to serve data and images to my portfolio website. It uses Express.js and CORS to handle requests from a specified frontend URL.

## Features

- Serves JSON data from `data.json`.
- Serves a profile image from `uploads/profile.jpg`.
- Configurable frontend URL and port via environment variables.
- Uses CORS to allow requests only from the specified frontend URL.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- A `.env` file with the following variables:
  - `PORT`: The port the server should run on (optional, defaults to 3000).
  - `FRONTEND_URL`: The URL of the portfolio website.

### Installation

1.  Clone the repository:

    ```bash
    git clone <https://github.com/kadmytro/portfolio-website-backend>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <portfolio-website-backend>
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env` file in the root directory and add your configuration:

    ```
    PORT=3000
    FRONTEND_URL=frontend_url
    ```

5.  Place your `data.json` file in the root directory and your `profile.jpg` in an `uploads` folder.

### Running the Server

```bash
npm start
```
