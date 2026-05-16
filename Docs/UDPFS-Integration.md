# UDPFS Integration — PS2-EtherDrive

## Overview

PS2-EtherDrive supports three optional network game-loading protocols for the PlayStation 2:

| Mode  | Protocol | Loader compatibility |
|-------|----------|----------------------|
| SMB1  | Samba / SMB 1.0 | OPL (Open PS2 Loader) |
| FTP   | FTP | OPL, utility transfers |
| **UDPFS** | **UDPFS / UDPBD** | **Neutrino, NHDDL** |

This document covers the **UDPFS** mode, which is provided through the optional third-party package **udpfsd** by [pcm720](https://github.com/pcm720/udpfsd).

---

## What Is UDPFS?

UDPFS (UDP File System) is a lightweight network file-serving protocol designed specifically for PlayStation 2 game loading.  It was created as part of the [Neutrino](https://github.com/rickgaiser/neutrino) EE kernel project by Rick Gaiser.

**udpfsd** is a Go implementation of the UDPFS/UDPRDMA server.  Key capabilities:

- Serves a directory of game files to the PS2 over UDP.
- Serves block-device images (UDPBD subset) for raw disc access.
- Transparent on-the-fly decompression of **CSO** and **ZSO** disc images.
- Multiple concurrent PS2 clients with isolated session state.
- Read-only mode for safe operation.
- Environment-variable and flag-based configuration — suitable for embedded devices.

> **Attribution:** udpfsd is the work of Ivan V (pcm720).  
> Source: <https://github.com/pcm720/udpfsd>  
> License: BSD-3-Clause — see [`References/Third-Party-Licenses/udpfsd-BSD-3-Clause.md`](../References/Third-Party-Licenses/udpfsd-BSD-3-Clause.md)

---

## Why UDPFS for PS2-EtherDrive?

SMB1 has been the traditional PS2 network loading method but carries overhead from the SMB protocol stack.  UDPFS was designed to be lighter and faster for this use case, and is the native protocol for Neutrino-based loaders.

PS2-EtherDrive includes udpfsd as an **optional, disabled-by-default** package so users can choose the loading mode that best suits their setup:

- Use **SMB1** with OPL for broad compatibility.
- Use **FTP** for game file transfers.
- Use **UDPFS** with Neutrino or NHDDL for optimised network loading performance.

---

## Package Location

The OpenWrt package definition is located at:

```
Firmware/OpenWrt/packages/udpfsd/
├── Makefile                  # OpenWrt package Makefile (builds from source)
└── files/
    ├── udpfsd.init           # procd init script
    └── udpfsd.config         # UCI configuration template
```

---

## Building the Package

udpfsd is written in Go.  The package Makefile uses the OpenWrt Go toolchain support (`golang-package.mk`).

### Prerequisites

- OpenWrt build system with the **packages** feed enabled.
- Go language support (`feeds/packages/lang/golang`) — available in OpenWrt 21.02 and later.

### Add the package to your build

1. Copy or symlink `Firmware/OpenWrt/packages/udpfsd/` into your OpenWrt build tree under `package/udpfsd/` (or add this repository as a custom feed).
2. Run `make menuconfig`, navigate to **Network**, and enable `udpfsd`.
3. Build: `make package/udpfsd/compile`.

> **Note:** Pre-built MIPS binaries (including `mipsel` for the HLK-7628N / MT7628 platform) are available at <https://github.com/pcm720/udpfsd/releases> for testing outside of the full build system.

---

## Configuration

The service configuration is stored in `/etc/config/udpfsd` (UCI format).

### Configuration options

| Option | Default | Description |
|--------|---------|-------------|
| `enabled` | `0` | Set to `1` to start the service on boot |
| `device` | *(empty)* | Block device to mount (e.g. `/dev/sda1`, `/dev/mmcblk0p1`) |
| `mount_point` | `/mnt/udpfs` | Where to mount the storage device |
| `fsroot` | *(empty)* | Directory to serve; defaults to `mount_point` when `device` is set |
| `port` | `62966` | UDP port for UDPFS discovery and data |
| `read_only` | `1` | Serve in read-only mode (recommended) |
| `verbose` | `0` | Enable verbose syslog output |

### Enabling UDPFS mode

```sh
# Enable the service
uci set udpfsd.main.enabled=1

# Set the storage device (USB example)
uci set udpfsd.main.device=/dev/sda1

# Optionally set a sub-directory as the serve root
uci set udpfsd.main.fsroot=/mnt/udpfs/PS2

uci commit udpfsd
service udpfsd start
```

### Switching between modes

Only one serving mode should be active at a time to avoid port conflicts and unnecessary resource use.

```sh
# Disable SMB (if using Samba)
service samba stop
uci set samba.@samba[0].enabled=0
uci commit samba

# Enable UDPFS
uci set udpfsd.main.enabled=1
uci commit udpfsd
service udpfsd start
```

---

## Storage Setup

### USB storage

The init script will mount the configured block device before starting udpfsd.

```sh
# Example: USB drive on /dev/sda1
uci set udpfsd.main.device=/dev/sda1
uci set udpfsd.main.mount_point=/mnt/udpfs
uci commit udpfsd
```

### microSD storage

```sh
# Example: microSD on /dev/mmcblk0p1
uci set udpfsd.main.device=/dev/mmcblk0p1
uci commit udpfsd
```

If the storage is already mounted by another service (e.g. `block-mount` automount), leave `device` empty and set `fsroot` directly:

```sh
uci set udpfsd.main.device=''
uci set udpfsd.main.fsroot=/mnt/sda1/PS2
uci commit udpfsd
```

---

## PS2 Client Setup

### Neutrino

Neutrino discovers the UDPFS server automatically via broadcast on port **62966**.  No IP address configuration is needed on the PS2 side as long as the server is reachable on the same network.

1. Place your PS2 game ISOs (or CSO/ZSO files) in the configured `fsroot` directory.
2. Enable udpfsd on PS2-EtherDrive (see above).
3. Boot Neutrino on your PS2 — it will discover the server and list available games.

### NHDDL

NHDDL (Neutrino HDD Loader) uses the same UDPFS protocol.  Configure the server IP in NHDDL settings to point to your PS2-EtherDrive device's IP address.

---

## Troubleshooting

**Service does not start:**
- Check that the storage device exists: `ls -l /dev/sda1` or `ls -l /dev/mmcblk0p1`.
- Check syslog for errors: `logread | grep udpfsd`.
- Ensure `enabled` is set to `1` in `/etc/config/udpfsd`.

**PS2 cannot connect:**
- Confirm the server is running: `ps | grep udpfsd`.
- Confirm UDP port 62966 is not blocked by a firewall rule.
- Try running with `verbose` enabled and check `logread` output.

**Games not visible:**
- Verify the `fsroot` path exists and contains `.iso`, `.cso`, or `.zso` files.
- Check file permissions: the `udpfsd` process must be able to read the files.

**Wrong protocol version (Neutrino log shows "Wrong packet type 2"):**
- Upgrade to Neutrino v1.8.0-13 or later; older versions use an incompatible UDPFS protocol.

---

## License and Attribution

udpfsd is an independent third-party project.  PS2-EtherDrive does not modify or relicense it.

- **Author:** Ivan V (pcm720)
- **Source:** <https://github.com/pcm720/udpfsd>
- **License:** BSD-3-Clause
- **Full license text:** [`References/Third-Party-Licenses/udpfsd-BSD-3-Clause.md`](../References/Third-Party-Licenses/udpfsd-BSD-3-Clause.md)

The UDPFS protocol was originally developed by Rick Gaiser for [Neutrino](https://github.com/rickgaiser/neutrino).
