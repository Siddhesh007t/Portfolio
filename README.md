# Developer Portfolio & Technical Showcase

A premium, modern developer portfolio and technical showcase website. Designed with a sleek "Dark Mode" aesthetic, vibrant sky blue and emerald green accents, and a modern Bento Grid layout to provide a striking visual experience while keeping the codebase lightweight and highly performant.

## Features

- 🌌 **Premium Dark Mode UI**: Deep background with a performant dot matrix pattern and sky blue / emerald green gradient accents.
- 🍱 **Bento Grid Design**: Modern, organized grid layout for the About section and smooth spotlight hover effects for project cards.
- ⌨️ **Dynamic Hero Section**: Interactive typing animation highlighting core focuses (systems engineering, low-level optimization, clean architecture).
- 📱 **Fully Responsive Layout**: Built with CSS Grid and Flexbox to ensure it looks great on any screen size.
- 🚀 **Zero Build Tools**: Pure HTML5, CSS3, and Vanilla JavaScript with no heavy frameworks or build steps. Uses Phosphor Icons and Google Fonts (Inter & JetBrains Mono).
- ⚡ **Performance Optimized**: Fast loading times, IntersectionObserver for smooth scroll reveals, native smooth scroll routing, and interactive sticky navigation.
- 📧 **Working Contact Form**: Integrated with FormSubmit for functional contact messaging out of the box.

## Tech Stack

- **HTML5**: Semantic document structure.
- **CSS3**: Styling, custom properties (CSS variables), animations, Bento grids, and responsive layouts.
- **Vanilla JavaScript**: DOM manipulation, IntersectionObserver scroll reveals, interactive typing effect, spotlight hover effects, and event listeners.

## Project Structure

```text
.
├── css/
│   └── style.css      # Core styles, theme variables, and responsive media queries
├── js/
│   └── script.js      # Interactive logic (typing effect, sticky nav, scroll routing, spotlight)
├── index.html         # Main HTML document outlining the portfolio structure
└── README.md          # Project documentation
```

## Getting Started

Because this project is built entirely with static web technologies, there are no dependencies to install or complex build steps to run.

### Running Locally

1. Clone or download this repository.
2. Open the `index.html` file directly in your preferred web browser.
   - *Optional:* Use a local development server like the VS Code "Live Server" extension for automatic reloading as you edit.

### Deploying to GitHub Pages

This portfolio is static and ready to be hosted for free on GitHub Pages right out of the box.

1. Create a new repository on GitHub.
2. Push all the files (`index.html`, `css/`, `js/`, `README.md`) to your `main` branch.
3. In your repository on GitHub, navigate to **Settings** > **Pages**.
4. Under "Build and deployment", set the source to **Deploy from a branch**.
5. Select your main branch and the `/(root)` folder, then click **Save**.
6. Within a few minutes, your portfolio will be live at `https://<your-username>.github.io/<repository-name>/`.

## Customization Guide

To personalize this portfolio and make it your own:
- **Content & Projects**: Update the text content, bio, skills, and project details directly in `index.html`.
- **Theme Colors**: Modify the CSS variables (`--bg-main`, `--accent-primary`, `--accent-secondary`, etc.) inside the `:root` block at the top of `css/style.css`.
- **Typing Animation**: Edit the `words` array at the top of `js/script.js` to change the titles in the hero section.
- **Contact Form**: Update the email address in the `action` attribute of the `<form>` in `index.html` to receive messages.
- **Social Links**: Update the GitHub and LinkedIn URLs in the `<footer>` section of `index.html`.

---

*Built to highlight technical excellence and robust architecture.*
