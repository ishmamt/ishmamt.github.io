# Ishmam Tashdeed's portfolio

A small Jekyll site for research, writing, and life outside work. The site is published at [ishmamt.github.io](https://ishmamt.github.io/).

## Run locally

Install Ruby 3.2 and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. A production build uses `JEKYLL_ENV=production bundle exec jekyll build`.

## Edit content

- Home introduction: `_includes/content/home.md`
- About introduction, music, and art text: `_includes/content/about-*.md`; photographs and captions: `_data/photos.yml`
- Page layouts and other copy: `index.html`, `research/index.html`, `blog/index.html`, `about/index.html`
- Publications: one Markdown file per paper in `_publications/`; set `selected: true` to feature it on Home
- Blog: create a dated Markdown file in `_posts/`; use `_drafts/post-template.md` as a starting point. Drafts are not published. Optional `series` and `series_position` fields group related posts
- Portrait: `assets/img/prof_pic.jpg`
- CV: replace `assets/pdf/cv.pdf`
- Site colors and layout: `assets/css/site.css`

The blog page shows a playful empty message until a genuine post is added. Posts can use Markdown, Rouge fenced code, footnotes, and MathJax when `math: true` is set in front matter.

The theme's light and dark setting is stored in the reader's browser. Space Mono is self-hosted under `assets/fonts/` using the included Open Font License.

## Deployment

The GitHub Actions workflow builds the site on pushes to `master` or `main` and deploys `_site` to the `gh-pages` branch. This repo is currently changed and committed locally; nothing has been pushed.
