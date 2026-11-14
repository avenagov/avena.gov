# Government of Avena - official website

Static site for GitHub Pages (HTML, CSS, vanilla JavaScript; no build step).

## Publish
1. Push these files to a GitHub repository (keep `index.html` in the root).
2. Settings > Pages > Deploy from a branch > `main` / `(root)`.

## Edit
Almost everything is in `js/data.js`:
- **News**: add an object to `news` (newest dates appear first on the homepage).
- **Officials / departments**: `officials`, `departments` (`head`, `desc`, `name`).
- **History**: add to `history`. **Laws/decrees**: add to `documents` (`type`, `date`, `version`, `url`).
- **Services and links**: `services` (empty `url` shows a "not yet published" notice).
- **Images**: put files in `assets/images/` and reference them, e.g. `image: "assets/images/photo.jpg"`.
Empty values show as yellow placeholders. Colours live in `css/style.css` (`:root`).
