# Cypress Project
This project is a Cypress-based end-to-end testing framework. It includes configurations for running tests, generating reports, and serving the reports.

## Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)
- Cypress (version 7.0 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/LeDoanTrung/CypressPractice.git
    cd CypressPractice
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running Tests

To run the tests, use the following command:
```sh
npm run test
```

To run tests in a specific browser, use:
```sh
npm run test:chrome
npm run test:firefox
```

## Generating Reports

To generate test reports, use the following command:
```sh
npm run report
```

## Serving Reports

To serve the generated reports, use the following command:
```sh
npm run serve-report
```

## Folder Structure

- `cypress/`: Contains all the test specifications and support files.
- `reports/`: Contains the generated test reports.
- `cypress.json`: Configuration file for Cypress.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
