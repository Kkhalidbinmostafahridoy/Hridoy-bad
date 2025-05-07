# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- Structure of Folder  -->

/src
|   ├──assets-1.btn 2.card 3.svg file
├── /components
│   ├── /Header
│   │   ├── Header.tsx
│   │  
│   │
│   ├── /Banner
│   │   ├── Banner.tsx
│   │   
│   │
│   ├── /Blog
│   │   ├── Blog.tsx
│   │   
│   │
│   ├── /About
│   │   ├── About.tsx
│   │   
│   │
│   ├── /Work
│   │   ├── Work.tsx
│   │   
│   │
│   ├── /Faq
│   │   ├── Faq.tsx
│   │   
│   │
│   └── /Footer
│       ├── Footer.tsx
│       
│
├── /assets  (optional for images, icons, etc.)
│
├── App.tsx
├── main.tsx or index.tsx
└── index.css or global styles
├── tailwind.config.js

<!--------------------------Describe code:------------------------>

1.Header---->
This Header component creates a responsive navigation bar using React, Tailwind CSS,daisyUI  and React Icons. It displays a logo on the left and a navigation menu with links like About, Blog, Work, and Footer. On smaller screens, a dropdown menu is triggered by a hamburger icon. On larger screens, the links appear horizontally, and an extra icon  is shown on the right. The design uses a dark theme, rounded edges, and a backdrop blur for a modern look.

2.Banner---->
The component renders a full-width banner with a background image and dark theme.It features a central headline in large white text, describing the company's value proposition.A short supporting paragraph and a prominent button  are placed below the headline.A translucent overlay enhances text readability over the background image.At the bottom, five brand or client logos are displayed in a grid layout as social proof or partnerships.

3.Blog:----->
It imports three card images and a background image for the entire section.The main container uses a full-width grid layout with a dark background and a custom image (bg123).Each card is a fixed-size box (460x340px) with rounded corners and a shadow.A decorative SVG background (CardBg) is layered absolutely behind the card image.The card images are displayed with full coverage using object-cover, ensuring visual consistency.

4.About:--->

It displays a full-section background with an introductory paragraph overlaid at the top.Below the text, four individual feature cards are arranged horizontally with fixed positioning.Each card has a background image, a heading, a subtitle image, and a brief description.Small SVG icons float over each card, styled with absolute positioning for emphasis.The layout uses many hardcoded margins, which may impact responsiveness.

5.Work:---->

It uses a full-section background image with a heading and description placed above project cards.The layout contains two large horizontal cards followed by three stacked cards in a grid format.Each card includes an image, title (Alcohol Tracker), subtitle, "Open" button, and a small SVG icon.Tailwind CSS is heavily used, but the layout relies on many fixed widths and negative margins  which can break responsiveness.At the bottom, there's a "View more" button with an icon encouraging users to explore further projects.

6.Faq:---->

It uses a background image and grid layout with three columns, though content is mostly centered in the first two.A heading and brief description introduce the FAQ section with the title "Featured Insights".The list of items is rendered dynamically from the items array, with each item showing a numbered badge and a title.Each list item includes a gradient background and a link icon styled as a white arrow (↗) on the right.The layout relies on fixed widths  which make it inflexible and non-responsive on smaller screens.

7.Footer:---->

The footer has a background image and a call-to-action section .A large, underlined contact email is prominently displayed.Social media links are placed far to the right using large manual margin-left values.Two bottom sections handle privacy/terms and copyright info, again using fixed margins.The layout will break or misalign on different screen sizes due to the lack of responsive classes or proper flexbox/grid use.