# P-PFLO

## Overview
P-PFLO is a modern web application built with React, TypeScript, and TailwindCSS. It is designed to showcase a portfolio, including certificates, experiences, hobbies, projects, and skills. The application is structured to provide a clean and interactive user experience.

## Features
- **Responsive Design**: Ensures compatibility across various devices and screen sizes.
- **Interactive Animations**: Powered by Framer Motion for smooth transitions and animations.
- **Dynamic Data**: Displays portfolio data such as certificates, experiences, hobbies, and projects dynamically.
- **Reusable Components**: Modular and reusable React components for scalability.
- **TailwindCSS Integration**: Simplifies styling with utility-first CSS.

## Tech Stack
- **Frontend**: React, TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Linting**: ESLint

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ogrodowczyk87/P-PFLO.git
   ```

2. Navigate to the project directory:
   ```bash
   cd P-PFLO
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run build:css`: Watches and builds TailwindCSS styles.

## Folder Structure
```
P-PFLO/
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable React components
│   ├── data/              # Static data files
│   ├── layouts/           # Page layout components
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Dependencies
### Main Dependencies
- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework.
- **Framer Motion**: A library for animations and gestures.

### Dev Dependencies
- **TypeScript**: A strongly typed programming language.
- **Vite**: A fast build tool for modern web projects.
- **ESLint**: A tool for identifying and fixing code quality issues.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Author
Developed by [Ogrodowczyk87](https://github.com/Ogrodowczyk87).
