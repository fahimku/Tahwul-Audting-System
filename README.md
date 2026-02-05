# Tahwul Auditing System

A React application built with Vite, React Router, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/      # Reusable React components
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── layouts/         # Layout components (e.g., Layout.jsx)
├── pages/           # Page components (e.g., Home.jsx, About.jsx)
├── services/        # API services and external integrations
├── utils/           # Utility functions and helpers
├── assets/          # Static assets (images, icons, etc.)
├── App.jsx          # Main App component with routing
├── main.jsx         # Application entry point
└── index.css        # Global styles with Tailwind directives
```

## 🛠️ Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Charts and graphs (bar charts, gauges, etc.)
- **Hugeicons** - Icon library
- **ESLint** - Code linting

## 📊 Graph package

Charts and graphs are built with **[Recharts](https://recharts.org/)**. The app uses it for:

- **Bar charts** – e.g. 12-Month Performance on the Dashboard
- **Custom SVG / gauges** – e.g. Overall Compliance Score and Audit Readiness semi-circular gauges

Install (already in `package.json`):

```bash
npm install recharts
```

## 🧭 Routing

Routing is handled by **React Router DOM** (`BrowserRouter`, `Routes`, `Route`) in `src/App.jsx`.

| Path           | Page        |
|----------------|-------------|
| `/`            | Dashboard   |
| `/perspectives`| Perspectives|
| `/tasks`       | Tasks       |
| `/documents`   | Documents   |
| `/reports`     | Reports     |
| `/users`       | Users & Roles |

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. Tailwind directives are imported in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
