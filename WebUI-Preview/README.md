# PS2-EtherDrive WebUI Preview

This folder contains a static, GitHub-previewable mockup of the EtherDrive WebUI.

## What it does

- Works as plain HTML, CSS, and JavaScript
- Uses relative links only
- Runs from GitHub Pages or by opening `index.html` locally
- Uses browser-side demo data instead of OpenWrt, CGI, Lua, PHP, or other backend services
- Marks backend-related actions as **Preview only**

## Pages

- `index.html` - overview dashboard
- `setup.html` - first boot WiFi and static IP setup
- `status.html` - demo system status
- `modes.html` - mode selection preview
- `storage.html` - storage setup preview
- `update.html` - OTA firmware update mockup

## Previewing in a browser

The WebUI mockup can be previewed through GitHub Pages after Pages is enabled for this repository.

[Open the WebUI Preview]([https://YOUR-GITHUB-NAME.github.io/YOUR-REPO-NAME/WebUI-Preview/index.html](https://github.com/FatBaldDad/PS2-EtherDrive/tree/main/WebUI-Preview))

If GitHub Pages is not enabled yet:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Set **Branch** to **main** and folder to **/root**.
6. Save the settings.
