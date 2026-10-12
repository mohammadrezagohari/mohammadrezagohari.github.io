# Mohammadreza Gohari — Personal Website

A lightweight, responsive, bilingual (English/Persian) personal portfolio for a Software Engineer. No build step, framework, Node.js runtime or paid hosting required.

**Intended URL:** https://mohammadrezagohari.github.io/

## Features

- Responsive desktop/tablet/mobile layout
- Real GitHub profile avatar (live from the public GitHub profile)
- English / Persian toggle with RTL support
- Dark / light theme toggle
- Projects, skills, professional experience and email contact
- Semantic HTML, accessibility improvements, SEO and Open Graph metadata
- Static assets, `robots.txt`, `sitemap.xml`, `.nojekyll`, and friendly 404

## Run locally

Open `index.html` in a browser. For the closest preview to GitHub Pages, start a local server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/.

## Publish to GitHub Pages — user homepage

1. Create a **Public** repository at https://github.com/new with the EXACT name `mohammadrezagohari.github.io` under the `mohammadrezagohari` account. Do not create it as a subfolder of another repository.
2. Upload **the contents of this folder** (not the ZIP itself) to the root of the repository on `main` (GitHub's **Add file → Upload files**, or use Git).
3. In **Settings → Pages**, select **Deploy from a branch** and choose `main` and `/ (root)`; save.
4. Visit https://mohammadrezagohari.github.io/. It may take a few minutes after the push for Pages to publish.

### Git command alternative

Open a terminal in the folder after creating an empty GitHub repository:

```bash
git init
git branch -M main
git add .
git commit -m "Launch personal website"
git remote add origin https://github.com/mohammadrezagohari/mohammadrezagohari.github.io.git
git push -u origin main
```

GitHub may ask for browser authentication or a personal access token rather than a password.

## Customization

- Edit your intro, project descriptions and experience in `index.html`.
- For the Persian translations, edit the `fa` dictionary in `assets/main.js` (and the `en` dictionary for English).
- Change colors through the CSS variables at the top of `assets/styles.css`.
- To use a local headshot, save it as `assets/headshot.jpg` and change the profile image source in `index.html` to `assets/headshot.jpg`.
- The current site loads the **public GitHub profile avatar** using `https://avatars.githubusercontent.com/u/45491737?v=4&size=560`. If your GitHub avatar changes, this page reflects that change automatically.
- Personal GitHub user Pages live at `mohammadrezagohari.github.io` only when a repository with this exact name exists and Pages is configured.

## Notes

- All professional details are user-provided or based on public repositories. Review your dates and wording before using as a formal CV.
- GitHub Pages hosts static files; contact is implemented using an email link, not a backend mail form.
- GitHub's avatar and Google Fonts need network access. Fallback fonts and an MG monogram are provided.
