# Utkarsh Bhardwaj & Associates - Professional Website

A modern, responsive, and SEO-optimized website for Utkarsh Bhardwaj & Associates, a professional tax and accounting services firm.

## 🚀 Features

- **Modern Design**: Clean, minimalistic design with professional aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with SEO best practices including meta tags, sitemap, and structured data
- **Fast Performance**: Optimized for speed with Next.js and modern web technologies
- **Interactive Elements**: Smooth animations and micro-interactions using Framer Motion
- **Contact Form**: Functional contact form with validation
- **Accessibility**: Built with accessibility in mind
- **PWA Ready**: Progressive Web App support for better mobile experience

## 🛠️ Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **React Hook Form**: Form handling
- **React Intersection Observer**: Scroll-based animations

## 📋 Services Offered

- TAN Registration
- IT Audit Consultancy
- Professional Tax Return
- EPF/ESIC Returns
- Book Keeping
- TDS Returns
- GST Returns
- Income Tax Returns

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd utkarsh-bhardwaj-associates
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your actual credentials
# Get EmailJS credentials from: https://dashboard.emailjs.com/
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services showcase
│   │   ├── About.tsx       # About section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer
│   │   └── Stats.tsx       # Statistics section
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots
├── public/                 # Static assets
└── ...
```

## 🎨 Customization

### Colors
The website uses a blue color scheme. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary-blue: #1e40af;
  --primary-blue-light: #3b82f6;
  --primary-blue-dark: #1e3a8a;
  --accent-gold: #f59e0b;
  /* ... */
}
```

### Content
Update the content in respective component files:
- Company information: `src/app/components/Header.tsx`
- Services: `src/app/components/Services.tsx`
- Contact details: `src/app/components/Contact.tsx`

### SEO
Update SEO metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- Google verification

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📊 Performance

The website is optimized for performance:
- Image optimization with Next.js
- Code splitting
- Lazy loading
- Minified CSS and JavaScript
- Optimized fonts

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph and Twitter cards
- Structured data markup
- XML sitemap
- Robots.txt
- Semantic HTML
- Fast loading times
- Mobile-friendly design

## 📞 Contact Information

- **Phone**: +91 9258011110
- **Email**: advutkarshbharadwaj@gmail.com
- **Service Area**: Pan India
- **Business Hours**: Mon - Sat: 9:00 AM - 7:00 PM

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For support or questions, please contact:
- Email: advutkarshbharadwaj@gmail.com
- Phone: +91 9258011110

---

Built with ❤️ for Utkarsh Bhardwaj & Associates
