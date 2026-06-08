# A. Sravan Kumar - Personal 3D Portfolio Website

A premium, interactive personal portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Three.js** (via React Three Fiber/Drei), and **Framer Motion**.

---

## 🌟 Features

* **Premium Visuals**: Full-screen "liquid glass" Hero layout with a dynamic cinematic video background overlaid with an interactive, responsive Three.js starfield canvas.
* **Modern Stack**: Fast, hot-reloading development server powered by **Vite** and complete type safety using **TypeScript**.
* **Clean Styling**: Customized design system using **Tailwind CSS** combined with Material UI (MUI) components for high-quality elements.
* **Interactive Elements**:
  * Original animated interactive resume/view Switch button.
  * Custom smooth-scrolling page navigation.
  * Interactive project grids with modal detail views.
  * Typewriter role/career rotation effects.
* **Contact Integration**: Fully functional contact form integrated with **EmailJS** for direct client inquiries.

---

## 🛠️ Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
* npm (comes packaged with Node.js)

Verify your installation:

```bash
node -v
npm -v
```

---

## 🚀 Getting Started

### Step 1: Install Dependencies

Run the following command in the project directory to install all required packages:

```bash
npm install
```

### Step 2: Run Locally (Development Mode)

Start the Vite development server:

```bash
npm run dev
```

By default, Vite will start the app on: `http://localhost:5173/sravan-portfolio/` (or another port if 5173 is occupied).

### Step 3: Production Build

To build the application for production:

```bash
npm run build
```

This compiles TypeScript and builds the optimized static assets into the `dist/` directory.

---

## ⚙️ Project Structure

```text
sravan-portfolio/
├── dist/                # Compiled production assets (gitignored)
├── public/              # Static assets (favicon, video background)
├── src/                 # React + TypeScript Source code
│   ├── components/      # Reusable UI components (Navbar, Hero, Skills, Projects, etc.)
│   ├── index.css        # Tailwind directives and custom style systems
│   ├── main.tsx         # App entry point
│   ├── App.tsx          # Main App shell and page layout
│   └── vite-env.d.ts    # Vite environment type definitions
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS plugins (Tailwind, Autoprefixer)
├── tsconfig.json        # TypeScript compiler options
├── vite.config.ts       # Vite project settings (base path, output dir)
└── package.json         # Project manifests and dependencies
```

---

## 🌐 Deployment Instructions

### Deploying to GitHub Pages (Default base path)

The project is currently configured to deploy to GitHub Pages under the sub-path `/sravan-portfolio/` (as specified in `vite.config.ts` via `base: "/sravan-portfolio/"`).

To deploy:

```bash
npm run deploy
```

### Deploying to Vercel or Netlify (Root Domain)

If you want to deploy the portfolio to **Vercel** or **Netlify** under a root domain (e.g., `sravan-portfolio.vercel.app` or a custom domain), the project is pre-configured for root hosting:

1. **Vite Configuration**:
   The `base` configuration in `vite.config.ts` is set to `/` and the output directory is `dist` (Vite defaults), which are automatically detected by Vercel and Netlify.

2. **Build Settings**:
   * **Build Command**: `npm run build` (or `vite build`)
   * **Output/Publish Directory**: `dist`
   * **Install Command**: `npm install`
