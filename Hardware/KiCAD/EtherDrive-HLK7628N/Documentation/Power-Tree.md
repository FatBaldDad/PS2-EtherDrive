# Power Tree Planning

## Intended Power Flow

1. VIN input (source TBD: internal PS2 rail and/or USB path)
2. Input protection/filtering (ferrite + bulk + HF decoupling)
3. TPS54331 buck conversion to 3.3V
4. 3.3V distribution to HLK-7628N and support circuitry
5. Local decoupling at each high-speed/power-sensitive node

## Rails and Consumers

- **VIN (TBD voltage range)**
  - TPS54331 input stage
  - USB power filtering input path
- **3V3_MAIN**
  - HLK-7628N module
  - Ethernet support path (through selected magnetics/PHY topology)
  - Status LEDs and reset pull-up network

## Planning Constraints

- 2-layer board with strong ground continuity
- 0.8mm target thickness (mechanical fit + fab verification needed)
- Hand-assembly friendly component access
- Mostly 0603 passive selection for consistency

## TODO Verification

- [ ] Confirm valid VIN operating range from final power source
- [ ] Confirm TPS54331 compensation and passives from finalized design targets
- [ ] Confirm max HLK-7628N peak current requirement
- [ ] Confirm thermal margin for regulator and diode choices
- [ ] Confirm USB source current and inrush handling limits
