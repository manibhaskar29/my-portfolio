# Portfolio Website

A modern, responsive, and animated portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This project showcases my skills, experience, and projects with a clean and professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## 🚀 Features

- **⚡ Blazing Fast**: Powered by Vite for instant server start and HMR.
- **🎨 Modern UI**: Styled with Tailwind CSS for a sleek, responsive design.
- **✨ Smooth Animations**: Powered by Framer Motion for scroll-based and interactive animations.
- **📱 Fully Responsive**: Looks great on all devices, from mobile to desktop.
- **📧 Working Contact Form**: Integrated verified mailto link for direct communication.
- **🛠️ Modular Architecture**: Clean file structure with reusable components.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typewriter Effect**: [Typewriter Effect](https://github.com/tameemsafi/typewriterjs)

## 📂 Project Structure

```bash
src/
├── components/        # Reusable UI components
│   ├── Hero.jsx      # Landing section with typewriter effect
│   ├── About.jsx     # About me section
│   ├── Skills.jsx    # Skills showcase using badges
│   ├── Project.jsx   # Project grid with links
│   ├── Timeline.jsx  # Experience journey
│   ├── Contact.jsx   # Contact form and social links
│   ├── Navbar.jsx    # Responsive navigation
│   └── Footer.jsx    # Copyright and credits
├── App.jsx           # Main application layout
├── main.jsx          # Entry point
└── index.css         # Tailwind directives and global styles
```

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 16 or higher).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/manibhaskar29/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173/` to view the app.

## 🚀 Deployment

This project is optimized for deployment on platforms like Vercel, Netlify, or customized hosting.

### Option 1: Vercel (Recommended)

1.  **Push to GitHub**:
    Ensure your latest code is pushed to your GitHub repository.

2.  **Import to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** button and select **"Project"**.
    - Import your GitHub repository.

3.  **Configure**:
    - Vercel automatically detects Vite.
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
    - Click **Deploy**.

### Option 2: Netlify

1.  **Push to GitHub**: Ensure code is on GitHub.
2.  **New Site from Git**:
    - Go to [Netlify](https://app.netlify.com/).
    - Click **"New site from Git"**.
    - Select your repository.
3.  **Build Settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
4.  **Deploy Site**.

### Option 3: Manual / Other Hosting

To build the project for production manually:

```bash
npm run build
```

The output will be in the `dist/` folder. You can serve this folder using any static file server (e.g., Nginx, Apache, or `serve`).

To preview the production build locally:

```bash
npm run preview
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by [Mani Bhaskar](https://github.com/manibhaskar29)**
