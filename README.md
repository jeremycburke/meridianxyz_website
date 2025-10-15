# Meridian XYZ Landing Page

A modern landing page for Meridian XYZ built with React, TypeScript, and Tailwind CSS. This site collects email addresses for early access requests.

## Features

- 🎨 Modern, clean design matching Figma specifications
- 📧 Comprehensive contact form via modal popup (name, email, phone, message)
- 🔗 Web3Forms integration for form submissions
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Deployed to GitHub Pages

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/meridianxyz_website.git
cd meridianxyz_website
```

2. Install dependencies:

```bash
npm install
```

3. Configure Web3Forms:

   - Sign up for a free account at [web3forms.com](https://web3forms.com)
   - Get your access key
   - Open `src/components/Modal.tsx`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key

4. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### Automatic Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages**:

   - Go to your repository settings
   - Navigate to Pages (under Code and automation)
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:

   - Any push to the `main` branch will trigger an automatic deployment
   - The workflow is defined in `.github/workflows/deploy.yml`

3. **Update base path** (if needed):
   - The `vite.config.ts` file is set to use `/meridianxyz_website/` as the base path
   - If your repository name is different, update the `base` value in `vite.config.ts`

### Manual Deployment

You can also deploy manually using gh-pages:

```bash
npm run deploy
```

## Environment Variables

### Web3Forms Access Key

The site requires a Web3Forms access key to handle email submissions:

1. Sign up at [web3forms.com](https://web3forms.com)
2. Create a new form and get your access key
3. Update the access key in `src/components/Modal.tsx`

## Project Structure

```
meridianxyz_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── .nojekyll              # GitHub Pages configuration
├── src/
│   ├── assets/
│   │   └── arrow.svg          # Arrow graphic
│   ├── components/
│   │   ├── HeroSection.tsx    # Main hero section
│   │   └── Modal.tsx          # Email collection modal
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React entry point
│   └── index.css              # Tailwind directives
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Web3Forms** - Form handling
- **GitHub Pages** - Hosting

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- `meridian-dark`: #303030 (background)
- `meridian-gray`: #666666 (buttons)
- `meridian-light`: #f0f0f0 (text)
- `meridian-muted`: rgba(170, 170, 170, 0.94) (secondary text)

### Fonts

The project uses Inter font from Google Fonts with two weights:

- Inter Light (300) for body text
- Inter Black (900) for headings

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
