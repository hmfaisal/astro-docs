---
sidebar_position: 4
---

# Data Mapping
`AstronautMapper` class encapsulates the logic for converting dto models (AstronautDto, StatusDto, FlightDto) to entity models (AstronautEntity, StatusEntity, FlightEntity) . It also encapsulates the logic for converting entity models (AstronautEntity, StatusEntity, FlightEntity) to domain models (Astronaut, Status, Flight).

- **`mapAstronautDtoToEntity:`**This method takes an AstronautDto object as input and maps it to an AstronautEntity object.
- **`mapAstronautEntityToDomain:`** This method takes an AstronautEntity object as input and maps it to an Astronaut object.