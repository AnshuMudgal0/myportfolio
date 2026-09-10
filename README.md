# Anshu Mudgal Portfolio

A fast, static personal portfolio built for GitHub Pages. It contains no build step or server dependency.

## Publish it

1. Create a public GitHub repository, for example `portfolio`.
2. The GitHub Pages address is already configured as `https://anshumudgal0.github.io/myportfolio/`.
3. Push this project to the repository's `main` branch.
4. In GitHub, go to **Settings → Pages** and choose **GitHub Actions** as the publishing source.
5. The **Deploy portfolio to GitHub Pages** workflow validates the SEO URLs and deploys automatically on every push to `main`.
6. Open the deployment link shown in the Actions run.

## Google SEO setup after publishing

1. Add the deployed URL as a property in [Google Search Console](https://search.google.com/search-console/about).
2. Submit `https://anshumudgal0.github.io/myportfolio/sitemap.xml` in Search Console.
3. Request indexing for the home page after confirming the title, description and visible content.
4. Add a professional headshot and an Open Graph image later for stronger social sharing previews.
5. Keep project outcomes and experience current; substantive, useful updates are the best ongoing SEO work.

## Continuous delivery

Every push to `main` runs a lightweight validation and deploys the static site to GitHub Pages. A failed validation prevents a broken SEO configuration from being published.
