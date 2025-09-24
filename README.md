# Pranav Achar - Personal Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS. Showcasing my journey as a Computer Science student and web developer with 3+ years of experience.

## 🚀 Live Demo

[View Live Portfolio](https://pranav-achar-portfolio.vercel.app) (Replace with your actual deployment URL)

## 📋 Features

- **Modern Design**: Clean, professional design with a minimal black & white color palette
- **Responsive**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with keyboard navigation support
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Email Service**: EmailJS (for contact form)
- **Deployment**: Vercel

## 📁 Project Structure

```
pranav-achar-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── (static assets)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PranavAchar01/PranavAchar_PersonalPortfolio.git
   cd PranavAchar_PersonalPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Environment Variables (Optional)

If you want to set up the contact form with EmailJS:

1. Create a `.env.local` file in the root directory
2. Add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Customization

### Color Scheme

The portfolio uses a minimal black & white color palette defined in `tailwind.config.ts`:

- **Pure Black**: `#000000`
- **Off-Black**: `#121212` (backgrounds)
- **Dark Gray**: `#1E1E1E` (section dividers)
- **Pure White**: `#FFFFFF`
- **Off-White**: `#F5F5F5` (cards, hover states)
- **Light Gray**: `#D9D9D9` (borders)
- **Medium Gray**: `#A3A3A3` (secondary text)

### Content Updates

To customize the content:

1. **Personal Information**: Update the content in each component file
2. **Projects**: Modify the `projects` array in `components/Projects.tsx`
3. **Resume Data**: Update the data objects in `components/Resume.tsx`
4. **Contact Information**: Update contact details in `components/Contact.tsx` and `components/Footer.tsx`

## 📱 Sections

1. **Hero**: Introduction with animated typing effect
2. **About**: Personal story, skills, and statistics
3. **Projects**: Showcase of featured development work
4. **Resume**: Comprehensive academic and professional information
5. **Contact**: Interactive contact form and social links
6. **Footer**: Additional links and information

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Deploy on Other Platforms

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Pranav Achar**
- Email: achar.pranav@gmail.com
- Phone: (925) 557-6515
- Location: San Ramon, CA
- GitHub: [@PranavAchar01](https://github.com/PranavAchar01)
- LinkedIn: [pranav-achar](https://linkedin.com/in/pranav-achar)

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**