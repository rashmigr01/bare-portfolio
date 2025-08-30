
# Bare Portfolio

[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Styled%20with-Tailwind-06B6D4.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/Powered%20by-React-61DAFB.svg?logo=react&logoColor=black)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Deploy with Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg?logo=vercel&logoColor=white)](https://vercel.com/)

A minimalist, **black & white** portfolio template built with **Vite + React + Tailwind CSS**.
It’s designed to be clean, fast, and easy to customize — perfect for developers who want a distraction-free personal website.

<img width="1728" height="1080" alt="image" src="https://github.com/user-attachments/assets/b94ac709-bac3-4b32-86c7-2b394919bb64" />

## Features

- Monochrome design (JetBrains Mono, black & white)

- Home page with three sections:
    - Contact → All your socials & email in one place
    - Projects → Showcase projects with GitHub + live demo links
    - Blog → Publish markdown blog posts with tags

- Config-driven setup (update one file to customize everything)

- Blog posts from local .md files in public/blog-posts

- Live clock in footer (timezone configurable)

- Fast build & deploy (Vite + Tailwind + React)

## Run Locally

Clone the project

```bash
  git clone https://github.com/rashmigr01/bare-portfolio.git
```

Go to the project directory

```bash
  cd bare-portfolio/bare-portfolio
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

Your site will be live at http://localhost:5173.

## Usage/Customization

This portfolio is **config-driven**, meaning you only need to edit configuration files – no need to dig through UI code. All personal details, links, projects, and blogs are centralized in `config/info.ts`.

- Update your **name, description, timezone, city, country, and socials** inside `config/info.ts`. 
- Add your **projects** and **blogs** in the same file (with title, description, tags, GitHub link, etc.).
- Blog content is pulled directly from **markdown files** you place in `/public/blog-posts`.

## Deployment

Works out-of-the-box with:

- [Vercel](https://vercel.com/)

- [Netlify](https://www.netlify.com/)

- [GitHub Pages](https://pages.github.com/)

Build command:

```bash
  pnpm build
```

Output folder: ` dist/ `

## Contributing

Contributions are always welcome!

If you’d like to add features (e.g., RSS feed, dark mode toggle, search in blogs), feel free to fork, open an issue, or submit a PR.

## License

[MIT](https://choosealicense.com/licenses/mit/) License © [Rashmi G R](https://github.com/rashmigr01)
