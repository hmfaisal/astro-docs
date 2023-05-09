---
sidebar_position: 2
---

# Activity Entry

## MainActivity
- This is the main entry point of application. 
- In the `onCreate` method, the `setContent` function is called to set the content of the activity to a Composable function defined as `MainView`. 
- The `AstroTheme` is applied as the parent theme for the content. Inside the AstroTheme, a Surface composable is used as a container with the background color defined by the `MaterialTheme`.

## MainView
- This function defines the UI of the main screen. 
- It creates a navController using the `rememberNavController` function (used to remember the NavController across configuration changes, such as screen rotations, so that the user's place in the navigation stack is preserved.), which is responsible for handling navigation within the app. 
- It also creates an instance of `AstronautListViewModel` using the `viewModel` function, which is used to provide data to the screens. 
- Inside the `NavHost` composable, the different destinations/routes of the app are defined. The startDestination is set to `AstronautListScreen`, which represents the initial screen of the app.

## Navigation
The Navigation sealed class defines the available navigation routes in the app. It includes Astronauts and Astronaut, each represented by a unique route string.