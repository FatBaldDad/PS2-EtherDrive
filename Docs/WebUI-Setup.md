# EtherDrive WebUI Setup (v1)

## Overview

The first EtherDrive WebUI version is installed by the `etherdrive-webui` OpenWrt package and serves static pages with a lightweight CGI shell backend.

WebUI pages:

- `/index.html` (home + mode selection)
- `/setup.html` (first boot setup)
- `/status.html` (live status)
- `/storage.html` (storage config)
- `/update.html` (OTA update placeholder)

## First Boot Defaults

- PS2/EtherDrive IP: `192.168.1.199`
- Gateway: `192.168.1.1`
- Subnet: `255.255.255.0`

These values are stored in UCI:

`/etc/config/etherdrive`

## First Boot Workflow

1. Open `http://<etherdrive-ip>/setup.html`
2. Click **Scan WiFi SSIDs** and select network.
3. Enter WiFi password.
4. Confirm static LAN settings.
5. Click **Save and Apply** or **Save and Reboot**.

## Notes

- The WebUI is intentionally simple and easily editable in VS Code.
- Backend endpoint is `/cgi-bin/etherdrive-api`.
- Setup writes to `etherdrive`, `network`, and `wireless` UCI configs.
