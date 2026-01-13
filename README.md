Bitscale – SaaS Dashboard (Assignment)
A Figma-accurate, highly interactive SaaS dashboard built as part of the Bitscale assignment. The implementation focuses on dynamic UI behavior, scalable architecture, and real product-like interactions, even while using mock data.
🔍 Overview
This project implements a B2B SaaS data grid dashboard inspired directly by the provided Figma design.
While the data is mocked, the UI and interactions are built to behave like a real production system, including:

Dynamic headers and banners
Spreadsheet-style grid with hover interactions
Config-driven columns and rows
Async/progress-based UI states

The goal was not just visual parity, but product-level behavior.
🎯 Key Highlights
✅ Figma-Accurate UI

Pixel-aligned layout and spacing
Spreadsheet / Excel-like grid lines
Hover affordances and row-level interactions
Design-accurate banner, buttons, and typography

⚡ Highly Dynamic by Design

Column definitions driven by configuration (not hardcoded)
Rows rendered from mock data with scalable schema
"Add Column" functionality to dynamically extend the grid
Placeholder rows and loading/progress states to simulate async workflows

🧠 Rich Interactions

Row hover reveals contextual actions
Copy-ready fields and interactive cells
Toolbar actions (filter, sort, enrichment) structured for future API wiring
Responsive behavior with horizontal scrolling on smaller screens

📱 Fully Responsive

Grid scrolls horizontally on mobile without breaking layout
Header, toolbar, and content adapt gracefully to screen size
No fixed heights that block responsiveness

🛠 Tech Stack

Next.js (App Router)
TypeScript
Tailwind CSS
shadcn/ui
Lucide Icons
Sonner (toast infrastructure)
Vercel (deployment)

🚀 Live Demo
Deployed on Vercel:
👉 https://dashboard-page-sigma.vercel.app/