<div align="center">
	<h1>Remote Recruit Home Page</h1>
	<p><strong>Responsive landing page built with React 19 and Tailwind CSS 3.</strong></p>
	<p><a href="https://remote-recruit.vercel.app/" target="_blank">Live Demo</a></p>
	<p>
		<a href="#getting-started">Getting Started</a> •
		<a href="#features">Features</a> •
		<a href="#tech-stack">Tech Stack</a> •
		<a href="#project-structure">Project Structure</a> •
		<a href="#tailwind-setup">Tailwind Setup</a> •
		<a href="#scripts">Scripts</a> •
		<a href="#testing">Testing</a>
	</p>
</div>

## Overview
The Remote Recruit Home Page is a single-page React application showcasing product value propositions, pricing plans, FAQs, and conversion-focused hero and signup sections. It emphasizes fast iteration, utility-first styling with Tailwind CSS, and accessibility-friendly components.

## Features
- Hero section with clear CTA
- Modular feature highlight components (`FeatureOne`, `FeatureTwo`, `FeatureThree`)
- Pricing plans with reusable `PricingCard`
- FAQ / Common Questions accordion section
- Signup advertisement banner
- Shared layout footer
- Scroll-to-top utility button
- Responsive typography and spacing via Tailwind
- Progressive scroll-based reveal animations (fade, slide, scale) with IntersectionObserver

## Tech Stack
- React 19
- Tailwind CSS 3 (utility-first styling)
- PostCSS + Autoprefixer (build pipeline)
- Testing Library (unit/component tests)
- Web Vitals (performance metrics)

## Getting Started
### Prerequisites
Ensure you have: 
- Node.js >= 18.x (recommended LTS)
- npm >= 9.x

### Installation
```bash
git clone <repo-url>
cd remote-recruit-home-page
npm install
```

### Development Server
```bash
npm start
```
Visit http://localhost:3000. The server reloads on file changes.

### Production Build
```bash
npm run build
```
Outputs optimized assets to `build/`.

## Project Structure
```
remote-recruit-home-page/
├─ public/
│  ├─ index.html
│  └─ ...
├─ src/
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ components/
│  │  ├─ home-sections/
│  │  │  ├─ Hero.jsx
│  │  │  ├─ FeatureOne.jsx
│  │  │  ├─ FeatureTwo.jsx
│  │  │  ├─ FeatureThree.jsx
│  │  │  ├─ Pricing.jsx
│  │  │  ├─ PricingCard.jsx
│  │  │  ├─ SignUpAd.jsx
│  │  │  └─ CommonQuestions.jsx
│  │  ├─ layout/ Footer.jsx
│  │  └─ ui/ (Badge, Button, Reveal, ScrollToTop)
│  ├─ data/ (pricingPlans.js, questionsAnswers.js)
│  ├─ index.js / App.js
│  ├─ index.css (Tailwind entry + font imports)
│  └─ setupTests.js
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

## Tailwind Setup
Initialization steps performed:
1. Created app: `npx create-react-app web-developer-technical-exam` (renamed project in `package.json` to `remote-recruit-home-page`)
2. Installed build tooling: `npm install -D tailwindcss@3 postcss autoprefixer`
3. Generated config: `npx tailwindcss init -p` (produced `tailwind.config.js` and `postcss.config.js`)
4. Added Tailwind directives in `src/index.css`:
	 ```css
	 @tailwind base;
	 @tailwind components;
	 @tailwind utilities;
	 ```
5. Configured `content` paths in `tailwind.config.js` to purge unused styles.
6. Extended font family to use Poppins.

## Scripts
| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server on port 3000 |
| `npm test` | Run tests in watch mode |
| `npm run build` | Create production build in `build/` |
| `npm run eject` | Copy build tooling locally (irreversible) |

## Deployment
The production build in `build/` can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, S3 + CloudFront). Ensure you run `npm run build` before deploying.

## Animations
The project includes a lightweight, accessible scroll reveal system implemented in `src/components/ui/Reveal.jsx`.

### How It Works
`Reveal` uses the native `IntersectionObserver` API to detect when an element enters the viewport and applies Tailwind utility classes for animated transitions. Motion is skipped automatically when the user has `prefers-reduced-motion: reduce` enabled.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | element/component | `div` | Semantic wrapper element |
| `variant` | string | `fade` | Animation style: `fade`, `slide-up`, `slide-left`, `slide-right`, `scale-in` |
| `delay` | number (ms) | `0` | Delay before starting animation once visible |
| `duration` | number (ms) | `600` | Transition duration |
| `threshold` | number | `0.2` | Intersection threshold |
| `triggerOnce` | boolean | `true` | If `false`, animation will re-trigger when leaving/entering viewport |

### Usage Example
```jsx
import Reveal from '@/components/ui/Reveal';

export function ExampleSection() {
	return (
		<section>
			<Reveal as="h2" variant="slide-up" delay={100} className="text-3xl font-bold">Title</Reveal>
			<Reveal as="p" variant="fade" delay={250} className="mt-4 text-gray-600">Description text...</Reveal>
		</section>
	);
}
```

### Accessibility
- Honors `prefers-reduced-motion`
- Avoids hidden content being focusable prematurely (elements are only visually transformed, not removed from layout)
- Uses semantic `as` prop for correct heading hierarchy

### Performance Considerations
- Small footprint (no external animation library)
- Batches observer usage per element (each element self-observes; could be centralized if scaling further)
- Uses `will-change: transform` briefly to hint GPU acceleration

### Extending Variants
Add a new entry to `variantClassMap` in `Reveal.jsx` with `hidden` and `visible` Tailwind classes.

```js
const variantClassMap = {
	// existing variants...
	'flip-up': { hidden: 'opacity-0 rotate-x-12', visible: 'opacity-100 rotate-x-0' }
};
```

Then pass `variant="flip-up"` to `Reveal`.

