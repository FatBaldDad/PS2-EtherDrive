# Project Overview

## What is PS2-EtherDrive?

PS2-EtherDrive is a custom internal networking and storage platform designed for the PlayStation 2 Slim.

The project is centered around integrating a compact OpenWrt-capable router module directly inside the PS2 while still retaining functionality of the original Ethernet port.

The long-term goal is to create a clean, internally mounted networking solution that improves network loading workflows and expands storage possibilities for later PS2 Slim models.

---

# Primary Goals

## Internal Networking Platform

PS2-EtherDrive is intended to provide a dedicated internal networking platform for the PS2 using compact embedded router hardware.

Planned capabilities include:

- SMB support
- UDPBD support
- WiFi client bridge functionality
- Internal network storage support
- Simplified network configuration

---

# Why This Project Exists

Later PS2 Slim models do not support traditional internal HDD solutions like the earlier PS2 Fat models.

Network loading solutions exist, but they typically require:

- External routers
- External storage devices
- Additional power supplies
- Extra wiring and adapters

PS2-EtherDrive aims to integrate these functions directly into the console itself while maintaining a clean installation and OEM-style appearance.

---

# Design Philosophy

## Internal Integration

The project focuses heavily on internal installation and minimizing external clutter.

Goals include:

- Using the original PS2 Ethernet port
- Internal mounting of networking hardware
- Internal storage support
- Minimal visible modification
- OEM-style fitment where possible

---

## Modular Development

The project is being developed in stages:

1. Hardware research
2. Prototype PCB development
3. Firmware customization
4. Internal fitment testing
5. Compatibility validation
6. Production refinement

---

## Community-Focused Documentation

This repository serves as:

- A development journal
- Technical documentation hub
- Community support location
- Compatibility tracking resource
- Firmware release location

The intention is to document the project thoroughly as development progresses.

---

# Target Hardware

Initial development is focused primarily on:

- Later PS2 Slim models
- DECKARD-based systems
- Consoles without internal HDD capability

Compatibility testing will expand as development progresses.

---

# Planned Features

## Networking
- Ethernet passthrough support
- WiFi bridge support
- SMB support
- UDPBD support

## Storage
- Internal USB storage support
- Internal microSD support
- Network storage integration

## Firmware
- OpenWrt-based firmware
- Recovery support
- Firmware update support
- Configuration interface

## Hardware
- Custom PCB integration
- Internal power regulation
- Thermal integration with RF shielding
- Internal flex PCB solutions

---

# Current Status

Current Phase:
- Research and Prototype Planning

Current Hardware Status:
- Pre-Prototype

Current Firmware Status:
- Planning and Research

---

# Long-Term Vision

The long-term vision for PS2-EtherDrive is to create a polished and repeatable internal networking platform that can be installed cleanly into supported PS2 Slim consoles.

The project may eventually become part of future FBD hardware kits and custom console builds.
