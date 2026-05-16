# Ethernet Routing Notes

## Scope

Planning notes for the `03-Ethernet-Interface.kicad_sch` subsystem on a 2-layer board.

## Architecture Planning

- HLK-7628N Ethernet pins connect to selected magnetics/RJ45 path.
- Include protection/filtering planning in schematic:
  - ESD/TVS protection at cable entry side
  - Common-mode filtering strategy (if required by selected magnetics/reference design)
  - Chassis/shield strategy TODO (depends on connector and enclosure grounding plan)

## Routing Priorities (PCB)

1. Keep differential pairs short and coupled (`ETH_TX_P/N`, `ETH_RX_P/N`).
2. Maintain reference continuity to ground under pair routes.
3. Minimize vias and avoid stubs on high-speed segments.
4. Keep switching regulator hot loop physically separated from Ethernet route corridor.
5. Reserve placement area near connector/magnetics for ESD parts and return path.

## Protection/Filtering Checklist

- [ ] Select Ethernet-rated TVS/ESD parts and verify capacitance impact.
- [ ] Confirm magnetics pin mapping and center-tap handling from final part datasheet.
- [ ] Confirm any required Bob Smith/common-mode termination network.
- [ ] Confirm LED signal routing (if integrated RJ45 LEDs are used).

## TODOs

- [ ] Verify final impedance guidance for chosen fab stack-up and 0.8 mm board.
- [ ] Verify connector keepout and shell grounding details from mechanical model.
- [ ] Verify protection component footprints from manufacturer land pattern docs.
