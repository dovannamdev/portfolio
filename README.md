# CV Landing Page

A professional CV landing page built with React.js and TypeScript.

## Features

- Modern, responsive design
- Professional CV sections (Hero, About, Experience, Skills, Education, Contact)
- Smooth scrolling navigation
- Contact form with validation
- Mobile-friendly layout

## Getting Started

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

## Customization

1. Update personal information in all components under `src/components/`
2. Replace placeholder text with your actual CV content
3. Add your profile photo by replacing the placeholder in the Hero section
4. Update contact information and social media links
5. Modify colors and styling in `src/App.css` and `src/index.css`

## CI/CD

This project includes GitHub Actions workflows for continuous integration and deployment:

### CI Workflow (`.github/workflows/ci.yml`)
- Runs on every push and pull request to `main`/`master` branch
- Installs dependencies
- Runs linting checks
- Builds the project
- Uploads build artifacts

### CD Workflow (`.github/workflows/deploy.yml`)
- Automatically deploys to GitHub Pages on push to `main`/`master` branch
- Can also be triggered manually via workflow_dispatch

### Setup GitHub Pages để có Public Website

**📖 Xem hướng dẫn chi tiết tại [DEPLOYMENT.md](./DEPLOYMENT.md)**

**Tóm tắt các bước:**

1. **Push code lên GitHub** (nếu chưa có repository)
2. **Cập nhật base path** trong `vite.config.ts` nếu tên repo khác `portfolio`
3. **Enable GitHub Pages**: 
   - Vào Settings → Pages
   - Chọn "GitHub Actions" làm source
4. **Push code** lên branch `main` hoặc `master`
5. **Chờ deploy** (2-5 phút) và truy cập: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**⚠️ QUAN TRỌNG:** Nếu repository name khác `portfolio`, bạn **PHẢI** cập nhật `base` path trong `vite.config.ts`:
```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/YOUR_REPO_NAME/' : '/',
```

## Deployment

The built files can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

### Manual Deployment

For manual deployment to GitHub Pages:
1. Build the project: `npm run build`
2. The `dist` folder contains the production-ready files
3. Deploy the `dist` folder to your hosting service