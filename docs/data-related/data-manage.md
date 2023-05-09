---
sidebar_position: 5
---

# Data Managing

`AstronautRepository` is responsible for managing the retrieval of astronauts, fetching data from the API if necessary, and storing it in the local database for future use. It acts as an intermediary between the data sources (API service and local database) and the `AstronautListViewModel` or `AstronautDetailsViewModel`.

- **`getAstronauts(page: Int, pageSize: Int): List<Astronaut>`:** This function retrieves a list of astronauts. It first attempts to fetch the data from the local database `astronautDao.getAstronauts`. If the local database doesn't have any data, it fetches the data from the API service `apiService.getAstronauts`, maps the response to entity models `astronautMapper.mapAstronautDtoToEntity`, inserts the entities into the local database (astronautDao.insertAstronauts), and finally maps the entities to domain models `astronautMapper.mapAstronautEntityToDomain`. The function returns the list of `astronauts`.

- **`getAstronautById(astronautId: Int): Astronaut`:** This function retrieves an astronaut by its ID. It first attempts to fetch the astronaut from the local database `astronautDao.getAstronautById`. If the astronaut or its associated flights are not available in the local database, it fetches the data from the API service `apiService.getAstronautById`, maps the response to an entity model `astronautMapper.mapAstronautDtoToEntity`, inserts the entity into the local database `astronautDao.insertAstronaut`, and finally maps the entity to a domain model `astronautMapper.mapAstronautEntityToDomain`. The function returns the `astronaut`.

- **Exception handling:** If any exception occurs during the process (e.g., network error, database error), it catches the exception, prints the stack trace for debugging purposes (e.printStackTrace()), and returns an empty list or an astronaut object from local database.