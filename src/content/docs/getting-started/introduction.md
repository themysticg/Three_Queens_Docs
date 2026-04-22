---
title: Introduction
description: What Three Queens scripts are and how these docs are organised.
---

Welcome to the Three Queens documentation. Every script we publish has its own section in the sidebar with three pages:

1. **Overview** — what the script does, screenshots, video walkthrough.
2. **Configuration** — every knob in `config.lua`, explained.
3. **Exports** — the client/server API you can call from your own code.

## Who this is for

- Server owners installing Three Queens scripts on a FiveM server running `ox_core` + `ox_inventory`.
- Developers extending or integrating Three Queens scripts with their own resources.

## Prerequisites

- A FiveM server (artifact build ≥ `latest recommended`).
- MySQL 5.7+ (or MariaDB 10.4+) reachable by the server.
- `ox_lib`, `ox_inventory`, and (for job-related scripts) `ox_core` installed.

## Conventions

Anything inside `<>` is a placeholder you should replace, e.g. `<your-server-ip>`. Anything inside backticks is a literal value, file name, or command.

Ready? [Head to Installation →](/getting-started/installation/)
