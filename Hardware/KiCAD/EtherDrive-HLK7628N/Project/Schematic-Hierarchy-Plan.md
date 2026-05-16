# Schematic Hierarchy Plan (KiCad 9)

Top-level sheet target: `EtherDrive-HLK7628N.kicad_sch` (to be created in KiCad GUI).

## Planned Child Sheets

1. `01-Power.kicad_sch`
2. `02-HLK7628N-Core.kicad_sch`
3. `03-Ethernet-Interface.kicad_sch`
4. `04-USB-Storage-Interface.kicad_sch`
5. `05-PS2-Interface.kicad_sch`
6. `06-UART-Debug-Recovery.kicad_sch`
7. `07-Status-LEDs.kicad_sch`

## Cross-Sheet Net Planning

- Rails: `VIN_PS2_8V5`, `+5V_USB`, `+3V3_MAIN`, `GND`
- Control: `nRESET`, `BOOT_SEL`, `RECOVERY_REQ`
- Ethernet: `ETH_TX_P/N`, `ETH_RX_P/N`, `ETH_LED_LINK`, `ETH_LED_ACT`
- USB storage: `USB_HOST_D+`, `USB_HOST_D-`, `USB_VBUS_SW`, `USB_OC#`
- PS2 interface: `PS2_SIG_*` (final net list TODO after pinout verification)
- Debug: `UART0_TX`, `UART0_RX`, `UART0_GND`, `UART0_3V3`

## Rules and Constraints

- 2-layer stack target with uninterrupted ground reference where possible.
- 0.8 mm PCB target (TODO: verify fab stack-up option before layout lock).
- Use 0603 passives by default; deviations require TODO + reason.
- Do not freeze symbol/footprint assignments until datasheet package dimensions are verified.
