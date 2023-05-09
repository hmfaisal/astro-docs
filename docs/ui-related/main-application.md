---
sidebar_position: 1
---

# Application Entry 
**`AstroApp`** class is a subclass of Application and serves as the entry point for your application. It is responsible for initializing essential components such as Retrofit, Room database, and SharedPreferences.

- `onCreate()` function is called when the application is starting up. It overrides the onCreate() function from the Application class and is used to perform initialization tasks.
```java
override fun onCreate() {
    super.onCreate()
    initRetrofit()
    initDatabase()
    initSharedPreferences()
}
``` 
In this case, it initializes the Retrofit library to set up the API service. Then it created a RoomDatabase instance and the created AstronautDatabase is assigned to the database property. Finally it initializes the SharedPreferences. 
- `companion object` contains three properties: apiService, database, and sharedPreferences. These properties are declared as lateinit var (late-initialized variables) and are accessible from other parts of the application. It allows the properties apiService, database, and sharedPreferences to be assigned later, after the initialization of the AstroApp instance.
```java
companion object {
    lateinit var apiService: AstronautApi
        private set

    lateinit var database: AstronautDatabase
        private set

    lateinit var sharedPreferences: SharedPreferences
        private set
}
``` 