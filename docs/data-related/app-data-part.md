---
sidebar_position: 1
---

# App Data
We will start by creating our App wise data class which we will use throught the app. Astronaut data class represents an astronaut with various properties.
```java
data class Astronaut(
    val id: Int,
    val name: String,
    val age: Int,
    val bio: String,
    val nationality: String,
    val status: Status,
    val flightsCount: Int?,
    val flights: List<Flight>?,
    val profileImageUrl: String?,
    val profileImageThumbnailUrl: String?
)
``` 

- The status property is of type Status, which is another data class representing the status of the astronaut.
- The flights property is a list of Flight objects, which is another data class representing the flights the astronaut has been on.