# Hardware Overview

## Introduction

PS2-EtherDrive is centered around integrating compact embedded networking hardware directly inside supported PlayStation 2 Slim consoles.

The hardware platform is designed to provide:

- Internal networking functionality
- Internal storage support
- Ethernet passthrough capability
- WiFi bridge functionality
- OEM-style installation integration

---

# Core Hardware Platform

## HLK-7628N

The primary networking platform currently being evaluated is the HLK-7628N module.

This module was selected because it provides:

- Compact size
- OpenWrt support
- Integrated Ethernet functionality
- USB support
- Low power consumption
- Suitable thermal characteristics for internal installation

The HLK-7628N serves as the central networking and storage controller for the project.

---

# Planned Hardware Features

## Ethernet Passthrough

One of the primary design goals is retaining use of the original PS2 Ethernet port.

The current concept involves:

- Relocating Ethernet transformer components
- Routing Ethernet through the internal router platform
- Allowing both wired and wireless networking functionality

The goal is for the original PS2 Ethernet jack to continue functioning externally while also integrating with the internal networking hardware.

---

## Internal Storage Support

Planned storage options currently include:

- Internal USB flash storage
- Internal USB SSD support
- Internal microSD storage

Storage methods may evolve during development depending on:

- Space limitations
- Thermal performance
- Firmware support
- Power consumption

---

## Power Regulation

The project is intended to draw power directly from the PS2 internal power system.

Planned features include:

- Internal DC-DC regulation
- Stable 3.3V generation
- USB power regulation
- Low-noise operation

Power efficiency and thermal performance are major design priorities.

---

# PCB Development

## Custom PCB Design

PS2-EtherDrive is expected to use custom PCBs designed specifically for PS2 Slim integration.

Planned PCB functions include:

- HLK-7628N integration
- Power regulation
- Ethernet routing
- Storage connectivity
- Internal mounting support

---

## Flex PCB Integration

Flex PCBs may be used for:

- Ethernet relocation
- Tight internal routing
- Reduced installation complexity
- Cleaner mechanical integration

---

# Mechanical Integration

## OEM-Style Fitment

A major project goal is minimizing external modification and maintaining a clean internal appearance.

Areas being evaluated include:

- RF shield integration
- Thermal transfer to shielding
- Existing internal free space
- Cable routing
- Port accessibility

---

# Thermal Design

Thermal management is a critical area of development.

Planned thermal considerations include:

- RF shield heat transfer
- Copper thermal plates
- Passive cooling strategies
- Airflow preservation
- Heat isolation from sensitive PS2 components

---

# Target Consoles

Initial development is primarily focused on later PS2 Slim models.

These systems are attractive targets because they lack traditional internal HDD expansion capabilities while still supporting network-based loading methods.

---

# Current Hardware Status

Current Revision:
- Pre-Prototype

Current PCB Status:
- Early schematic planning

Current Mechanical Status:
- Fitment and integration research

---

# Future Hardware Possibilities

Possible future directions may include:

- Simplified installation kits
- Combined mod integration
- Improved storage options
- Integrated user interface features
- Expanded firmware management hardware
- Additional expansion interfaces

