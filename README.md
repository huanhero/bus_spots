# Bus Spots

A bus photo gallery built with Jekyll, hosted on GitHub Pages and edited with Pages CMS.

Live site: https://huanhero.github.io/bus_spots/

## How it fits together

- `_buses/` holds one file per bus (details at the top, description below).
- `media/` holds the photos.
- Pages CMS (https://app.pagescms.org) gives a simple form for adding, editing and deleting buses. It saves into this repository.
- GitHub Pages rebuilds the site about a minute after every change.

## Files

| File | What it does |
|---|---|
| `_config.yml` | Site title, nickname, filter buttons, search-engine setting |
| `.pages.yml` | The Pages CMS editing form |
| `_data/about.yml` | The "About me" text (editable in Pages CMS) |
| `index.html` | Gallery home page |
| `_layouts/default.html` | Header, footer and security settings shared by every page |
| `_layouts/bus.html` | The page for a single bus |
| `assets/css/style.css` | The design |
| `assets/js/filter.js` | The bus-type filter buttons |
| `.github/workflows/photo-check.yml` | Checks new photos for location data and size |

## Setup

1. Upload all these files to the repository (keep the folder structure).
2. Settings → Pages → Build and deployment: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Sign in at https://app.pagescms.org with GitHub, install the GitHub App, and give it access to **only** `bus_spots`.
4. Open the repository in Pages CMS and invite your son as a collaborator by email.
5. Replace the `[Nickname]` placeholders in `_config.yml` and `_data/about.yml`.
6. Delete the two sample buses once real ones are added.

## Photo rules

- Turn off location tagging in the phone's camera settings before taking photos.
- Upload JPG or PNG, ideally under 1 MB (about 1600 pixels wide is plenty).
- If the Photo check fails for location data, delete the photo and upload a clean copy. Git keeps old versions in history, so in a public repository the original stays retrievable; for anything sensitive, ask for help removing it from history.
