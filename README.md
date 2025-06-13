# ng2-starter: A Full-Stack, Dynamic Angular Boilerplate

`ng2-starter` is an advanced boilerplate project for building highly configurable, data-driven Angular applications. It provides a complete full-stack solution with a dynamic Angular frontend and a Node.js/Express.js backend designed specifically to manage and persist the UI's configuration in MongoDB.

This architecture allows developers to dynamically generate pages, forms, data visualizations, and more, based on rules and configurations saved in the database, rather than hard-coding them in the client-side application.

---

## Table of Contents

- [Key Features](#key-features)
- [Core Technologies](#core-technologies)
- [Getting Started](#getting-started)
- [Modular Architecture](#modular-architecture)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Key Features

* **Full-Stack Foundation:** Includes a ready-to-use Node.js, Express.js, and MongoDB backend designed to store and serve all UI and client-side configurations.
* **Highly Modular Frontend:** The Angular client is broken down into logical sub-libraries for common enterprise needs, such as `authentication`, `forms`, `grids`, `diagrams`, `layout`, and more.
* **Dynamic UI Generation:** The `page` and `form` modules work together to create entire user interfaces dynamically based on JSON configurations retrieved from the database.
* **Configurable Data Visualization:** A unique `source` module allows you to define API endpoints on the fly and connect the resulting data to a `diagram` module for powerful, runtime-configured visualizations.
* **GWT-Based Authorization:** Utilizes a custom `rule` module where you can define authorization and access-control logic using a GWT style.

## Core Technologies

* **Frontend:** Angular, TypeScript, RxJS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB

---

## Getting Started

### Prerequisites

Ensure you have Node.js and the Angular CLI installed on your machine.

### Installation & Development

1.  Clone the repository:
    ```bash
    git clone [your-repository-url]
    ```
2.  Install dependencies for all packages (run from the root):
    ```bash
    npm install
    ```
3.  Run the client-side dev server (Angular):
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

4.  Run the backend dev server (Node.js):
    ```bash
    npm run debug
    ```

### Production Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

## Modular Architecture

This project follows a monorepo structure where the architecture is split into many individual, reusable packages published on NPM.

| Project | Package | Version | Links |
| :--- | :--- | :--- | :--- |
| **authentication** | [`@soushians/authentication`](https://npmjs.com/package/@soushians/authentication) | [![latest](https://img.shields.io/npm/v/@soushians/authentication/latest.svg)](https://npmjs.com/package/@soushians/authentication) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/ng2starter-authentication) |
| **config** | [`@soushians/config`](https://npmjs.com/package/@soushians/config) | [![latest](https://img.shields.io/npm/v/@soushians/config/latest.svg)](https://npmjs.com/package/@soushians/config) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/config) |
| **diagram** | [`@soushians/diagram`](https://npmjs.com/package/@soushians/diagram) | [![latest](https://img.shields.io/npm/v/@soushians/diagram/latest.svg)](https://npmjs.com/package/@soushians/diagram) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/diagram) |
| **form** | [`@soushians/form`](https://npmjs.com/package/@soushians/form) | [![latest](https://img.shields.io/npm/v/@soushians/form/latest.svg)](https://npmjs.com/package/@soushians/form) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/form) |
| **frontend-authentication**| [`@soushians/frontend-authentication`](https://npmjs.com/package/@soushians/frontend-authentication)| [![latest](https://img.shields.io/npm/v/@soushians/frontend-authentication/latest.svg)](https://npmjs.com/package/@soushians/frontend-authentication)| [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/frontend-authentication) |
| **grid** | [`@soushians/grid`](https://npmjs.com/package/@soushians/grid) | [![latest](https://img.shields.io/npm/v/@soushians/grid/latest.svg)](https://npmjs.com/package/@soushians/grid) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/grid) |
| **gwt-steps** | [`@soushians/gwt-steps`](https://npmjs.com/package/@soushians/gwt-steps) | [![latest](https://img.shields.io/npm/v/@soushians/gwt-steps/latest.svg)](https://npmjs.com/package/@soushians/gwt-steps) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/gwt-steps) |
| **layout** | [`@soushians/layout`](https://npmjs.com/package/@soushians/layout) | [![latest](https://img.shields.io/npm/v/@soushians/layout/latest.svg)](https://npmjs.com/package/@soushians/layout) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/layout) |
| **page** | [`@soushians/page`](https://npmjs.com/package/@soushians/page) | [![latest](https://img.shields.io/npm/v/@soushians/page/latest.svg)](https://npmjs.com/package/@soushians/page) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/page) |
| **rule** | [`@soushians/rule`](https://npmjs.com/package/@soushians/rule) | [![latest](https://img.shields.io/npm/v/@soushians/rule/latest.svg)](https://npmjs.com/package/@soushians/rule) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/rule) |
| **shared** | [`@soushians/shared`](https://npmjs.com/package/@soushians/shared) | [![latest](https://img.shields.io/npm/v/@soushians/shared/latest.svg)](https://npmjs.com/package/@soushians/shared) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/shared) |
| **socket** | [`@soushians/socket`](https://npmjs.com/package/@soushians/socket) | [![latest](https://img.shields.io/npm/v/@soushians/socket/latest.svg)](https://npmjs.com/package/@soushians/socket) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/socket) |
| **source** | [`@soushians/source`](https://npmjs.com/package/@soushians/source) | [![latest](https://img.shields.io/npm/v/@soushians/source/latest.svg)](https://npmjs.com/package/@soushians/source) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/source) |
| **user** | [`@soushians/user`](https://npmjs.com/package/@soushians/user) | [![latest](https://img.shields.io/npm/v/@soushians/user/latest.svg)](https://npmjs.com/package/@soushians/user) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/user) |
| **widget** | [`@soushians/widget`](https://npmjs.com/package/@soushians/widget) | [![latest](https://img.shields.io/npm/v/@soushians/widget/latest.svg)](https://npmjs.com/package/@soushians/widget) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/widget) |
| **widget-types** | [`@soushians/widget-types`](https://npmjs.com/package/@soushians/widget-types) | [![latest](https://img.shields.io/npm/v/@soushians/widget-types/latest.svg)](https://npmjs.com/package/@soushians/widget-types) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/snoorghorbani/ng2starter-authentication/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/snoorghorbani/widget-types) |

---

## Testing

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

## Contributing

Contributions are welcome! Please feel free to fork the repository, make your changes, and open a pull request.

## License

This project is licensed under the MIT License.
