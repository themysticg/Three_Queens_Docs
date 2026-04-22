---
title: Image Uploader
description: Host images and short video clips for use in FiveM scripts and documentation.
---

The Three Queens Image Uploader is a self-hosted tool running on the same server as these docs. It gives you a public URL for any image or short video clip — drop it into a script notification, a `<video>` tag in these docs, or anywhere else you need a static media URL.

## What it accepts

| Format | Max size | Use case |
| ------ | -------- | -------- |
| PNG    | 2 MB     | Screenshots, UI mockups |
| WEBP   | 2 MB     | Compressed screenshots |
| GIF    | 2 MB     | Short looping animations |
| WEBM   | 2 MB     | Short gameplay clips |

:::tip[Bigger clips]
For videos larger than 2 MB, upload to YouTube (unlisted is fine) and embed with an `<iframe>` in your docs page instead.
:::

## How to upload

1. Open the uploader in your browser: `http://<server>/upload/`
2. Drag and drop one or more files onto the drop zone — or click it to browse.
3. Each file uploads individually. When done you get a public URL per file.
4. Click **Copy** to copy the URL to your clipboard.

Batch uploads are supported: drop up to 20 files at once, each under 2 MB.

## Using the URL in a script

Paste the returned URL directly into Lua — for example as the icon path in an `ox_lib` notification:

```lua
lib.notify({
  title   = 'Delivery Complete',
  description = 'Package delivered.',
  icon    = 'http://<server>/upload/uploads/delivery_icon.png',
  iconColor = '#ff0000',
})
```

## Using the URL in these docs

Drop a `<video>` tag in any `.mdx` page:

```mdx
<video controls width="100%" src="http://<server>/upload/uploads/demo.webm" />
```

Or a static image:

```md
![Screenshot](http://<server>/upload/uploads/screenshot.png)
```

## Security notes

- Files are renamed to a random hex string on the server — original filenames are never exposed.
- The `uploads/` folder has PHP execution disabled, so uploaded files cannot run as scripts.
- File type is verified by MIME sniffing on the server, not just the extension.

## Source code

The uploader is open-source and lives in the Three Queens GitHub organisation alongside these docs.

- Repository: [Three_Queens_Upload](https://github.com/themysticg/Three_Queens_Upload)
- Stack: plain PHP + HTML + vanilla JS, no framework — runs on XAMPP out of the box.
