# Crème Salon project — GitHub Pages fix

This version is configured for the GitHub repository `droplistt/demo1`, served at:
https://droplistt.github.io/demo1/

## Deploy steps
1. Extract this ZIP.
2. Upload/commit the **contents of this folder** to the root of the `demo1` repository (not the ZIP file and not an extra enclosing folder).
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
5. Open the repository's **Actions** tab and wait for **Deploy Next.js site to GitHub Pages** to finish successfully.
6. Visit https://droplistt.github.io/demo1/

The workflow builds Next.js as a static export and deploys the generated `out` folder. The `/demo1` base path is required for this repository URL.

The Crème Salon website is the homepage. The standalone salon HTML is served from `/salon-site/`, and the Black Hole demo is at `/blackhole-demo/`.
