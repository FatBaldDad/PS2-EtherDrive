# EtherDrive HLK-7628N KiCad Project (Starter Structure)

This directory is the organized hardware project scaffold for the PS2 EtherDrive HLK-7628N PCB design.

## Design Targets

- KiCad 9 compatible workflow
- 2-layer board
- 0.8mm PCB target (verification required with fab stack-up)
- OSH Park compatible fabrication outputs
- Digi-Key based BOM workflow
- Hand-assembly friendly placement and package choices
- 0603 passives by default unless otherwise required

## Structure Overview

- `Project/` — KiCad project placeholders and setup notes
- `Libraries/Symbols/` — custom symbol library files
- `Libraries/Footprints/` — custom footprint library folders (`*.pretty`)
- `Fabrication/` — manufacturing export organization
- `BOM/` — template and Digi-Key starter BOM
- `Documentation/` — planning, bring-up, and verification docs

## Important

Do not generate or commit guessed physical dimensions, courtyard definitions, or footprint geometry.
Use TODO placeholders and verification notes until datasheet dimensions are confirmed.
