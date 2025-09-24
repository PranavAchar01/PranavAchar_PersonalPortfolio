# 🚀 Deployment Guide

This guide will walk you through deploying your Pranav Achar Portfolio to various hosting platforms.

## 🎯 Quick Deploy on Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your Next.js portfolio with zero configuration.

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Select your `PranavAchar_PersonalPortfolio` repository
   - Click "Deploy"

3. **Custom Domain (Optional)**:
   - In your Vercel dashboard, go to your project
   - Navigate to "Settings" > "Domains"
   - Add your custom domain (e.g., `pranavachar.com`)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**:
   ```bash
   vercel login
   vercel --prod
   ```

## 🌐 Deploy on Netlify

### Method 1: Git-based Deployment

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18.x`

3. **Deploy**: Click "Deploy site"

### Method 2: Manual Upload

1. **Build the project**:
   ```bash
   npm run build
   npm run export
   ```

2. **Upload**: Drag and drop the `out` folder to Netlify

## ☁️ Deploy on Other Platforms

### GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out",
       "export": "next build && next export"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run export
   npm run deploy
   ```

### Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**:
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**:
   ```json
   {
     "hosting": {
       "public": ".next",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Variables

If you're using EmailJS for the contact form, set up environment variables:

### Vercel
1. Go to your project dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Netlify
1. Go to "Site settings" > "Environment variables"
2. Add the same variables as above

## 📊 Performance Optimization

### Before Deployment Checklist

- [ ] **Test locally**: `npm run build && npm start`
- [ ] **Check performance**: Run Lighthouse audit
- [ ] **Optimize images**: Compress any large images
- [ ] **Update metadata**: Ensure all SEO tags are correct
- [ ] **Test responsive design**: Check on different screen sizes
- [ ] **Validate forms**: Test contact form functionality

### Post-Deployment

- [ ] **Test live site**: Ensure all sections load correctly
- [ ] **Check mobile responsiveness**: Test on actual devices
- [ ] **Submit to search engines**: Add to Google Search Console
- [ ] **Set up analytics**: Add Google Analytics (optional)
- [ ] **Monitor performance**: Set up uptime monitoring

## 🐛 Common Issues & Solutions

### Build Errors

**TypeScript Errors**:
```bash
# Fix type errors
npm run type-check
```

**Dependency Issues**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Vercel Build Timeout**:
- Add `vercel.json` with build timeout:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": { "maxLambdaSize": "50mb" }
    }
  ]
}
```

**404 Errors on Refresh**:
- Ensure proper routing is configured in your hosting platform
- For Vercel: Use the included `vercel.json` configuration

## 📱 Domain Setup

### Custom Domain Configuration

1. **Purchase Domain**: From providers like Namecheap, GoDaddy, etc.
2. **DNS Configuration**:
   - Add A record: `@` → Your hosting IP
   - Add CNAME record: `www` → Your domain
3. **SSL Certificate**: Most platforms provide automatic HTTPS

### Subdomain Setup

For a subdomain like `portfolio.yourname.com`:
- Add CNAME record: `portfolio` → Your hosting URL

## 📈 SEO Optimization

### Post-Deployment SEO Tasks

1. **Submit Sitemap**:
   - Google Search Console: Add `yoursite.com/sitemap.xml`
   - Bing Webmaster Tools: Submit sitemap

2. **Social Media Meta Tags**:
   - Test with Facebook Debugger
   - Test with Twitter Card Validator

3. **Performance Monitoring**:
   - Set up Google PageSpeed Insights monitoring
   - Monitor Core Web Vitals

## 🎉 Go Live Checklist

- [ ] Portfolio deployed successfully
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Contact form working
- [ ] All links functional
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] SEO optimized
- [ ] Social media meta tags working
- [ ] Analytics set up (optional)

---

**🚀 Your portfolio is now live and ready to showcase your amazing work!**

Need help? Feel free to reach out or check the main README.md for additional information.