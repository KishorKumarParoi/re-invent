# 🚀 re:invent - Portfolio & Showcase

> A stunning, interactive portfolio website showcasing innovation, competitive programming mastery, and real-world problem-solving.

**🌐 Live Demo:** https://re-invent-rust.vercel.app/

---

## 📊 Portfolio Statistics

![Visitors](https://img.shields.io/badge/dynamic/json?url=https://re-invent-rust.vercel.app/api/visitors&query=count&label=Total%20Visitors&color=00d9ff&style=for-the-badge&logo=eye)

---

## ✨ Features

- 🎨 **Stunning UI/UX** - Gradient backgrounds, smooth animations, and modern design
- 🎬 **Scroll Animations** - GSAP-powered smooth transitions and parallax effects
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🌟 **3D Effects** - Interactive 3D rotation and perspective transforms
- 💌 **Email Integration** - Newsletter subscription with Supabase backend
- 👥 **Visitor Tracking** - Real-time visitor count with smooth animations
- 🔗 **Social Media** - Integrated LinkedIn, GitHub, Twitter, Discord, and more
- 🎯 **Problem-Solving Showcase** - Competitive programming quotes and achievements
- ⚡ **Lightning Fast** - Optimized performance with Vite bundler

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 19+** - Modern UI library with hooks
- **Vite** - Next-generation build tool for faster development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Animation & Interaction
- **GSAP (GreenSock)** - Professional animation library
  - ScrollTrigger - Scroll-based animations
  - Smooth parallax effects
  - 3D transformations
- **@gsap/react** - React integration for GSAP

### Backend & Database
- **Supabase** - PostgreSQL database for:
  - Visitor counting
  - Email subscription management
  - Real-time data synchronization

### UI Components & Icons
- **React Icons** - Comprehensive icon library
  - Font Awesome icons (FaLinkedin, FaGithub, FaTwitter, etc.)
  - Smooth icon animations

### Development Tools
- **ESLint** - Code quality and consistency
- **Hot Module Replacement (HMR)** - Fast development refresh
- **PostCSS** - CSS transformations

### Deployment
- **Vercel** - Serverless platform for hosting
- **Git** - Version control

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "gsap": "^3.12.2",
    "@gsap/react": "^2.1.1",
    "react-icons": "^5.0.1",
    "@supabase/supabase-js": "^2.38.4",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8",
    "tailwindcss": "^3.3.6",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2"
  }
}
```

---

## 🎯 Key Sections

### 1. **Hero Section**
- Eye-catching landing page with 3D animations
- Smooth scroll-based rotation effects
- Call-to-action buttons

### 2. **Bio Section**
- Personal story and journey
- Gradient text effects (purple → cyan → fuchsia)
- Image reveal animation on scroll

### 3. **Story Section**
- Problem-solving philosophy
- Competitive programming quotes
- Achievement cards with hover effects
- Real-world project showcase

### 4. **Features Section**
- Technology highlights
- Skills showcase
- Interactive cards

### 5. **Contact Section**
- 3D parallax contact form
- Email integration (kishor.ruet.cse@gmail.com)
- Social media links
- Smooth scroll animations

### 6. **Visitor Counter**
- Real-time visitor tracking
- GSAP counter animation
- Newsletter subscription (Supabase backend)
- Animated statistics

### 7. **Footer**
- Social media links (LinkedIn, GitHub, Twitter, Facebook, Instagram, Discord, YouTube, Medium)
- Visitor count display
- Email subscription form
- Privacy policy link

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/re-invent.git
cd re-invent

# Install dependencies
npm install

# Set up environment variables
# Create .env.local file with:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### Development

```bash
# Start development server
npm run dev

# Open browser and navigate to
http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Visitor Counter

The portfolio includes a real-time visitor counter powered by Supabase:

- ✅ Tracks unique daily visitors
- ✅ Smooth GSAP animation
- ✅ Persistent storage in PostgreSQL
- ✅ Email subscription integration
- ✅ Responsive design

**Visitors are counted once per day using localStorage**

---

## 🎨 Color Palette

- **Primary**: Cyan (#00d9ff, #22d3ee)
- **Secondary**: Emerald (#10b981, #00ff9f)
- **Accent**: Purple (#8b5cf6, #a855f7)
- **Highlight**: Fuchsia (#ec4899, #f472b6)
- **Background**: Black (#000000)

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tailwind CSS breakpoints (sm, md, lg, xl, 2xl)
- ✅ Touch-friendly interactions
- ✅ Optimized performance on all devices

---

## 🔐 Environment Variables

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anonymous-key
```

---

## 📈 Performance Optimizations

- ⚡ Vite for fast bundling
- 📦 Code splitting and lazy loading
- 🖼️ Image optimization (WebP format)
- 🎯 GSAP animations with GPU acceleration
- 📊 Minimal bundle size
- 🚀 Vercel edge caching

---

## 🤝 Connect With Me

- 📧 **Email**: kishor.ruet.cse@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/kkp007](https://linkedin.com/in/kkp007)
- 🐙 **GitHub**: [github.com/kkp007](https://github.com/kkp007)
- 🐦 **Twitter**: [@paroi_kishor](https://twitter.com/paroi_kishor)
- 📰 **Medium**: [@kkp007](https://medium.com/@kkp007)
- 🎮 **Discord**: [Discord Server](https://discord.com)

---

## 📝 Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Landing hero section
│   ├── Bio.jsx               # Personal bio and story
│   ├── Story.jsx             # Problem-solving showcase
│   ├── Features.jsx          # Technology features
│   ├── Contact.jsx           # Contact section with 3D effects
│   ├── Footer.jsx            # Footer with social links
│   ├── VisitorCount.jsx      # Real-time visitor counter
│   ├── AnimatedTitle.jsx     # Animated title component
│   ├── RoundedCorner.jsx     # Rounded corner effects
│   └── Button.jsx            # Reusable button component
├── index.css                 # Global styles and animations
├── App.jsx                   # Main app component
└── main.jsx                  # React entry point
```

---

## 🎯 Milestones

- ✅ Hero section with 3D animations
- ✅ Bio section with gradient effects
- ✅ Story section with quotes
- ✅ Contact section with parallax
- ✅ Real-time visitor tracking
- ✅ Email subscription
- ✅ Social media integration
- ✅ Production deployment
- 🔄 Blog section (coming soon)
- 🔄 Project showcase (coming soon)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **GSAP** - Amazing animation library
- **Tailwind CSS** - Beautiful utility CSS
- **Vercel** - Seamless deployment platform
- **Supabase** - Open-source Firebase alternative
- **React** - The library for building UIs

---

## 📞 Support

For questions or issues, please:
1. 📧 Email: kishor.ruet.cse@gmail.com
2. 💬 Open an issue on GitHub
3. 🤝 Connect on LinkedIn

---

**Made with 💚 by Kishor Kumar Paroi (kkp_007)**

*"Where Innovation Meets Reality"*

---

## 🎊 Thank You!

Thank you for visiting my portfolio! You are visitor #**[Live Count]** 👥
