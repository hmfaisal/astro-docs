---
sidebar_position: 3
---

# UI Screens

## AstronautListScreen
- `AstronautListScreen` provides a scrollable list of astronauts with dynamic loading of more items as the user scrolls
- The `LaunchedEffect` composable is used to trigger the `getAstronautList()` function in the view model when the screen is first created.
- Inside the Scaffold, the LazyColumn composable is used to create a vertically scrollable list of items.
- The `itemsIndexed` composable is used to iterate over the astronauts list and create an custom `AstronautItem` composable for each astronaut.
- If the last item in the list is reached and the loading state is not active `!isLoading`, the `getAstronautList()` function is called again to load more astronauts.

## AstronautDetailScreen
The `AstronautDetailScreen` composable uses the `AstronautDetailViewModel` to fetch and display the astronaut details, and it reacts to changes in the view model's state to update the UI accordingly.
- It uses `LaunchedEffect` to launch a coroutine when the `astronautId` changes. Inside the coroutine, it calls the `viewModel.getAstronautDetails` function to fetch the details of the astronaut with the given ID.
- It uses the `Scaffold` composable to set up the basic structure of the screen, including the top app bar.
- The `LazyColumn` composable is used in the `AstronautDetailScreen` to display a vertically scrollable list of items. `LazyColumn` is optimized to efficiently handle large lists by lazily composing and rendering only the visible items on the screen. This means that as the user scrolls through the list, LazyColumn will dynamically compose and display only the items that become visible.
- It uses custom composable functions like `AstronautInfoCard`, `BioCard`, `Title`, and `FlightList` to display specific sections of the astronaut details.