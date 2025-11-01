# Project Blueprint

## Overview

This is a Next.js application built with Firebase Studio. It includes a basic setup with a homepage, an about page, a navigation bar, and dynamic profile detail pages. The application has been updated with improved metadata and a modern, visually appealing CSS design.

## Styling and Design

- **Styling:** Tailwind CSS is used for styling, with additional custom styles in `src/app/globals.css` for a modern look and feel. The new styles include a new color palette, card components with hover effects, and improved typography.
- **Layout:** The main layout is defined in `src/app/layout.js`, which includes the navigation bar.
- **Navbar:** A simple navigation bar is implemented in `src/components/Navbar.js`.

## Features

- **Homepage:** The main page is `src/app/page.js`. It's a server component that fetches and displays a list of team profiles with filter options.
- **About Page:** An "About Us" page is available at `/about`.
- **Profile Pages:** Dynamic profile pages are generated for each team member, accessible at `/profile/[id]`.
- **Navigation:** The navbar provides links to Home, About, and Contact pages. Profile cards on the homepage link to the corresponding detail pages.
- **Metadata:** The application's metadata has been updated in `src/app/layout.js` to improve SEO.
- **Error Resolution:** Fixed initial "Internal Server Error" caused by incorrect font imports and a corrupted dependency.

## Current Plan

- The plan was to update the metadata and CSS. This has been completed.
