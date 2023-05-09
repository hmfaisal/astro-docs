---
sidebar_position: 3
---

# Local Data

## AstronautEntity
- Represents the entity version of the Astronaut data class, used for the local database.
- It has properties similar to Astronaut, but with annotations such as @PrimaryKey for specifying the primary key and @Entity for defining the table name.
```java
@Entity(tableName = "astronauts")
data class AstronautEntity(
    @PrimaryKey
    val id: Int,
    val name: String,
    val age: Int,
    val bio: String,
    val nationality: String,
    val status: StatusEntity,
    val flightsCount: Int?,
    val flights: List<FlightEntity>?,
    val profileImageUrl: String?,
    val profileImageThumbnailUrl: String?
)
``` 

## AstronautDao
It defines various methods for performing database operations related to the "astronauts" table
- This query method retrieves a list of AstronautEntity objects from the "astronauts" table.
```sqlite3
@Query("SELECT * FROM astronauts LIMIT :pageSize OFFSET (:page - 1) * :pageSize")
``` 

- This insert method is used to insert a list of AstronautEntity objects into the "astronauts" table. It uses the onConflict parameter to specify the conflict resolution strategy, which is set to REPLACE to replace existing rows with the new ones.
```sqlite3
@Insert(onConflict = OnConflictStrategy.REPLACE)
``` 

## AstronautDatabase
- `@Database(entities = [AstronautEntity::class], version = 1)` : It specifies the entities (database tables) that are part of the database. In this case, AstronautEntity is the entity class representing the "astronauts" table.
- `@TypeConverters(Converters::class)` : This annotation is used to specify the type converters used by the database. Type converters are used to convert custom data types (such as List, Date, etc.) to a format that can be stored in the database.
- `abstract fun astronautDao(): AstronautDao` : It returns an instance of the AstronautDao interface for performing database operations related to the "astronauts" table.