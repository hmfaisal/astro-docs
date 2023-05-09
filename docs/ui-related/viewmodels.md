---
sidebar_position: 4
---

# ViewModel

## AstronautListViewModel
- It is responsible for handling the business logic and data operations related to the AstronautListScreen.
- The `AstronautListViewModel` interact with other classes like `AstronautRepository` or `AstronautDto` to fetch data.
- The ViewModel has a constructor that takes an optional parameter repository of type `AstronautRepository`. If no repository is provided, it creates a new instance of `AstronautRepository`.
- There are several private mutable state variables declared using mutableStateOf
```java
private val _astronautListState = mutableStateOf(listOf<Astronaut>())
private val _isLoading = mutableStateOf(false)
private val _error = mutableStateOf("")
``` 
- Public read-only properties are defined for each of the mutable state variables
```java
val astronautListState: List<Astronaut>
    get() = _astronautListState.value
val isLoading: Boolean
    get() = _isLoading.value
val error: String
    get() = _error.value
``` 
- The `init` block is executed immediately when an instance of `AstronautListViewModel` is created. In this block, the `getAstronautList()` function is called to fetch the initial list of astronauts.
- The `getAstronautList()` function is a public function that fetches the list of astronauts from the repository. It is a suspending function, so it is called inside a `viewModelScope.launch` block.
- If the retrieved list of astronauts is not empty, it appends the new astronauts to the existing `_astronautListState`. If empty, it means it's the last page, so it sets `isLastPage` to true.

## AstronautDetailViewModel
- This function provides a convenient way for the UI layer (such as the `AstronautDetailScreen`) to observe the state changes of the astronaut details and loading status, allowing for reactive updates in the UI based on the changes in the view model's state.
- It uses mutableStateOf to create two mutable state properties: `_astronautDetailsState` and `_isLoading`. `_astronautDetailsState` represents the current state of the astronaut details and is initially set to null.
- It exposes two immutable properties: `astronautDetailState` and `isLoading`, which are derived from the mutable state properties.
`astronautDetailState` returns a State object wrapping the `_astronautDetailsState` property, allowing observers to listen to changes in the state.
- It defines a function `getAstronautDetails` that takes an `astronautId` as a parameter and is responsible for fetching the details of the astronaut from the repository.