# Ethernet Routing Planning Notes

## Topology (Planning)

- HLK-7628N Ethernet interface routed to selected magnetics stage (placeholder)
- Preserve PS2 Ethernet passthrough goal where mechanically/electrically feasible
- Keep options open for transformer location strategy pending mechanical validation

## 2-Layer Routing Strategy

- Keep differential TX/RX pairs tightly coupled and length-matched pragmatically
- Minimize pair discontinuities and via count
- Keep reference plane continuity under Ethernet routes
- Avoid aggressive stubs and unnecessary test pads on high-speed segments
- Separate switching regulator noisy loops from Ethernet routing corridor

## Placement Guidance

- Place magnetics/RJ45 path to minimize pair length from module interface
- Keep module decoupling close to power pins and away from pair transitions
- Keep status LEDs and reset circuitry outside critical pair channels

## TODO Verification

- [ ] Confirm HLK-7628N Ethernet pin assignments from trusted datasheet/source
- [ ] Confirm target impedance strategy for available stack-up
- [ ] Confirm magnetics part and exact pin mapping
- [ ] Confirm passthrough mechanical constraints inside target PS2 shell revision
