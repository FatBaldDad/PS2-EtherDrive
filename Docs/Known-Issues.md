# Known Issues

## Introduction

PS2-EtherDrive is currently in early development.

At this stage, many aspects of the hardware, firmware, installation methods, and compatibility behavior are still experimental and subject to change.

This document is intended to track known limitations, experimental behaviors, unresolved issues, and areas still under active research.

---

# Current Development Status

Current project status:

- Research phase
- Architecture planning
- Prototype development planning
- Early hardware evaluation

No production hardware currently exists.

---

# Hardware Limitations

## Prototype Hardware

Current hardware concepts are still evolving.

Areas still under active development include:

- Ethernet passthrough implementation
- Power regulation
- Internal fitment
- Thermal management
- Storage integration
- Flex PCB routing

PCB layouts and mechanical placement may change significantly during development.

---

# Firmware Limitations

## OpenWrt Development

Firmware architecture is still under evaluation.

Current unknowns include:

- Final OpenWrt version
- Package selection
- SMB optimization
- UDPBD integration
- Recovery workflow
- Configuration interface design

Firmware behavior and feature support may change frequently during development.

---

# Compatibility Unknowns

## Console Compatibility

Compatibility between different PS2 Slim revisions has not yet been fully validated.

Areas requiring testing include:

- Internal space limitations
- Power stability
- Thermal interaction
- Ethernet behavior
- Storage compatibility

Support may vary significantly between motherboard revisions.

---

# Storage Compatibility

## USB Devices

Internal USB storage behavior is still under investigation.

Potential concerns include:

- Startup current spikes
- Brownout behavior
- Storage mounting reliability
- Filesystem compatibility
- Long-term stability

Some storage devices may not function reliably.

---

# Thermal Concerns

## Internal Heat Management

The PlayStation 2 Slim has limited internal airflow and thermal headroom.

Potential concerns include:

- Additional internal heat generation
- RF shield heat saturation
- WiFi thermal load
- Storage device heat generation

Thermal validation has not yet been completed.

---

# WiFi Considerations

## Wireless Stability

Wireless networking introduces several variables including:

- Router compatibility
- Signal strength
- Interference
- Latency
- Reconnection behavior

Performance may vary substantially between environments.

---

# Ethernet Passthrough Complexity

## Transformer Relocation

The Ethernet passthrough concept is one of the more experimental areas of the project.

Areas requiring validation include:

- Signal integrity
- Trace routing
- Transformer placement
- Long-term reliability
- EMI behavior

This portion of the design may evolve significantly during development.

---

# Installation Complexity

## Prototype Installation

Early installations are expected to require:

- Soldering
- Internal modification
- RF shield modification
- Manual routing
- Prototype firmware flashing

Installation complexity is expected to improve over time.

---

# Documentation Status

## Early Documentation

Some documentation currently describes:

- Planned features
- Experimental concepts
- Proposed architecture
- Development goals

Final hardware and firmware behavior may differ from current documentation.

---

# Future Tracking

This document will eventually track:

- Hardware revision issues
- Firmware bugs
- Compatibility limitations
- Storage compatibility notes
- Known installation challenges
- Thermal observations

---

# Current Status

Current Status:
- Early Development

Current Hardware Status:
- Pre-Prototype

Current Firmware Status:
- Evaluation and planning stage

