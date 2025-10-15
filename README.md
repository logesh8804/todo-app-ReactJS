# Todo App 📝

A modern, responsive todo application built with React and Vite, featuring persistent storage and a clean, intuitive interface.

## 🧠 Features

- ✅ **Add new tasks** - Create and manage your todo items
- 🔄 **Toggle completion** - Mark tasks as complete or incomplete with a single click
- 🗑️ **Delete tasks** - Remove tasks you no longer need
- 💾 **Persistent storage** - All tasks are automatically saved to browser localStorage
- 📱 **Responsive design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean interface with Tailwind CSS styling
- ⚡ **Fast performance** - Built with Vite for lightning-fast development and builds

## ⚙️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm
- **Linting**: ESLint 9.36.0 with React-specific rules
- **Development**: Hot Module Replacement (HMR)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## ▶️ Usage

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Using the Application

1. **Adding Tasks**: Type your task in the input field and click "Add Task"
2. **Completing Tasks**: Click on any task to toggle its completion status
3. **Deleting Tasks**: Click the ❌ icon next to any task to remove it
4. **Data Persistence**: All tasks are automatically saved to your browser's localStorage

## 🧩 Project Structure

```
todo-app/
├── public/
│   └── favicon.ico          # App favicon
├── src/
│   ├── components/
│   │   ├── Todo.jsx         # Main todo component with state management
│   │   └── todoitem.jsx     # Individual todo item component
│   ├── assets/
│   │   └── react.svg        # React logo asset
│   ├── App.css              # Global styles and Tailwind imports
│   ├── App.jsx              # Root application component
│   └── main.jsx             # Application entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration with React and Tailwind
└── README.md                # Project documentation
```

### Key Components

- **`Todo.jsx`**: Main component handling todo state, localStorage persistence, and CRUD operations
- **`todoitem.jsx`**: Individual todo item component with toggle and delete functionality
- **`App.jsx`**: Root component with responsive layout
- **`main.jsx`**: React 18+ createRoot entry point

## 🧪 Testing

Currently, this project doesn't include automated tests. To add testing:

1. **Install testing dependencies**
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom
   ```

2. **Add test scripts to package.json**
   ```json
   {
     "scripts": {
       "test": "vitest",
       "test:ui": "vitest --ui"
     }
   }
   ```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Various Platforms

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

**GitHub Pages**
```bash
npm install --save-dev gh-pages
# Add deploy script to package.json
npm run build
npm run deploy
```

**Static Hosting**
- Upload the contents of the `dist/` folder to any static hosting service
- No server-side configuration required

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. All data is stored in browser localStorage.

### Tailwind CSS Configuration

The project uses Tailwind CSS 4.x with the Vite plugin. Configuration is handled through:
- `vite.config.js` - Tailwind Vite plugin integration
- `src/App.css` - Tailwind imports and custom font configuration

### ESLint Configuration

The project includes comprehensive ESLint rules:
- React Hooks rules
- React Refresh rules
- JavaScript recommended rules
- Custom rules for unused variables

## 👥 Contributors

- Add your name and GitHub profile here
- Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

This project is currently unlicensed. Please add a LICENSE file to specify the terms of use.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**