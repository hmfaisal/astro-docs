---
sidebar_position: 2
---

# App Cycle

In this section we will discuss the app Home screen initialization cycle. The details screen will also follow the about same cycle.

- **AstroApp.kt:** The app starts from the `AstroApp.kt` class . From here the `AstronautApi.kt` interface is created and a room database instance is created by using `AstronautDatabase.kt`. "astronaut_database" is the name of the database that will be created.
- **MainActivity.kt:** class represents the main entry point of the application. This class sets up the layout and `Mainview.kt` function is invoked
- **MainView.kt:** this composable defines the UI structure and behavior of the main screen. It defines the navigation routes using the `Navigation.kt` object
- **AstronautListScreen.kt:** is the first screen / home screen of the app. This function represents the screen displaying a list of astronauts. It takes a NavController and a viewModel of type `AstronautListViewModel` as parameters. This screen observe the property `_astronautListState` from `AstronautViewModel.kt`to get the updated list of astronauts whenever it changes.
- **AstronautViewModel.kt:** class is a ViewModel class that manages the data and business logic for the astronaut list screen. From here we retrieve a list of astronauts from `AstronautRepository.kt` class. It exposes property `_astronautListState` which represents the current state of the astronaut list. It is type of `List<Astronaut.kt>`.
- **AstronautRepository.kt:** class acts as an intermediary between the data sources (API service and local database) and the `AstronautListViewModel` and `AstroDetailViewModel`. It first checks if there are any astronauts available in the local database by instance of the `AstronautDao.kt` interface which is initialized with `AstroApp.database.astronautDao()`. If the local database is empty, it makes an API request using the instance of the `AstronautApi.kt` interface which is initialized with the `AstroApp.apiService`. The response from the API is then mapped to a list of `AstronautEntity.kt` objects using the `AstronautMapper.kt` class. And then AstronautEntity object mapped to `Astronaut.kt` domain object.
