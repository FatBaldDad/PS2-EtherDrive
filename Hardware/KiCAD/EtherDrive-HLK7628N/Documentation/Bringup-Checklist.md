# Bring-up Checklist (Starter)

## Pre-Power Checks

- [ ] Visual inspection for solder bridges and polarity errors
- [ ] Verify no shorts between VIN, 3V3, and GND
- [ ] Verify HLK-7628N orientation and pin-1 alignment
- [ ] Verify USB connector pinout and shield grounding intent
- [ ] Confirm all DNP/TODO placeholder parts are intentionally unresolved

## First Power Sequence

- [ ] Power with current-limited supply
- [ ] Record inrush and steady-state current on VIN
- [ ] Verify 3V3 rail within tolerance
- [ ] Check buck converter switching behavior and ripple
- [ ] Verify reset line default state and manual reset operation

## Functional Checks

- [ ] Confirm HLK-7628N boot behavior
- [ ] Confirm status LED drive behavior
- [ ] Confirm USB power integrity under expected load
- [ ] Confirm Ethernet link detect and activity
- [ ] Validate thermal behavior during extended operation

## Post-Bringup

- [ ] Update BOM statuses from TODO-VERIFY to confirmed
- [ ] Capture scope plots for power and Ethernet notes
- [ ] Record ECO list for schematic/layout revision
