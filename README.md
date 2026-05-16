<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="Images/Logos/FBD-PS2-EtherDrive-Logo-Dark.png">
    <source media="(prefers-color-scheme: light)" srcset="Images/Logos/FBD-PS2-EtherDrive-Logo.png">
    <img src="Images/Logos/FBD-PS2-EtherDrive-Logo.png" alt="FBD PS2-EtherDrive Logo" width="250">
  </picture>
</p>

# PS2-EtherDrive

PS2-EtherDrive is a custom internal networking and storage platform for the PlayStation 2 Slim.

The goal of the project is to modernize PS2 network functionality by integrating a compact OpenWrt-based router and storage platform directly inside the console while still retaining physical Ethernet support through the original network port.

This project is primarily focused on later PS2 Slim models where native internal HDD-style solutions are not available.

## Project Goals

- Add internal network storage functionality to compatible PS2 Slim consoles
- Support SMB and UDPBD/UDPFS-style network loading workflows
- Provide WiFi bridge functionality
- Retain use of the original PS2 Ethernet port
- Support internal USB or microSD-based storage options
- Keep installation as clean and OEM-like as possible
- Build a documented and repeatable kit-style solution

## Current Status

This project is currently in early development.

Hardware, firmware, installation methods, and compatibility information are subject to change as prototypes are designed, tested, and revised.

## Planned Features

- HLK-7628N based internal router platform
- OpenWrt-based firmware
- SMB support
- UDPBD/UDPFS support
- WiFi client bridge support
- Internal storage support
- PS2 Ethernet passthrough design
- Power regulation from the PS2 internal power system
- Installation documentation
- Recovery and firmware update notes
- Compatibility testing

## Repository Purpose

This repository is used for:

- Project documentation
- Development notes
- Hardware planning
- Firmware notes
- Test results
- Installation research
- Community feedback
- Issue tracking
- Future firmware releases

## Important Notice

Gerber files, production hardware files, and firmware source files are not currently included in this repository.

This project is intended to become a future FBD kit/product. Public documentation will be expanded as the project matures, but manufacturing files may remain private until design and production costs have been recovered.

## Documentation

- [Docs](Docs/README.md)
- [Hardware](Hardware/README.md)
- [Firmware](Firmware/README.md)
- [References](References/README.md)
- [Test Data](Test-Data/README.md)
- [Manufacturing](Manufacturing/README.md)

## Compatibility

Initial development is focused on PlayStation 2 Slim consoles, especially later Slim models where traditional internal HDD-style solutions are not practical.

Compatibility will be updated as testing progresses.

## Support and Feedback

Use GitHub Issues for:

- Bug reports
- Compatibility notes
- Installation feedback
- Documentation corrections
- Feature requests

Use GitHub Discussions for:

- General project discussion
- Ideas
- Community testing
- Installation questions

## Project Status

Experimental / In Development

## Created By

Fat Bald Dad / FBD Retro Game

## AI Assistance and Attribution Disclaimer

This project uses AI tools to help with writing, organization, documentation, research, code examples, and design planning. While I review and edit the information, some details may still be incorrect, incomplete, or outdated.

Not all ideas, code, research, methods, or technical information in this project should be credited only to me. This project may reference, build on, or be inspired by community knowledge, open-source projects, datasheets, forum posts, Discord discussions, manufacturer documentation, and the work of other developers and modders.

Credit will be given whenever a source is known. If something is missing credit or needs correction, please let me know so I can update the documentation.
