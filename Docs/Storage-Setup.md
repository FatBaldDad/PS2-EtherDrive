# EtherDrive Storage Setup (v1)

## Supported Storage (first version)

- USB 2.0 block storage
- microSD/SD block storage if board/kernel support exists (e.g. `/dev/mmcblk*`)

## Installed Package Dependencies

The `etherdrive-webui` package includes storage-related dependencies:

- `block-mount`
- `kmod-usb-core`
- `kmod-usb2`
- `kmod-usb-storage`
- `kmod-fs-ext4`
- `kmod-fs-vfat`
- `e2fsprogs`
- `dosfstools`
- `blkid`
- `mount-utils`

## Storage Configuration Keys

In `/etc/config/etherdrive`:

- `storage_device`
- `storage_mount`
- `share_name`
- `auto_mount`

Default values:

- `storage_mount=/mnt/etherdrive`
- `share_name=PS2SMB`
- `auto_mount=1`

## UI Workflow

1. Open `/storage.html`
2. Click **Scan Storage Devices**
3. Select detected device
4. Set mount path and share path name
5. Save settings

## Format and Filesystem Tools

Formatting is placeholder-only in v1.

The page and backend structure are prepared so format/status actions can be extended later with safe checks and explicit confirmation flows.
