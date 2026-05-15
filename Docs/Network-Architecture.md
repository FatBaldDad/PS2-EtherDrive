# Network Architecture

## Introduction

PS2-EtherDrive is designed to function as an internal networking platform inside the PlayStation 2 Slim.

The project combines:

- Internal networking hardware
- Internal storage support
- Ethernet passthrough functionality
- WiFi bridge capability
- Embedded Linux/OpenWrt firmware

The overall goal is to simplify and modernize PS2 network loading workflows while keeping the installation internal and clean.

---

# Core Network Design

## Internal Router Platform

At the center of the system is an embedded OpenWrt-capable router module.

The router platform is responsible for:

- Network management
- Storage sharing
- SMB services
- UDPBD services
- WiFi connectivity
- Ethernet bridging

---

# Ethernet Passthrough Concept

## Original PS2 Ethernet Port

One of the primary design goals is retaining use of the original PS2 Ethernet jack.

The planned design routes Ethernet through the internal networking platform while still exposing the original external port.

Conceptually:

```text
External Ethernet Port
        ↓
Internal Ethernet Transformer
        ↓
PS2-EtherDrive Router Platform
        ↓
PS2 Ethernet Interface
```

This architecture is intended to support:

- Normal wired Ethernet operation
- WiFi bridge functionality
- Internal routing capability

---

# WiFi Bridge Functionality

## Wireless Networking

The internal router platform is intended to connect to an existing wireless network as a client bridge.

Planned workflow:

```text
Home WiFi Network
        ↓
PS2-EtherDrive Internal Router
        ↓
Internal Ethernet Connection
        ↓
PlayStation 2
```

This allows the PS2 to operate over WiFi without requiring external bridge hardware.

---

# Storage Architecture

## Internal Storage

The current design direction includes support for internal storage devices connected directly to the embedded router platform.

Possible storage devices include:

- USB flash drives
- USB SSDs
- microSD storage

---

## SMB Workflow

Planned SMB workflow:

```text
Internal Storage
        ↓
OpenWrt SMB Service
        ↓
PS2 Network Connection
        ↓
OPL SMB Loading
```

The intention is for the PS2 to access internally mounted storage over its standard network loading methods.

---

## UDPBD Workflow

Potential UDPBD workflow:

```text
Internal Storage
        ↓
UDPBD Service
        ↓
Internal Network Bridge
        ↓
PS2 UDPBD Client
```

UDPBD support is currently under active evaluation.

---

# Internal Network Topology

The current conceptual topology is:

```text
             WiFi Network
                   ↓
        PS2-EtherDrive Router
             ↙         ↘
     Internal Storage   PS2 Ethernet
```

The router platform acts as the center point for:

- Wireless networking
- Storage management
- PS2 connectivity

---

# Firmware Services

Planned network services include:

- SMB server
- UDPBD server
- DHCP client
- WiFi bridge
- Filesystem management
- Network configuration tools

---

# Performance Considerations

Key areas currently being evaluated include:

- SMB transfer speeds
- UDPBD performance
- WiFi latency
- Internal USB bandwidth
- Memory limitations
- CPU utilization

Performance optimization is considered a major development goal.

---

# Reliability Goals

Planned reliability goals include:

- Stable boot behavior
- Reliable WiFi reconnection
- Stable storage mounting
- Reliable PS2 network detection
- Safe firmware recovery

---

# Future Network Possibilities

Possible future features may include:

- Improved configuration interface
- Advanced storage management
- Multiple service profiles
- Expanded protocol support
- Enhanced recovery features

---

# Current Status

Current Status:
- Architecture Planning

Current Firmware Status:
- Early Evaluation

Current Hardware Status:
- Pre-Prototype
