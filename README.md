# Ario Studio

A cinematic, high-end personal brand + studio website for **Ario Kaveh**, focused on cinematic web design, AI product development, and full-stack solutions for founders and modern brands.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio listing + dynamic pages
│   ├── contact/            # Contact/brief form page
│   ├── dashboard/          # Admin & User dashboards
│   └── api/                # API routes
├── components/
│   ├── header/             # Header with mega menu
│   ├── footer/             # Footer component
│   ├── sections/           # Home page sections
│   └── ui/                 # Reusable UI components
├── data/                   # Static TypeScript data files
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── nav.ts
└── public/                  # Static assets
```

## 🎨 Design System

- **Theme**: Dark, premium, futuristic with glassmorphism
- **Colors**: Neon purple (#a855f7) + Neon blue (#3b82f6)
- **Fonts**: 
  - Headings: Space Grotesk
  - Body: DM Sans

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Features

### Pages
- ✅ **Home**: Cinematic hero, about section, services overview, featured portfolio, process, testimonials, CTA
- ✅ **Services**: Detailed service descriptions with deliverables
- ✅ **Portfolio**: Filterable project grid with dynamic case study pages
- ✅ **Contact**: Professional brief form with validation
- ✅ **Admin Dashboard**: View contact submissions and metrics (mock data)
- ✅ **User Dashboard**: Project tracking interface (mock data)

### Components
- ✅ Header with sticky glassmorphism design and mega menu
- ✅ Footer with navigation and social links
- ✅ Reusable UI components (Button, Card, Section, Container)
- ✅ Smooth scroll animations with Framer Motion

### API
- ✅ Contact form API route with Zod validation
- ✅ Server-side logging (ready for DB/email integration)

## 🔮 Future Enhancements

- [ ] Database integration (Prisma + Postgres/Neon)
- [ ] Email notifications (Resend/SendGrid)
- [ ] Authentication for dashboards
- [ ] CMS integration for content management
- [ ] Real-time project updates
- [ ] File upload/sharing for clients

## 📦 Deployment

This project is ready to deploy on **Vercel**:

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

## 🎯 Design Philosophy

- **Cinematic**: Section-based experiences with smooth scroll animations
- **Glassmorphism**: Translucent panels with backdrop blur
- **Premium**: Attention to detail, micro-interactions, polished spacing
- **Founder-focused**: Clear value propositions, conversion-optimized

## 📄 License

Private project - All rights reserved

---

**Crafted by Ario Kaveh** | Ario Studio

