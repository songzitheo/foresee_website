# ForeSee Website

A modern, responsive website for the ForeSee mobile app - a child-friendly app that helps kids build healthy screen habits using the 20-20-20 eye care rule.

## Features

- **Hero Section**: Eye-catching introduction with app mockups and waitlist signup
- **Waitlist Modal**: Beautiful popup form to collect early user interest
- **About Section**: Clear explanation of what ForeSee is
- **How It Works**: Step-by-step guide with visual icons
- **Features**: Highlights of key app benefits
- **Testimonials**: Real feedback from families
- **Download Section**: CTA with parent dashboard preview
- **FAQ**: Comprehensive answers to common questions
- **Responsive Design**: Works beautifully on all devices
- **Supabase Integration**: Stores waitlist signups in database

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd foresee_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. **Set up Supabase database** (IMPORTANT):
   - See `SUPABASE_SETUP.md` for detailed instructions
   - Create the `waitlist` table using the provided SQL
   - This is required for the waitlist feature to work

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
foresee_website/
├── app/
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── HowItWorks.tsx   # How it works section
│   ├── Features.tsx     # Features section
│   ├── Testimonials.tsx # Testimonials section
│   ├── Download.tsx     # Download CTA section
│   ├── FAQ.tsx          # FAQ accordion
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── package.json         # Dependencies
```

## Design

The website follows the exact design specifications from the provided Figma screenshots, including:

- Blue gradient hero section with phone mockups
- Clean, modern UI with rounded corners
- Consistent color scheme (blue, purple, green, pink accents)
- Smooth transitions and hover effects
- Accessible navigation and interactions

## Deployment

This Next.js app can be deployed on:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Docker**: Build and run as a container
- Any Node.js hosting platform

## License

© 2025 ForeSee Team. All rights reserved.

## Contact

For questions or support, visit the Contact section on the website.
