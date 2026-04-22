---
title: Installation
description: Drop a Three Queens script into your FiveM server in under five minutes.
---

Every Three Queens script follows the same install flow.

## 1. Download

Pull the latest release from our Git host, or unzip the archive you received.

## 2. Drop into resources

Move the folder into your server's resources directory:

```sh
# Windows (PowerShell)
Move-Item .\tq_example C:\FiveM\server-data\resources\[three-queens]\
```

:::tip[Keep them grouped]
We recommend a `[three-queens]` bracket folder so every TQ script loads together and stays out of the way of other collections like `[ox]` or `[esx]`.
:::

## 3. Import the SQL

Each script ships with an `install.sql` at its root. Apply it once against your MySQL database — the script will complain on boot if the tables are missing.

## 4. Start the resource

Add one line to `server.cfg`, above any scripts that depend on it:

```ini
ensure tq_example
```

## 5. Verify

Start the server and watch the console. You should see:

```
[     script:tq_example] Resource loaded, version x.y.z
```

If you see an error instead, jump to the [Overview](/example-script/overview/) page of the specific script — every script documents its own troubleshooting section there.

:::note
Most scripts support live config reload via `refresh` + `ensure`. You rarely need a full server restart after editing `config.lua`.
:::
