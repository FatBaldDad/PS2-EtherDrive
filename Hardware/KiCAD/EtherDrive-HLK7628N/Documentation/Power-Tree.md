# Power Tree

## Input and Rails

- **Primary input**: `VIN_PS2_8V5` (approximately 8.5 V from PS2 source).
- **Primary regulated rail**: `+3V3_MAIN` for HLK-7628N and logic/control circuitry.
- **USB storage rail**: `+5V_USB` (required if USB storage host path needs dedicated 5 V supply).

## Planned Flow

1. `VIN_PS2_8V5` enters through protection and input filtering:
   - TVS diode (input surge/transient clamp)
   - Ferrite bead and bulk/HF capacitors
2. Buck regulator stage converts input to `+3V3_MAIN`.
3. `+3V3_MAIN` feeds:
   - HLK-7628N core
   - Ethernet support circuitry (control/LED/protection as needed)
   - UART/debug/recovery logic
   - Status LEDs
4. `+5V_USB` rail plan for USB storage interface:
   - Option A: derived from input using dedicated 5 V regulator/switch path
   - Option B: passed/conditioned source if validated against USB host current and stability requirements

## Subsystem Power Allocation

- **Power sheet**: input protection, conversion, rail enable points.
- **HLK-7628N core**: local decoupling clusters at module power pins.
- **Ethernet**: ESD/protection and any isolated/bias needs from chosen magnetics topology.
- **USB storage**: connector VBUS, inrush management, overcurrent protection planning.
- **PS2 interface**: source entry and any conditioning tied to console rails.
- **UART/debug/recovery**: low-current logic rail usage (`+3V3_MAIN`).
- **Status LEDs**: resistor-limited loads on `+3V3_MAIN`.

## Planning Constraints

- KiCad 9 project structure.
- 2-layer board target with solid ground reference strategy.
- 0.8 mm board thickness target (TODO verify manufacturer stack-up support).
- Prefer 0603 passives unless electrical/mechanical constraints require larger packages.
- OSH Park compatibility target (rules and annular constraints to be verified before layout lock).

## TODO Verification

- [ ] Confirm PS2 input voltage tolerance window around nominal ~8.5 V.
- [ ] Confirm HLK-7628N peak/transient current at 3.3 V.
- [ ] Confirm if USB storage requires full USB host 5 V current budget and switching/protection topology.
- [ ] Confirm regulator loop-compensation values against selected inductor/capacitor parts.
- [ ] Confirm thermal margin for regulator and power-path components on 2-layer 0.8 mm board.
