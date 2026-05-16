# EtherDrive OTA Firmware Updates (v1 Placeholder)

## Current Status

The first version includes an OTA update page and backend placeholders only.

Page:

- `/update.html`

Backend endpoint action placeholders:

- `update_status`
- `update_flash_placeholder`

## What Works in v1

- Shows current firmware version from `/etc/openwrt_release`
- Shows configured update channel from `etherdrive.main.update_channel`
- Provides UI structure for image upload/verify/flash flow

## What Is Intentionally Disabled

- No real firmware upload handling
- No real sysupgrade execution
- No direct flash operation

## Safety

This keeps OTA non-dangerous while defining a stable UI/API structure that can be connected to `sysupgrade` later.

## Planned Future Integration

- Image upload endpoint with size/type checks
- Signature/hash verification
- `sysupgrade` dry-run/validation hook
- Confirmed flash flow with rollback/recovery guidance
