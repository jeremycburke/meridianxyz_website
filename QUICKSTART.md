# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Web3Forms

1. Go to [web3forms.com](https://web3forms.com) and sign up for free
2. Create a new form and copy your access key
3. Open `src/components/Modal.tsx`
4. Find line 34 and replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual key:

```typescript
access_key: 'your-actual-key-here',
```

### 3. Run Development Server

```bash
npm run dev
```

Your site will be running at `http://localhost:5173`

## Test the Contact Form

1. Click the "Request Access" button
2. Fill out the form fields:
   - First Name
   - Last Name
   - Email Address
   - Phone Number
   - Your Message
3. Click "Send Message"
4. You should receive the submission in your Web3Forms dashboard

## Deploy to GitHub Pages

### First Time Setup

1. Go to your GitHub repository settings
2. Click on "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"

### Deploy

Push to the main branch:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Action will automatically build and deploy your site.

Your site will be live at: `https://YOUR_USERNAME.github.io/meridianxyz_website/`

## Need Help?

Check the full [README.md](./README.md) for more detailed instructions.
