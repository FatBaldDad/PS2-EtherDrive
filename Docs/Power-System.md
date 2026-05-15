# Power System

## Introduction

PS2-EtherDrive is intended to operate entirely from the internal power system of the PlayStation 2 Slim.

The project requires stable and efficient power conversion to support:

- Embedded router hardware
- Internal storage devices
- Ethernet circuitry
- USB devices
- Future expansion capability

Power efficiency and thermal performance are major design priorities.

---

# Power Source

## PlayStation 2 Internal Power

The current design direction is to source power directly from the PS2 internal power rails.

Depending on console revision, this may involve:

- 8.5V input rails
- Internal DC rails
- Existing filtering networks

The exact implementation may vary between console revisions.

---

# Power Regulation

## DC-DC Conversion

PS2-EtherDrive is expected to use onboard DC-DC conversion for generating stable low-voltage rails.

Planned regulated rails may include:

- 5V
- 3.3V

The router platform and storage devices require stable low-noise power delivery.

---

# HLK-7628N Power Requirements

The HLK-7628N module primarily operates from a 3.3V rail.

Important design considerations include:

- Startup current
- WiFi power spikes
- Thermal dissipation
- Stable boot behavior

The final regulator design must support both steady-state and transient loads.

---

# USB Power

## Internal Storage Devices

The project is intended to support internally connected USB devices such as:

- USB flash drives
- USB SSDs
- USB storage adapters

Power requirements vary significantly depending on the storage device used.

Areas currently being evaluated include:

- USB startup current
- Inrush current behavior
- Brownout prevention
- Voltage stability

---

# Thermal Considerations

## Heat Management

Power conversion efficiency is important because the PS2 Slim has limited internal airflow and thermal headroom.

Planned thermal strategies may include:

- High-efficiency buck converters
- RF shield thermal coupling
- Copper thermal transfer plates
- Controlled component placement

The goal is minimizing additional heat inside the console.

---

# Electrical Noise Considerations

## Noise Sensitivity

The PS2 contains several sensitive analog and high-speed digital systems.

Power system design must consider:

- Ripple suppression
- Grounding strategy
- Switching noise
- Ethernet signal integrity
- USB stability

Careful PCB layout and filtering are expected to be critical.

---

# Protection Features

Possible future protection features may include:

- Overcurrent protection
- Reverse polarity protection
- Brownout handling
- Power sequencing
- USB current limiting

Final protection methods are still under evaluation.

---

# Power Architecture Concept

Current conceptual power flow:

```text
PS2 Internal Power
        ↓
DC-DC Regulation
        ↓
PS2-EtherDrive Power Rails
        ↓
Router / Storage / Ethernet Hardware
```

The final implementation may evolve significantly during development.

---

# Future Expansion Considerations

Possible future hardware additions may include:

- Additional USB devices
- Integrated displays
- Bluetooth hardware
- Expanded storage capability

The power system is being designed with future scalability in mind where possible.

---

# Current Status

Current Status:
- Early Power Architecture Planning

Current Regulator Status:
- Evaluation and testing phase

Current Thermal Status:
- Integration research phase

---

# Long-Term Goals

The long-term goal is a stable, efficient, and thermally manageable internal power solution suitable for long-term use inside the PlayStation 2 Slim platform.

