# Software Overview

## Introduction

PS2-EtherDrive is intended to use a customized embedded Linux/OpenWrt software environment to provide networking, storage, and management functionality inside the PlayStation 2 Slim.

The software platform is expected to evolve significantly during development as hardware testing and compatibility validation progresses.

---

# Firmware Goals

The firmware environment is intended to provide:

- Reliable network services
- SMB support
- UDPBD support
- WiFi bridge functionality
- Internal storage management
- Recovery capabilities
- Simple configuration workflows

---

# OpenWrt Foundation

## OpenWrt

The project is currently planned around OpenWrt-based firmware.

OpenWrt was selected because it provides:

- Strong embedded router support
- Lightweight operation
- Flexible networking configuration
- USB storage support
- Existing package ecosystem
- MIPS platform compatibility

The exact OpenWrt version and package configuration may change throughout development.

---

# Planned Network Features

## SMB Support

One of the primary goals of PS2-EtherDrive is improving SMB loading workflows for the PlayStation 2.

Planned SMB functionality includes:

- SMB1 compatibility
- Internal storage sharing
- Optimized PS2 compatibility settings
- Lightweight memory usage

---

## UDPBD Support

The project is also intended to support UDPBD-style loading methods.

Potential goals include:

- Improved loading performance
- Reduced overhead compared to SMB
- Compatibility testing with OPL and related software

UDPBD support remains an active research area during development.

---

## WiFi Bridge Functionality

Planned WiFi features include:

- WiFi client bridge support
- Wireless connection to existing home networks
- Ethernet bridging back to the PS2
- Simplified network configuration

The intent is to reduce reliance on external networking hardware.

---

# Storage Management

## Internal Storage

Planned storage support includes:

- USB storage devices
- USB SSDs
- microSD storage

Firmware responsibilities may include:

- Automatic storage mounting
- File sharing configuration
- Filesystem handling
- Recovery support

---

# Recovery and Maintenance

## Recovery Features

Firmware recovery is considered an important design requirement.

Planned recovery considerations include:

- Firmware reflashing procedures
- Boot recovery methods
- Safe firmware update workflow
- Factory reset capability

---

## Firmware Updates

The project is expected to support future firmware updates.

Possible update methods may include:

- Web-based updates
- Recovery mode flashing
- Manual image updates

The final workflow has not yet been determined.

---

# Configuration Interface

A lightweight management interface may eventually be included for:

- Network configuration
- WiFi setup
- Firmware management
- Storage configuration
- Status monitoring

The exact interface design remains undecided.

---

# Performance Goals

Key software goals currently include:

- Stable operation
- Low memory usage
- Fast boot times
- Reliable network performance
- Minimal impact on PS2 compatibility

---

# Current Software Status

Current Status:
- Research and Planning

Current Firmware Status:
- Pre-Prototype

Current OpenWrt Status:
- Package and compatibility evaluation

---

# Long-Term Software Goals

Future software possibilities may include:

- Simplified setup workflows
- Advanced network management
- Automatic PS2 configuration helpers
- Expanded storage management
- Remote firmware management
- Improved compatibility tools

