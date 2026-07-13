# Front-end AI Engineering Capstone

A front-end capstone project exploring how to design, build, and ship AI-powered web experiences with HTML, CSS, JavaScript, and Node.js.

This repository documents the development of an interactive web application that connects users to AI-driven functionality through a clean, accessible interface. The project is currently in early development and will evolve as core features are implemented.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [Development](#development)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

### Current

- Project scaffolding with version control, licensing, and development guidelines
- Standard Node.js `.gitignore` for front-end and tooling workflows
- Documented conventions for clean, modular, beginner-friendly code

### Planned

- Responsive, accessible UI built with semantic HTML and modern CSS
- Client-side JavaScript for dynamic interactions and state management
- Integration with an AI service or API for core capstone functionality
- Local development workflow with Node.js tooling
- Clear error handling and user feedback throughout the application

## Tech Stack

| Layer        | Technology |
| ------------ | ---------- |
| Markup       | HTML       |
| Styling      | CSS        |
| Interactivity| JavaScript |
| Tooling      | Node.js    |
| Version control | Git, GitHub |

## Installation

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (LTS recommended)
- A modern web browser (Chrome, Firefox, Edge, or Safari)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Fatimaanees132/Front-end-AI-Engineering-Capstone.git
   cd Front-end-AI-Engineering-Capstone
   ```

2. **Install dependencies** *(when a `package.json` is added)*

   ```bash
   npm install
   ```

3. **Configure environment variables** *(when required)*

   Copy the example environment file and add your credentials:

   ```bash
   cp .env.example .env
   ```

   > Never commit `.env` files or API keys to the repository.

## Usage

### View the application

Once front-end files are added, open the project in your browser:

- **Option A:** Open `index.html` directly in your browser
- **Option B:** Use a local development server *(recommended)*

  ```bash
   npm run dev
   ```

  > The `dev` script will be available after project scripts are configured in `package.json`.

### Run locally with a simple server

If no build tooling is set up yet, you can serve static files with Node.js:

```bash
npx serve .
```

Then visit the URL shown in your terminal (typically `http://localhost:3000`).

## Repository Structure

Current layout:

```text
Front-end-AI-Engineering-Capstone/
├── .gitignore          # Ignored files and directories
├── CLAUDE.md           # Project conventions and AI assistant guidelines
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

Expected layout as development progresses:

```text
Front-end-AI-Engineering-Capstone/
├── public/             # Static assets (images, icons, fonts)
├── src/
│   ├── css/            # Stylesheets
│   ├── js/             # Client-side JavaScript modules
│   └── index.html      # Main application entry point
├── .env.example        # Environment variable template
├── package.json        # Project metadata and scripts
└── ...
```

## Development

This project follows these conventions:

- Use meaningful variable and function names
- Keep functions modular and focused
- Write clean, readable, beginner-friendly code
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages

Example commit format:

```text
feat: add chat input component
fix: resolve mobile layout overflow
docs: update installation instructions
```

## Future Improvements

- [ ] Define and implement the core AI-powered user workflow
- [ ] Add `package.json` with dev, build, and preview scripts
- [ ] Introduce a component-based front-end structure under `src/`
- [ ] Add responsive design and accessibility testing (WCAG basics)
- [ ] Integrate an AI API with secure environment variable handling
- [ ] Add unit or integration tests for critical UI logic
- [ ] Set up CI checks for linting and basic validation
- [ ] Add screenshots and a live demo link once deployed

## Contributing

Contributions, issues, and feature suggestions are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes using Conventional Commits
4. Push to your branch (`git push origin feat/your-feature`)
5. Open a Pull Request

Please keep changes focused and preserve existing functionality unless a breaking change is intentional and documented.

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 Fatimaanees132
