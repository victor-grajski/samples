# React Storybook Samples

A modern React component library built with Storybook, featuring reusable UI components with interactive documentation. Built with React 18, Vite, and Storybook 8.

## 🚀 Live Demo

Once deployed to Vercel, your Storybook will be publicly accessible for sharing with team members and stakeholders.

## 📦 What's Included

This repository comes pre-configured with:

- **React 18** - Latest React with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Storybook 8** - Component development and documentation
- **Example Components** - Button and Card components to get you started
- **Vercel Deployment** - Ready to deploy configuration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd samples
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```

Storybook will open at `http://localhost:6006` 🎉

### Development

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run dev` - Start Vite development server (for the React app)
- `npm run build` - Build the React app for production

## 📁 Project Structure

```
samples/
├── src/
│   ├── components/          # React components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   └── Button.stories.jsx
│   │   └── Card/
│   │       ├── Card.jsx
│   │       ├── Card.css
│   │       └── Card.stories.jsx
│   ├── App.jsx              # Main app component
│   ├── App.css
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── .storybook/
│   ├── main.js              # Storybook configuration
│   └── preview.js           # Global decorators/parameters
├── package.json
├── vite.config.js
├── vercel.json              # Vercel deployment config
└── index.html
```

## ✨ Adding New Components

Follow this pattern to add your own components:

### 1. Create Component Structure

```bash
mkdir -p src/components/YourComponent
touch src/components/YourComponent/YourComponent.jsx
touch src/components/YourComponent/YourComponent.css
touch src/components/YourComponent/YourComponent.stories.jsx
```

### 2. Create the Component

```jsx
// src/components/YourComponent/YourComponent.jsx
import React from 'react';
import './YourComponent.css';

export const YourComponent = ({ prop1, prop2 }) => {
  return (
    <div className="your-component">
      {/* Your component JSX */}
    </div>
  );
};
```

### 3. Add Styles

```css
/* src/components/YourComponent/YourComponent.css */
.your-component {
  /* Your styles */
}
```

### 4. Create Stories

```jsx
// src/components/YourComponent/YourComponent.stories.jsx
import { YourComponent } from './YourComponent';

export default {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    prop1: 'value1',
    prop2: 'value2',
  },
};

export const Variant = {
  args: {
    prop1: 'different value',
    prop2: 'another value',
  },
};
```

### 5. View in Storybook

Your component will automatically appear in Storybook. Restart the dev server if needed.

## 🚀 Deploying to Vercel

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial Storybook setup"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration from `vercel.json`
6. Click "Deploy"

Every push to your main branch will automatically trigger a new deployment!

### Option 2: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy your Storybook.

### Deployment Notes

- Vercel will run `npm run build-storybook` to generate static files
- The build output in `storybook-static/` will be deployed
- You'll receive a public URL like `https://your-project.vercel.app`
- SSL certificate is automatically provided

## 📚 Example Components

### Button Component

A versatile button component with multiple variants:

- **Primary** - Main call-to-action button
- **Secondary** - Secondary actions
- **Outline** - Subtle actions
- **Disabled** - Non-interactive state

Props:
- `label` (string) - Button text
- `onClick` (function) - Click handler
- `variant` ('primary' | 'secondary' | 'outline') - Button style
- `disabled` (boolean) - Disabled state

### Card Component

A flexible card container for grouping content:

Props:
- `title` (string) - Optional card title
- `children` (ReactNode) - Card content
- `footer` (ReactNode) - Optional footer content

## 🎨 Customization

### Styling

Components use plain CSS for easy customization. Modify the `.css` files in each component folder to adjust styles.

### Storybook Theme

Edit `.storybook/preview.js` to customize Storybook's appearance:

```js
export default {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'custom', value: '#your-color' },
      ],
    },
  },
};
```

## 📖 Learn More

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

Feel free to add your own components and share them with the team!

## 📄 License

MIT
