# Feel PRO Landing Page

A premium, modern landing page for **Feel PRO** - Your AI-powered productivity companion.

## 🚀 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern Animations** - Smooth transitions and scroll-based animations using Framer Motion
- **Premium UI** - Clean, professional design with attention to detail
- **Dark Mode Ready** - Sections with dark backgrounds for visual variety

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **CSS Variables** - Design system with CSS custom properties

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx/css      # Sticky transparent header
│   ├── Hero.jsx/css        # Hero section with floating elements
│   ├── Stripe.jsx/css      # Feature strip banner
│   ├── AIAgent.jsx/css     # AI Agent features section
│   ├── WorkLikePro.jsx/css # Work Like PRO section
│   ├── FocusLikePro.jsx/css # Focus Like PRO section (dark)
│   ├── PlanLikePro.jsx/css # Plan Like PRO section
│   ├── ReportLikePro.jsx/css # Report Like PRO section
│   ├── SystemFlow.jsx/css  # System flow diagram
│   ├── WhoIsFeelPro.jsx/css # Target audience cards
│   ├── Privacy.jsx/css     # Privacy section (dark)
│   ├── CTACard.jsx/css     # Call-to-action card
│   └── Footer.jsx/css      # Footer with links
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles & design tokens
```

## 🎨 Design System

The landing page uses CSS variables for consistent styling:

- **Colors**: Orange/peach primary, slate neutrals
- **Typography**: Manrope font family
- **Spacing**: Consistent padding and margins
- **Shadows**: Multiple shadow levels for depth
- **Border Radius**: Rounded corners throughout

## 🔗 Sections

1. **Header** - Transparent, becomes sticky with blur on scroll
2. **Hero** - Main headline with floating icons and animations
3. **Stripe** - Feature highlights banner
4. **AI Agent** - Voice assistant and chat features
5. **Work Like PRO** - Multimodal task creation
6. **Focus Like PRO** - Deep focus mode features
7. **Plan Like PRO** - Friends vs Foes planning
8. **Report Like PRO** - Voice-to-report features
9. **System Flow** - Productivity workflow diagram
10. **Who Is Feel PRO For** - Target audience personas
11. **Privacy** - Security and trust features
12. **CTA Card** - App Store/Play Store download
13. **Footer** - Links and social media

## 📱 App Store Buttons

The CTA card includes placeholder buttons for App Store and Google Play. Update the `href` attributes when you have actual store links.

---

Built with ❤️ for Feel PRO
