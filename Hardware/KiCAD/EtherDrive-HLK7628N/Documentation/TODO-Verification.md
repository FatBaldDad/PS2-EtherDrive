# TODO Verification Register

## Critical Unknowns

- [ ] Confirm HLK-7628N official pinout and power pin naming
- [ ] Confirm final USB connector footprint selection and mechanical envelope
- [ ] Confirm Ethernet magnetics part number and package dimensions
- [ ] Confirm 0.8mm board availability and constraints at OSH Park for this stack-up
- [ ] Confirm TPS54331 passive network values against target VIN and load profile

## Library Verification

- [ ] Create final symbols only from verified datasheets
- [ ] Create final footprints only from verified land pattern guidance
- [ ] Run KiCad symbol/footprint pin mapping cross-check before schematic capture

## Manufacturing Verification

- [ ] Validate DRC rules against OSH Park capability limits
- [ ] Validate silkscreen legibility for hand assembly
- [ ] Validate assembly clearances around module and connector keepouts

## BOM Verification

- [ ] Replace all `TBD` manufacturer/MPN fields
- [ ] Populate Digi-Key part numbers for each production-fitted component
- [ ] Mark DNP placeholders clearly before first prototype release
