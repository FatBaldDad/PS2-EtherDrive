# HLK7628N Pin Map (Planning)

> Placeholder planning map. Final pin numbers and names must be verified from trusted HLK-7628N documentation before schematic freeze.

## Functional Mapping Plan

| Function Group | Planned Nets | Direction | Status | Notes |
|---|---|---|---|---|
| Power | `+3V3_MAIN`, `GND` | Input | TODO-VERIFY | Confirm all power/ground pin count and names |
| Ethernet | `ETH_TX_P/N`, `ETH_RX_P/N` | I/O | TODO-VERIFY | Confirm exact interface type and pin order |
| USB Host | `USB_HOST_D+`, `USB_HOST_D-`, `USB_VBUS_SW` | I/O | TODO-VERIFY | Confirm host-mode capable pins |
| UART Debug | `UART0_TX`, `UART0_RX` | I/O | TODO-VERIFY | Confirm voltage domain and boot log default |
| Reset/Boot | `nRESET`, `BOOT_SEL`, `RECOVERY_REQ` | Input | TODO-VERIFY | Confirm required pull-up/down defaults |
| Status GPIO | `SYS_STATUS_GPIO`, `ETH_LED_LINK`, `ETH_LED_ACT` | Output | TODO-VERIFY | Confirm LED-capable mux functions |
| PS2 Interface | `PS2_SIG_*` | I/O | TODO-VERIFY | Final net names depend on verified PS2 mapping |

## Symbol/Footprint Planning

- Use a custom symbol with grouped units by function (power, high-speed I/O, control/debug).
- Keep pin numbering unassigned in final symbol until verified source is confirmed.
- Footprint creation is blocked until package dimensions and pad geometry are verified.

## Verification Gate (Do Not Bypass)

- [ ] Obtain HLK-7628N pinout for the exact module revision targeted.
- [ ] Cross-check pin names/numbers against at least two trustworthy sources.
- [ ] Validate no power pins are omitted before ERC/DRC sign-off.
- [ ] Validate Ethernet and USB pair polarity conventions before routing.
