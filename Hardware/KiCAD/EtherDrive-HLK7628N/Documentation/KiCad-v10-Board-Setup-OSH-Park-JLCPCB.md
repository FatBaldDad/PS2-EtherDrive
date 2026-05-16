# KiCad v10 Board Setup Reference (OSH Park + JLCPCB)

This is a **reference-only** guide for the EtherDrive HLK-7628N PCB project.

- Project assumptions: KiCad v10, 2-layer PCB, FR4, 1 oz copper, mostly 0603 passives, hand-assembly friendly.
- Primary fab target: OSH Park prototype service.
- Alternate fab target: JLCPCB.
- Do **not** overwrite actual KiCad project settings blindly; review and apply intentionally.

## Recommended Settings Table

Use these as safe starting values in KiCad v10 Board Setup.

| Setting | OSH Park Safe Profile | JLCPCB Safe Profile |
|---|---:|---:|
| Copper layers | 2 | 2 |
| Material | FR4 | FR4 |
| Copper weight | 1 oz | 1 oz (unless order says otherwise) |
| Minimum clearance | 0.20 mm | 0.20 mm |
| Minimum track width | 0.20 mm | 0.20 mm |
| Minimum via diameter | 0.60 mm | 0.60 mm |
| Minimum via drill | 0.30 mm | 0.30 mm |
| Minimum annular width | 0.15 mm | 0.15 mm |
| Copper to hole clearance | 0.25 mm | 0.25 mm |
| Copper to edge clearance | 0.50 mm | 0.50 mm |
| Minimum drill size | 0.30 mm | 0.30 mm |
| Hole-to-hole clearance | 0.25 mm | 0.25 mm |
| Silkscreen min text height | 1.00 mm | 1.00 mm |
| Silkscreen min text thickness | 0.15 mm | 0.15 mm |
| Surface finish | ENIG | HASL or ENIG (match order) |
| Solder mask color | Purple | Match order color |

## Manufacturer Minimum Notes

- **OSH Park 2-layer official minimums:** 6 mil / 0.1524 mm trace+space, 10 mil / 0.254 mm drill, 5 mil / 0.127 mm annular ring.
- **JLCPCB capabilities vary** by process/options and can change. Always verify against the JLCPCB capabilities page and run their DFM checker.
- The profile values above are intentionally conservative and should generally pass both fabs.

## KiCad v10 Board Setup Walkthrough

Follow the tree in this order.

### 1) Board Stackup

#### 1.1 Board Editor Layers
1. Set copper layers to **2**.
2. Keep needed technical layers enabled (Edge.Cuts, silkscreen, mask, fab).
3. Disable unused user layers if they add clutter.

#### 1.2 Physical Stackup
1. Use **FR4** dielectric.
2. Set outer copper to **1 oz**.
3. Keep standard prototype-friendly thickness unless mechanical constraints require change.
4. If impedance becomes strict and hard to hit, evaluate 4-layer stackup.

#### 1.3 Board Finish
1. **OSH Park profile:** ENIG.
2. **JLCPCB profile:** set to the finish you will order (HASL or ENIG).
3. Keep finish aligned between Board Setup and fab order notes.

#### 1.4 Solder Mask / Paste
1. Keep mask expansion/modifiers conservative.
2. Avoid ultra-thin solder mask slivers around dense pads.
3. Prefer readable silkscreen and hand-assembly spacing over aggressive density.

#### 1.5 Zone Hatch Offsets
1. Keep default/simple solid pours unless there is a thermal or EMI reason to hatch.
2. Ensure zone clearances still obey minimum 0.20 mm rules.
3. Keep copper away from board edge with **0.50 mm** clearance.

### 2) Text & Graphics

#### 2.1 Defaults
1. Set silkscreen defaults to **1.00 mm height** and **0.15 mm thickness** minimum.
2. Use consistent readable reference/value style.
3. Avoid tiny labels that may disappear in fabrication.

#### 2.2 Formatting
1. Keep text upright where possible for easier assembly/debug.
2. Use line widths that print cleanly on both fabs.
3. Keep polarity and pin-1 marks visually obvious.

#### 2.3 Text Variables
1. Use text variables for revision/date fields where useful.
2. Keep variable-based text out of cramped high-density areas.
3. Confirm variable expansion does not violate silkscreen limits.

### 3) Design Rules

#### 3.1 Constraints
Set baseline constraints:
- Minimum clearance: **0.20 mm**
- Minimum track width: **0.20 mm**
- Minimum via diameter: **0.60 mm**
- Minimum via drill: **0.30 mm**
- Minimum annular width: **0.15 mm**
- Copper to hole clearance: **0.25 mm**
- Copper to edge clearance: **0.50 mm**
- Minimum drill size: **0.30 mm**
- Hole-to-hole clearance: **0.25 mm**

#### 3.2 Pre-defined Sizes
1. Add standard track sizes (example: 0.20, 0.25, 0.30, 0.50, 0.80 mm).
2. Add via sets consistent with the baseline rules.
3. Keep a dedicated wider power preset for VIN/5V/3V3 trunks.

#### 3.3 Teardrops
1. Optional for robustness on hand-soldered prototypes.
2. If enabled, ensure generated geometry does not break clearances.
3. Re-run DRC after generation.

#### 3.4 Length-tuning Patterns
1. Enable only where real tuning is required.
2. Avoid decorative/unused tuning shapes.
3. Keep tuning compact and away from switcher noise areas.

#### 3.5 Tuning Profiles
1. Create profiles for Ethernet pair matching and USB pair matching.
2. Keep practical tolerances for a short-board embedded design.
3. Do not over-constrain if route quality degrades.

#### 3.6 Net Classes
Create at least these classes:
- **Default:** baseline 0.20/0.20 rules.
- **Power:** wider traces and optionally larger vias.
- **USB_Diff:** paired routing intent and tighter coupling.
- **ETH_Diff:** paired routing intent, minimize discontinuities.

#### 3.7 Component Classes
1. Group fine-pitch/high-risk parts separately (module pins, connectors, switcher).
2. Use class checks to catch courtyard/silkscreen congestion.
3. Keep hand-assembly access in mind.

#### 3.8 Custom Rules
1. Add custom rules only where baseline constraints are not enough.
2. Typical uses: stricter edge clearance for selected nets, local width overrides.
3. Keep rule names explicit and reviewable.

#### 3.9 Violation Severity
1. Set manufacturing-critical issues to Error.
2. Keep style/readability issues as Warning unless they cause fab risk.
3. Resolve Errors before Gerber export.

### 4) Board Data

#### 4.1 Embedded Files
1. Embed only what is required for long-term portability.
2. Avoid large unnecessary binary attachments.
3. Keep external source files version-controlled in repo folders.

## OSH Park Notes

- Target profile: 2-layer FR4, 1 oz copper, ENIG, purple mask.
- No edge connector unless explicitly required.
- Avoid plated board edge unless required.
- Keep conservative copper-to-edge clearance (**0.50 mm** used here).
- Validate against OSH Park upload checks before ordering.

## JLCPCB Notes

- Target profile: 2-layer FR4, 1 oz copper unless changed at order time.
- Surface finish may be HASL or ENIG; match Board Setup to your chosen option.
- Solder mask color is order-dependent.
- Run JLCPCB DFM checker before ordering.
- Watch silkscreen readability and soldermask slivers closely.

## EtherDrive-Specific Notes

- Use wider traces for power rails and main distribution trunks.
- Keep USB D+ / D- short and routed as a pair.
- Keep Ethernet differential pairs short and routed as pairs.
- Keep magnetics physically close to Ethernet connectors/interfaces.
- Keep switching regulator loop compact and tight.
- Add generous ground stitching vias where possible.
- Do not place copper too close to board edges.
- Avoid tiny silkscreen labels that won’t print clearly.
- Add test points for: **8.5V, 5V, 3.3V, GND, UART TX, UART RX, RESET, BOOT**.

## Ethernet Differential Pair Notes

- Route TX/RX pairs as paired nets with consistent spacing.
- Minimize vias, stubs, and abrupt width changes.
- Keep return path continuity over ground.
- Keep switcher/high-di/dt routes away from Ethernet pair corridor.

## USB Differential Pair Notes

- Route D+ and D- together, short, and with consistent geometry.
- Avoid unnecessary vias and layer changes.
- Keep pair away from noisy power switching areas.
- Maintain clean connector entry/exit geometry.

## Power Trace Notes

- Use wider widths for 8.5V, 5V, and 3.3V trunks.
- Narrow only near pins when needed, then widen back quickly.
- Keep regulator input/output loops short.
- Prefer solid ground reference and frequent stitching.

## When to Switch from 2-Layer to 4-Layer

Consider 4-layer if one or more of these become persistent blockers:
- USB/Ethernet pair routing quality cannot be maintained on 2-layer.
- Return-path continuity is repeatedly broken by routing constraints.
- Power noise/switcher coupling is difficult to control.
- DRC passes, but EMI/noise margin is weak in review or testing.
- Component density forces repeated silkscreen/mask/clearance compromises.

## Final Pre-Order Checklist

- [ ] ERC passes
- [ ] DRC passes using OSH Park settings
- [ ] DRC passes using JLCPCB settings
- [ ] Board outline is closed on Edge.Cuts
- [ ] Mounting holes are correct
- [ ] Gerbers generated
- [ ] Drill files generated
- [ ] 3D render checked
- [ ] BOM reviewed
- [ ] Digi-Key parts reviewed
- [ ] USB and Ethernet routing visually inspected
- [ ] Power nets visually inspected
