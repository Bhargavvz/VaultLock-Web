# VaultLock Landing Page

A stunning, modern, and responsive landing page for VaultLock - the most secure, offline password manager.

![VaultLock](https://img.shields.io/badge/VaultLock-v2.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## 🚀 Features

- **Modern Design**: Beautiful dark theme with gradient effects and glassmorphism
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth transitions
- **Responsive**: Mobile-first design that looks great on all devices
- **Fast**: Built with Next.js 14 for optimal performance
- **SEO Ready**: Proper meta tags and Open Graph support

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Bhargavvz/VaultLock.git
cd vaultlock-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features grid
│   ├── Security.tsx     # Security showcase
│   ├── HowItWorks.tsx   # Step-by-step guide
│   ├── Screenshots.tsx  # App preview carousel
│   ├── TechStack.tsx    # Technical info
│   ├── Download.tsx     # Download section
│   ├── FAQ.tsx          # FAQ accordion
│   ├── OpenSource.tsx   # GitHub CTA
│   ├── Footer.tsx       # Page footer
│   └── ThemeProvider.tsx # Dark/Light theme
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the brand colors:

```typescript
colors: {
  primary: '#3E4AFF',
  secondary: '#4CC9B0',
  accent: '#5C9DFF',
  // ...
}
```

### Content
Update the content in each component file to match your app information.

## 📝 Configuration

### Update Links
Search and replace the following placeholders:
- `[APK_DOWNLOAD_LINK]` - Your APK download URL
- `[PLAY_STORE_LINK]` - Google Play Store URL
- `[APP_STORE_LINK]` - Apple App Store URL

### Screenshots
Replace the placeholder screenshots in `Screenshots.tsx` with actual app screenshots.

## 🔗 Related

- [VaultLock App Repository](https://github.com/Bhargavvz/VaultLock)
- [Flutter Documentation](https://flutter.dev/docs)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 👤 Author

**Bhargav** - [@Bhargavvz](https://github.com/Bhargavvz)

---

Made with ❤️ for the VaultLock community
