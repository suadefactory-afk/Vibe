# Vibe — Development Notes

## Current status

Vibe is an early front-end prototype made with plain HTML, CSS and JavaScript. It is suitable for learning, experimenting and publishing as a static website.

## How the current code works

- `index.html` contains the page structure.
- `style.css` contains the visual design and responsive layout.
- `script.js` handles local post creation, local browser storage, likes and basic search.
- `assets/icons/vibe-mark.svg` is the app's small brand icon.

## Important technical limits

- `localStorage` is local to one browser and device. It does not sync posts between people.
- There is no sign-up, login or account recovery.
- The sample feed is not connected to a server.
- The message, community and profile areas are visual previews only.
- Do not collect real users' personal information in this prototype.

## Suggested beginner roadmap

1. Run the site locally and learn what each file does.
2. Improve the layout and test it on a phone and computer.
3. Add clear empty states and form validation.
4. Learn basic Git and GitHub commits so changes can be tracked.
5. Before real accounts or public user content, plan a secure backend, database, authentication, moderation, privacy controls and backups.
6. Test accessibility, performance and mobile usability.

## GitHub Pages

GitHub Pages can host the static front end. It cannot by itself provide a secure database, user authentication or real-time messaging. Those features need a suitable backend service and careful security design.
