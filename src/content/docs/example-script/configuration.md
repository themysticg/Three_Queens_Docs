---
title: Example Script — Configuration
description: Every option in config.lua, with defaults and examples.
---

All runtime settings live in `config.lua`. Edit the file, then `refresh` + `ensure tq_example` in the server console to reload without restarting.

## The full file

```lua title="config.lua"
Config = {}

-- How much the player is paid per delivery.
Config.Payout = 250

-- Items the script will accept. Keys are ox_inventory item names.
Config.AcceptedItems = {
  ['bread']  = 1,
  ['water']  = 1,
  ['burger'] = 2,
}

-- Delivery points. Each entry is a Vector3 + optional label.
Config.Points = {
  { coords = vec3(-265.4, -963.3, 31.2), label = 'Legion' },
  { coords = vec3( 373.9, -2066.8, 21.4), label = 'Docks' },
}

-- Debug flag. Set false in production.
Config.Debug = false
```

## Option reference

### `Config.Payout` (number)
Cash awarded per successful delivery. Default `250`.

### `Config.AcceptedItems` (table)
Map of `ox_inventory` item names to **quantities required**. Unknown items are ignored at runtime — the player can never be rewarded for them.

### `Config.Points` (table)
Array of `{ coords = vec3, label = string }`. Label is shown in the `ox_target` prompt. Empty array disables the script without unloading it.

### `Config.Debug` (boolean)
When `true`, the script prints every reward + rejection to the server console. Leave `false` in production — the log can be noisy on busy servers.
