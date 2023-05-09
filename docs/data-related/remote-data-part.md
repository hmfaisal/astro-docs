---
sidebar_position: 2
---

# Remote Data

## AstronautDto
`AstronautDto` data class represents the DTO (Data Transfer Object) version of the Astronaut data class. It has properties similar to Astronaut. In here, we defined the required data the app will be needed from the api response.

```java
data class AstronautDto(
    val id: Int,
    val name: String,
    val age: Int,
    val bio: String,
    val nationality: String,
    val status: StatusDto,
    @SerializedName("flights_count")
    val flightsCount: Int?,
    val flights: List<FlightDto>?,
    @SerializedName("profile_image")
    val profileImageUrl: String?,
    @SerializedName("profile_image_thumbnail")
    val profileImageThumbnailUrl: String?
)
``` 

## AstronautApi
This interface define the API endpoints for fetching the list of astronauts and retrieving a specific astronaut by ID. The suspend modifier indicates that these functions are meant to be used in a coroutine and can perform network operations asynchronously.
- **getAstronauts** function represents an endpoint to fetch a list of astronauts. It returns an AstronautApiResponse object, which represents the response from the API.
- **getAstronautById** function represents an endpoint to fetch a specific astronaut by their ID. It returns an AstronautDto object, which represents the DTO (Data Transfer Object) version of the astronaut.

## AstronautApiResponse
This data class represents the response from the astronaut API when fetching a list of astronauts. Our point of interest is the Results key which holds instances of the AstronautDto data class.
```java
data class AstronautApiResponse(
    val count: Int,
    val next: String?,
    val previous: String?,
    val results: List<AstronautDto>
)
``` 