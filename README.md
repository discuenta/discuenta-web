# Discuenta Web

A modern web application for managing discounts and receivables, built with Vue.js 3 and PrimeVue.

## Features

- **Dashboard**: Main overview of the application
- **Document Management**: Handle various types of financial documents
- **Receivables Management**: Track and manage receivable documents
- **Responsive UI**: Built with PrimeVue components and Aura theme

## Tech Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **UI Library**: PrimeVue 4.3.6 with Aura theme
- **Icons**: PrimeIcons
- **Routing**: Vue Router 4
- **Internationalization**: Vue I18n
- **HTTP Client**: Axios

## Project Structure

```
src/
├── app.vue                 # Root Vue component
├── main.js                 # Application entry point
├── style.css              # Global styles
├── router/
│   └── index.js           # Vue Router configuration
├── shared/
│   ├── components/        # Reusable components
│   │   └── main-layout.vue
│   ├── model/            # Shared data models
│   └── pages/            # Shared pages
│       └── dashboard.vue
└── receivables/
    └── model/            # Receivables domain models
        └── document.entity.js
```

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd discuenta-web
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally

**Version**: 0.0.0  
**Last Updated**: July 2025
