# FAQ

## What is PS2-EtherDrive?

PS2-EtherDrive is a custom internal networking and storage platform for the PlayStation 2 Slim.

The project is intended to integrate embedded networking hardware directly inside the console to support modern network loading workflows and internal storage solutions.

---

# What does PS2-EtherDrive do?

The project is being designed to provide:

- Internal networking functionality
- SMB support
- UDPBD support
- WiFi bridge capability
- Internal storage support
- Ethernet passthrough functionality

The exact feature set may evolve during development.

---

# Which consoles are currently targeted?

Initial development is focused primarily on later PlayStation 2 Slim models, especially DECKARD-based systems.

These systems are attractive targets because they lack traditional internal HDD support.

---

# Does this replace the original Ethernet port?

No.

One of the major project goals is retaining use of the original PS2 Ethernet jack while integrating the internal networking hardware.

The current design direction uses Ethernet passthrough concepts and transformer relocation techniques.

---

# Is this an HDD replacement?

Not exactly.

PS2-EtherDrive is intended more as an internal network and storage platform than a direct HDD replacement.

The project focuses on:

- Network loading
- Internal storage
- Embedded routing
- WiFi bridging

rather than native PS2 HDD functionality.

---

# What storage methods are planned?

Current storage concepts include:

- USB flash drives
- USB SSDs
- microSD storage

Final supported storage methods may evolve during development.

---

# Will this support SMB?

That is one of the primary goals of the project.

SMB support is expected to be a major feature for compatibility with existing PS2 network loading workflows.

---

# Will this support UDPBD?

UDPBD support is currently under active evaluation and is planned as a major area of testing.

Compatibility and performance validation are still in progress.

---

# Will this support WiFi?

Yes.

One of the major goals of the project is allowing the PS2 to connect through an internal WiFi bridge without requiring external networking hardware.

---

# Will this be open source?

Not fully, at least initially.

This repository is intended to serve as a public documentation, testing, and support hub.

However:

- Gerber files
- Production manufacturing files
- Firmware source code

may remain private until development and manufacturing costs have been recovered.

---

# Will firmware files be released?

Firmware binaries and updates may eventually be released publicly.

The exact release model has not yet been finalized.

---

# Is this project currently available?

No.

PS2-EtherDrive is currently in early development and prototype planning stages.

No production hardware currently exists.

---

# Will installation require soldering?

Early prototype installations are expected to require soldering and internal console modification.

One of the long-term project goals is reducing installation complexity wherever possible.

---

# Will this work in all PS2 Slim revisions?

Compatibility is still under evaluation.

Different PS2 Slim revisions may require different installation methods or hardware revisions.

Compatibility information will expand as testing progresses.

---

# Why use an internal solution instead of external hardware?

The project focuses heavily on:

- Cleaner installations
- Reduced external clutter
- OEM-style integration
- Simplified networking setups
- Internal storage integration

The goal is making the networking solution feel like part of the console itself.

---

# What firmware is being used?

The project is currently planned around an OpenWrt-based firmware platform.

The final software architecture may evolve during development.

---

# Is this project related to Sony or PlayStation?

No.

PS2-EtherDrive is an independent community-driven hardware project and is not affiliated with Sony.

---

# Where can I report issues or provide feedback?

GitHub Issues and Discussions are intended to be the primary locations for:

- Bug reports
- Compatibility notes
- Suggestions
- Community feedback
- Development discussion

---

# Current Status

Current Status:
- Early Development / Prototype Planning

