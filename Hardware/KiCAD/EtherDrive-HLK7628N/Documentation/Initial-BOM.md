# Initial BOM (Digi-Key Starter)

> Starter sourcing list for planning and early schematic capture. Any part marked TODO-VERIFY must be confirmed against electrical and package requirements before release.

## Constraints

- Preferred supplier: Digi-Key
- Default passives: 0603
- KiCad 9 symbol/footprint assignments only after datasheet verification

## Starter Entries

| Section | Qty | Item | Manufacturer | MPN | Digi-Key PN | Package | Status | Notes |
|---|---:|---|---|---|---|---|---|---|
| Buck regulator section | 1 | 3.3 V buck controller/regulator IC | Texas Instruments | TPS54331DR | TBD | SOIC-8 | TODO-VERIFY | Confirm compensation network with final VIN/load |
| Buck regulator section | 1 | Power inductor (buck) | TBD | TBD | TBD | TBD | TODO-VERIFY | Verify inductance/current/sat for rail budget |
| Buck regulator section | 1 | Schottky diode (if non-synchronous topology) | TBD | TBD | TBD | SMA/SMB/TBD | TODO-VERIFY | Validate current and reverse voltage margin |
| Decoupling capacitors | 8 | 0.1 uF X7R capacitor | TBD | TBD | TBD | 0603 | TODO-VERIFY | Distributed local decoupling |
| Decoupling capacitors | 4 | 1 uF X7R capacitor | TBD | TBD | TBD | 0603 | TODO-VERIFY | Mid-frequency rail support |
| Decoupling capacitors | 3 | 10 uF capacitor | TBD | TBD | TBD | 0805/TBD | TODO-VERIFY | Bulk points at regulator/module/USB rail |
| Ferrites | 3 | Ferrite bead (power filtering) | TBD | TBD | TBD | 0603 | TODO-VERIFY | One each for input, USB VBUS, noisy branch isolation |
| TVS diodes | 1 | Input rail TVS | TBD | TBD | TBD | SMB/SMA/TBD | TODO-VERIFY | Clamp VIN transients from PS2 source |
| TVS diodes | 2 | USB/Ethernet ESD protection arrays | TBD | TBD | TBD | SOT-23/SOT-143/TBD | TODO-VERIFY | Low-capacitance parts required for data lines |
| USB connector | 1 | USB storage connector (host path) | TBD | TBD | TBD | TBD | TODO-VERIFY | Mechanical dimensions and shield tabs must be verified |
| LEDs | 2 | Status LEDs (power/activity) | TBD | TBD | TBD | 0603 | TODO-VERIFY | Color/bin selection pending |
| LEDs | 2 | LED current limit resistors | TBD | TBD | TBD | 0603 | TODO-VERIFY | Tune value during bring-up |
| Reset circuitry | 1 | Momentary reset switch | TBD | TBD | TBD | TBD | TODO-VERIFY | Verify actuation style and clearance |
| Reset circuitry | 1 | Reset pull-up resistor | TBD | TBD | TBD | 0603 | TODO-VERIFY | Typical 10k, verify against reset topology |
| Reset circuitry | 1 | Reset timing/filter capacitor | TBD | TBD | TBD | 0603 | TODO-VERIFY | Verify RC timing with boot requirements |
| UART header | 1 | UART debug header | TBD | TBD | TBD | 1x4 or 1x6, 2.54 mm | TODO-VERIFY | Confirm pinout and enclosure access direction |

## BOM Follow-Up TODOs

- [ ] Replace all TBD MPN/Digi-Key PN fields with validated parts.
- [ ] Confirm package/land patterns from manufacturer documentation before footprint lock.
- [ ] Mark DNP options explicitly for first prototype run.
