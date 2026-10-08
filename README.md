# Daily Focus

A local React + TypeScript + Vite prototype recreated from Figma:
https://www.figma.com/design/czQXmCqnwayW05EJ5d7yRM/Untitled?node-id=0-1

## Run

Use Node.js 22.12+ (Node 24 also works), then run in this folder:

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Vite. To check and preview a production build:

```sh
npm run build
npm run preview
```

## Behaviour

- Initially, two of four priorities are complete (State A).
- Click a task card or use Tab and Space to toggle completion.
- Completing Prepare class slides produces the provided State B (3 of 4).
- The count, progress bar, checkmark and strikethrough update together.
- Reset demo restores the original tasks and State A label.
- State lives in memory; reloading starts the demo again.

## Design fidelity

Based on inspected high-fidelity Figma frames 1:2 and 1:37. Uses the current visible greeting, Good morning, Bhavina, rather than the older layer name mentioning Sam. Content and date are intentionally fixed to the design. Colours, Inter weights, spacing, card sizes and corner radii follow Figma. Fonts are installed locally through @fontsource/inter and bundled with the build; there are no external image assets.

The supplied design contains only 390 × 844 mobile frames. Larger viewports centre the 390px layout; smaller viewports shrink it and allow text wrapping. This responsive behaviour is inferred. Hover/focus indicators and reduced-motion support are added for usability.

This project runs locally; no hosted deployment is configured.

## Verification in the build environment

- `npm install` completed successfully; exact dependency versions are recorded in package-lock.json.
- `npm run build` passed TypeScript checking and Vite production bundling.
- Vite development server reached its ready state on 127.0.0.1:5173.
- Browser rendering and interaction tests could not be completed: the environment's Chromium downloads returned invalid archives. Visual/responsive fidelity and interactions still need a browser check.
