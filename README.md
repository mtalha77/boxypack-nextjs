# Boxypack - Custom Packaging and Boxes Website

A modern, responsive website for Boxypack, a custom packaging and boxes company. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 About

Boxypack helps businesses create custom packaging and boxes that turn their brand into the total package. We offer:

- **Full Customization** - Design your packaging exactly how you want it
- **Instant Quoting** - Get accurate pricing in seconds
- **Fast Turnarounds** - Quick production and delivery

## 🚀 Features

- Modern, responsive design
- Beautiful gradient backgrounds and animations
- Mobile-first approach
- SEO optimized
- Fast loading with Next.js 15
- Custom Tailwind CSS styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist (Google Fonts)
- **Deployment**: Ready for Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd boxypack
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

To get these credentials:

- Sign up at [EmailJS](https://www.emailjs.com/)
- Create an email service (Gmail, Outlook, etc.)
- Create an email template with the following variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{company}}`, `{{project_type}}`, `{{message}}`, `{{to_name}}`
- Copy your Service ID, Template ID, and Public Key

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

The website is built with customization in mind:

- **Colors**: Easily modify the color scheme in `globals.css`
- **Content**: Update text and images in `page.tsx`
- **Layout**: Modify the structure in the main page component
- **Styling**: Customize Tailwind classes throughout the components

## 📱 Responsive Design

The website is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is private and proprietary to Boxypack.

## 🤝 Contributing

For internal development and contributions, please follow the team's coding standards and review process.

---

Built with ❤️ by the Boxypack Team
