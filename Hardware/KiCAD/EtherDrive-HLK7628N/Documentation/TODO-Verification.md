# TODO Verification

## Schematic Hierarchy Completion

- [ ] Create top-level KiCad 9 project/schematic files and instantiate all 7 child sheets.
- [ ] Define and connect cross-sheet hierarchical labels for power, Ethernet, USB, PS2, UART, reset, and status.
- [ ] Run ERC after each subsystem is captured.

## Subsystem Verification Gates

### 1) Power Section
- [ ] Confirm PS2 source behavior around nominal ~8.5 V (startup, dips, and transients).
- [ ] Confirm 3.3 V regulator design margin and thermal behavior.
- [ ] Confirm USB 5 V rail generation/distribution approach and current budget.
- [ ] Verify TVS/ferrite choices and footprints.

### 2) HLK-7628N Core
- [ ] Verify module pinout and naming for exact revision.
- [ ] Verify boot/reset strap defaults.
- [ ] Verify all decoupling placement requirements.

### 3) Ethernet Interface
- [ ] Verify magnetics/RJ45 topology and pin mapping.
- [ ] Verify ESD/TVS low-capacitance selection.
- [ ] Verify any common-mode termination network requirements.

### 4) USB Storage Interface
- [ ] Verify connector footprint and retention tabs.
- [ ] Verify VBUS protection/switching behavior.
- [ ] Verify ESD protection devices and placement.

### 5) PS2 Interface
- [ ] Verify PS2 connector/net mapping against hardware references.
- [ ] Verify any required level conditioning or protection.

### 6) UART/Debug/Recovery
- [ ] Verify UART header pinout and voltage labeling.
- [ ] Verify reset/recovery controls and pull networks.

### 7) Status LEDs
- [ ] Verify GPIO assignments for LED functions.
- [ ] Verify resistor values for acceptable brightness/current.

## Footprint and Packaging Controls

- [ ] Do not finalize any custom footprint until datasheet dimensions are verified.
- [ ] Add TODO notes for any package still using placeholder dimensions.
- [ ] Confirm 0603 usage except where electrical or mechanical constraints require alternatives.

## PCB/Fabrication Targets

- [ ] Confirm 2-layer rules and return-path strategy for mixed power/high-speed sections.
- [ ] Confirm 0.8 mm stack-up availability for selected board house.
- [ ] Confirm OSH Park compatibility settings before routing lock.
