# Three Queens Docs

Documentation site for Three Queens FiveM scripts. Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Served via XAMPP at `http://<server>/docs/`.

## Local development

```sh
npm install          # first time only
npm run dev          # open http://localhost:4321/docs/
```

Edit any `.md` or `.mdx` file under `src/content/docs/` — the browser hot-reloads. Add a new page by creating a file and adding its slug to the sidebar in `astro.config.mjs`.

## Build + deploy to XAMPP

```sh
npm run build                            # writes to ./dist/
robocopy dist C:\xampp\htdocs\docs /MIR  # mirror into the served folder
```

Then open `http://<server>/docs/`. The `base: '/docs'` setting in `astro.config.mjs` makes every asset + the Pagefind search index resolve under that subpath — do not change it unless you also move the deploy target.

## Authoring tips

- **Code blocks**: ` ```lua title="config.lua" {2,5-8} ` for Lua with a title + highlighted lines.
- **Tabs**: import `Tabs` + `TabItem` from `@astrojs/starlight/components` in an `.mdx` file.
- **Admonitions**: `:::note`, `:::tip`, `:::caution`, `:::danger` — see `example-script/overview.mdx`.
- **Videos**: upload your clip to the existing `http://<server>/upload/` site, paste the returned URL into `<video controls src="..." />`. For big files, use a YouTube `<iframe>`.

## Adding a new script

1. Create `src/content/docs/<script-name>/` with `overview.mdx`, `configuration.md`, `exports.mdx` (copy from `example-script/`).
2. Append a new group to `sidebar` in `astro.config.mjs`.
3. `npm run dev` to preview; `npm run build` + `robocopy` to ship.
