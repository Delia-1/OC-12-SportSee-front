# SportSee

React-based sports analytics dashboard with interactive charts and clean architecture.

## Project Overview

SportSee is an OpenClassrooms project demonstrating professional React development. It displays sports metrics through responsive, interactive visualizations using Recharts.

## Features

- **Interactive Charts**: BarChart (activity), LineChart (sessions), RadarChart (performance), PieChart (objectives)
- **Flexible Data Sources**: Switch between mocked data and live API without restart
- **Responsive Design**: Optimized for desktop and tablet
- **Error Handling**: Dedicated error pages with graceful API recovery
- **Clean Architecture**: Separation of concerns across presentation, models, and data layers

## Tech Stack

- **React** 19.2.5 with React Router 7.15.0
- **Recharts** 3.8.1 for data visualization
- **Vite** 8.0.10 with HMR for development
- **Sass** for styling
- **ESLint** for code quality

## Installation

**Prerequisites**: Node.js 18+, npm 9+, Backend API running on `http://localhost:3000` (or use mocked data)

```bash
git clone git@github.com:Delia-1/OC-12-SportSee-front.git
cd SportSee
npm install
```

## Backend Setup

SportSee supports two data sources:

**Option 1: Mocked Data**

- `src/mockedData.js` and `src/mockedApi.js`
- No backend required; ideal for UI development

**Option 2: Real Backend API**

- The backend API is available here:

https://github.com/OpenClassrooms-Student-Center/SportSee

- Ensure backend runs on `http://localhost:3000`
- Can toggle between sources at runtime without restarting

## Frontend Setup

```bash
npm run dev        # Start dev server at http://localhost:5173
```

Access at `http://localhost:5173/`. Vite's auto-refreshes on file changes.

## Project Architecture

MVC-inspired separation of concerns with unidirectional data flow:

```
Components (UI) ← Models (Data Shaping) ← useFetchData (Data Access) ← Backend API / Mocked Data
```

**Key Principles**:

- **Separation of Concerns**: Each layer has a single responsibility
- **Dependency Inversion**: Swap mocked/real API without changing components
- **Testability**: Each layer independently testable

## Folder Structure

```
src/
├── assets/
├── components/          # Reusable React components
│   └── graphs/         # Chart components (BarChart, LineChart, RadarChart, PieChart)
├── pages/              # Page components (App, Homepage, ErrorPage)
├── models/             # Data transformation (HomepageModel, WeightControlModel, etc.)
├── styles/             # Sass files (main.scss, abstracts, components, pages)
├── utils/              # Hooks and utilities (useFetchData.jsx)
├── main.jsx            # Entry point
├── mockedApi.js        # Mock API interface
└── mockedData.js       # Mock data fixtures

```

## Design Pattern

The project follows a lightweight architecture inspired by MVC principles:

- Models handle data transformation and formatting
- Components focus on rendering
- Custom hooks manage data fetching and state
- APIs are abstracted behind a common interface

This separation of concerns allows components to consume already formatted data while keeping business and transformation logic outside the presentation layer.

## Model Layer

Data transformation classes that shape raw API responses for components. Data from the model can be used without any other tranformation in their components

## Recharts Integration

Composable chart library built on React components. **Why Recharts**: React-native components, responsive containers, extensive customization, excellent performance.

**Chart Types**: LineChart (trends), BarChart (comparisons), RadarChart (multi-dimensional), PieChart (proportions). Some wrapped in `ResponsiveContainer` for automatic responsive scaling.

**Data Format**: Array of objects. Example:

```javascript
const data = [
  { date: "2024-01-01", weight: 75.5, calories: 2500 },
  { date: "2024-01-02", weight: 75.2, calories: 2450 },
];
```

Models format API data into this structure, then components render with Recharts. Custom tooltips, dots, and cursors provide polished UX.

[Recharts Documentation](https://recharts.org)

## Error Handling

- Invalid user IDs → automatic redirect to `/errorpage`
- API failures → graceful handling with error messages and redirect to `/errorpage`
- useFetchData hook → centralized error management and navigation

---

SportSee demonstrates professional React development with clean separation of concerns, custom hooks, model-based data transformation, and responsive Recharts integration. Developed as part of the OpenClassrooms Front-End Developer curriculum.
