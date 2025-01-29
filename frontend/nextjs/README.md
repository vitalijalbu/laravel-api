<div align="center">
    <h1 align="center">Sciencegram</h1>
</div>

## Getting Started
Figma:
(https://www.figma.com/design/DKMk7Ph5hBdzLbkyTOGE1k/Sciencegram-Webapp?node-id=0-1&node-type=canvas&t=z4WoGjS4300QYCiH-0)

Here are some rules we want you to following:

- Write clean code
- Have a strong organization of files & folders
- ✨ Magic ✨

Here’s an improved version of your documentation with a clearer and more professional tone:

---

## 📁 Folder Structure

This section outlines the architecture of the project’s folder and file structure

### **Root Structure**

```bash
src/
├── app/                # Contains all application pages
│   ├── dashboard/
│   ├── settings/
│   ├── users/
│   ├── orders/
│   └── ...             # Other pages follow the same pattern
│                       # Folder names use kebab-case (e.g., `dashboard`)
├── lib/
│   └── api/            # Contains all API-related files and actions
├── modules/
│   ├── dashboard/
│   ├── settings/
│   ├── users/
│   ├── orders/
│   └── ...             # Reusable components across the app
│                       # Folder names use kebab-case
assets/
├── styles/             # Contains all SCSS style files
│   ├── components/     # Styles for custom components
│   │   ├── _sidebar.scss
│   │   └── _topnav.scss
│   ├── pages/          # Styles for individual pages
│   │   ├── _dashboard.scss
│   │   └── _settings.scss
│   └── index.scss      # Main SCSS file to import all styles
├── fonts/              # Optional: Custom fonts or icons (.woff)
├── images/             # Static images for the application
public/
└── logo & favicon.ico  # Contains public assets like the app logo and favicon
data/
└── static data files   # Contains static `.json` files, e.g., dropdown options
                        # Avoids unnecessary API requests for predefined data
```

### Naming Conventions

- All folder names follow **kebab-case** (lowercase with dashes, e.g., `dashboard`).
- **Shared components** are grouped by feature in the `shared/` folder.
- **SCSS styles** are organized into `components/` for reusable styles and `pages/` for page-specific styles.

### Asset Organization

- **Fonts:** This folder is optional and used for custom fonts or icon sets.
- **Images:** Static images required by the app are stored here.
- **Public:** Contains assets accessible from the web (e.g., the app logo and favicon).

### Static Data

- **Data Folder:** Use `.json` files for static data (e.g., options for checkboxes) to reduce unnecessary API calls.

---

This structure helps ensure consistency and maintainability throughout the project.

## 📦 Installation

Sciencegram ERP requires [Node.js](https://nodejs.org/) v16.8+ to run.

1. Make sure you have git, node, and npm installed.
2. Clone this repository locally.
3. Execute `npm i` and then `npm run dev` from the root directory of the repository.
4. Open `localhost:3000` in your browser.

## 🖌️ Theming

Each customer has his own logo and colors, so we created a file named `theme.js` where you can play & edit all theme variables. \
Usually `theme.js` will be provided by our team. \
Read more on theme customization: https://flowbite-react.com/docs/customize/theme \

## 🤖 Running locally

```bash
npm install
#
npm run dev
#
localhost:3000
```

## 🚀 Building

```bash
npm run build
#
npm run start
```

## 📦 REST API Intergration

For rest api integrattion we use Axios (https://axios-http.com/docs/intro) \
We setuped an istance in axios inside the `/src/lib/api/client.js`, then it can be imported & used it in every file. \

## 💊 Libraries inside the box

Our dashboard uses the following libraries:

| Name            | Link                              | Installed |
| --------------- | --------------------------------- | --------- |
| Next JS 14      | https://nextjs.org/docs           | ✅        |
| Tailwind CSS    | https://tailwindcss.com           | ✅        |
| Axios           | https://axios-http.com/docs/intro | ✅        |
| Tanstack Query  | https://tanstack.com/query/latest | ✅        |
| Date & Time     | https://day.js.org/               | ✅        |
