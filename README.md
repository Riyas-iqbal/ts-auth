# Typescript Authentication 

This repository contains a practical implementation of JWT (JSON Web Token) and Node.js for better application security. It demonstrates how to protect client data by creating a REST API using Node.js, TypeScript, and Express, enhanced with JWT support. The project follows JWT security best practices and provides a secure authentication and authorization mechanism for API endpoints.

## Folder Structure

The repository is structured as follows:

- `config/`: Contains configuration files for the application.
- `controllers/`: Contains the API controllers for handling requests and generating JWT.
- `exceptions/`: Contains custom exception classes for error handling.
- `middlewares/`: Contains the middleware functions for validating JWT and authorizing requests.
- `routes/`: Defines the API routes and their corresponding controller functions.
- `state/`: Contains state-related files for the application.
- `index.ts`: Entry point of the application.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Riyas-iqbal/ts-auth.git`
2. Navigate to the project directory: `cd ts-auth`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `JWT_SECRET`: Secret key used for signing and verifying JWT.
5. Start the application: `npm start`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


