# Startup Job Board — JOBLY

JOBLY is a responsive startup job board developed as part of the Web Technologies and Web Design laboratory course.

The project is based on my Figma design and focuses on a clear, friendly and modern job-search experience. The visual style is aimed mainly at a younger audience and combines an editorial layout with playful accents, rounded elements and a simple interface.

The project is developed step by step through four laboratory works: Figma design, semantic HTML, SCSS and responsive layout, and JavaScript with API integration.

## Project Pages

The website contains four main pages:

- **Home** — introduction to the platform, job search and featured vacancies.
- **Jobs** — list of available vacancies with search and filtering elements.
- **Job Details** — detailed information about a selected vacancy.
- **Apply** — application form for a selected job.

The original design contains Desktop, Tablet and Mobile layouts.

## Design System

The interface is based on the design system created in Figma.

### Typography

Two main font families are used:

- **Fraunces** — Display, H1, H2 and H3 headings.
- **Instrument Sans** — body text, captions and interface elements.

### Core Palette

- Wine — `#452829`
- Graphite — `#57595B`
- Blush — `#E8D1C5`
- Cream — `#F3E8DF`
- Pink — `#F49AB1`

### Secondary Accent

- Orange — `#F2A65A`

Orange is used as an additional decorative accent and is not part of the main five-color palette.

## Technologies

The project uses:

- HTML5
- SCSS
- JavaScript ES Modules
- Vite
- json-server
- ESLint
- Git and GitHub

No UI frameworks are used.

## Quick Start

Install project dependencies:

```bash
npm install
```

Start the project with Vite and json-server:

```bash
npm run dev:vite
```

Application:

```text
http://localhost:5173
```

Mock API:

```text
http://localhost:5174
```

## Available Scripts

### Vite

```bash
npm run dev:vite
```

Starts Vite and json-server concurrently.

```bash
npm run build:vite
```

Creates a production build.

```bash
npm run preview:vite
```

Previews the production build locally.

### Webpack

```bash
npm run dev:webpack
```

Starts Webpack and json-server concurrently.

```bash
npm run build:webpack
```

Creates a production build using Webpack.

```bash
npm run preview:webpack
```

Previews the Webpack production build.

### ESLint

```bash
npm run lint
```

Runs ESLint and checks JavaScript code.

## Project Structure

```text
public/
    assets/
        icons/
        images/

src/
    styles/
        abstracts/
            _variables.scss
            _functions.scss
            _mixins.scss

        base/
            _reset.scss
            _typography.scss

        components/
            _button.scss
            _card.scss
            _input.scss

        layout/
            _grid.scss
            _header.scss
            _footer.scss

        pages/
            _home.scss
            _jobs.scss
            _job-details.scss
            _apply.scss

        themes/
        vendors/
        main.scss

    js/
        api/
            http.js
            endpoints.js

        core/
            store.js
            utils.js

        components/

        pages/

        main.js

index.html
package.json
vite.config.js
webpack.config.js
.eslintrc.cjs
README.md
DEVLOG.md
Prompts.md
```

## Laboratory Work 1 — Figma Design

The first laboratory work contains the complete UI design of JOBLY.

Four screens were designed:

1. Home
2. Jobs
3. Job Details
4. Apply

The layouts were created for:

- Desktop
- Tablet
- Mobile

The design system includes reusable components such as:

- Buttons
- Inputs
- Job Cards
- Tags and pills
- Header elements

Figma components and variants are used for repeated interface elements. Auto Layout is used to make sections and components easier to adapt between different screen sizes.

The responsive grid uses:

- **Desktop:** 12 columns
- **Tablet:** 8 columns
- **Mobile:** 4 columns

Accessibility considerations include sufficient color contrast and interface states such as focus, hover and disabled states.

## Laboratory Work 2 — HTML and Semantics

The second laboratory work implements the semantic structure of the Figma design using HTML5.

The website contains four semantic pages corresponding to the original design:

- Home
- Jobs
- Job Details
- Apply

Semantic HTML elements are used where appropriate:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Images contain meaningful `alt` attributes.

Form controls are connected with corresponding `<label>` elements.

Headings follow a logical hierarchy.

Repeated interface structures are organized consistently across all pages.

The main purpose of this stage is to create a correct document structure before adding the complete visual styling.

## Laboratory Work 3 — SCSS and Responsive Design

The third laboratory work adds the visual appearance and responsive behavior based on the Figma design.

Styles are organized using the SCSS 7–1 architecture.

The project uses BEM naming for interface blocks and their elements.

Reusable SCSS logic includes:

- variables;
- mixins;
- functions;
- responsive grid helpers;
- containers;
- spacing;
- typography;
- reusable component styles.

The layout supports three main responsive ranges corresponding to the Figma layouts:

```text
Mobile: 360–390 px
Tablet: 768 px
Desktop: ≥1280 px
```

Responsive images and flexible layouts are used to adapt the interface to different screen sizes.

## Laboratory Work 4 — JavaScript and API

The fourth laboratory work is intended for adding interactive functionality to the existing interface.

The project structure supports:

- ES Modules;
- API requests;
- json-server;
- vacancy search;
- filters;
- sorting;
- pagination;
- form validation;
- localStorage.

The mock REST API is provided through json-server.

## Development Workflow

The project follows the same interface structure through all laboratory works:

```text
Figma
  ↓
Semantic HTML
  ↓
SCSS + Responsive Layout
  ↓
JavaScript + API
```

The Figma project acts as the visual source for the implementation. HTML defines the semantic structure, SCSS reproduces the visual system and responsive layouts, and JavaScript adds interactive behavior.

## Development Documentation

Additional development information is stored in:

- `DEVLOG.md` — development progress and changes;
- `API_MAP.md` — API structure and endpoints.


Web Technologies and Web Design  
Startup Job Board — JOBLY  
2026
