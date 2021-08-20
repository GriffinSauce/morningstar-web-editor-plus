# morningstar-web-editor-plus

Mods and additions to the Morningstar Web Editor

## Installation

Build with `yarn build` and load `/dist` as an unpacked extension.
To-do: simplify this and consider publishing to the store.

## Features

Currently supported features:

### Auto-connect

The editor will automatically connect when a single device is available.
It will only do this once to avoid breaking disconnect use-cases, so reload the page (cmd+r / ctrl+r) if you previously connected.

### Hotkeys

The extension adds some hotkeys for quicker mouse-free editing.

- `cmd+s` / `ctrl+s` - save preset\*
- `cmd+c` / `ctrl+c` - copy preset\*
- `cmd+up / cmd+down` / `ctrl+up / ctrl+down` - navigate banks
- `cmd+left / cmd+right` / `ctrl+left / ctrl+right` - navigate presets

\*todo: make these commands more contextually aware (ie. save bank on bank tab)

### Navigation side panels

Replaces the dropdowns to select a bank and preset with permanently visible side panels.
This makes it easier to know where you are and quicker to jump to other presets.

## Warning

This extension is quite fragile, any changes to the editor by Morningstar might break it.
Use at your own risk and always have backups! (which is good practice regardless)
