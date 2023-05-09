---
sidebar_position: 1
---

# Folder Structure

Get started by the overview of folder structure of the project. In the next chapter we will discuss the details of implementation.
```
app/
|-- src/
|   |-- main/
|       |-- java/
|       |   |-- com.ai.astro/
|       |       |-- common/
|       |       |   |-- Constants.kt
|       |       |-- data/
|       |       |   |-- local/
|       |       |       |-- dao/
|       |       |       |    |-- AstronautDao.kt
|       |       |       |-- entity/
|       |       |       |    |-- AstronautEntity.kt
|       |       |       |    |-- FlightEntity.kt
|       |       |       |    |-- StatusEntity.kt
|       |       |       |-- AstronautDatabase.kt
|       |       |   |-- mapper/
|       |       |       |-- AstronautMapper.kt
|       |       |   |-- remote/
|       |       |       |-- dto/
|       |       |       |    |-- AstronautDto.kt
|       |       |       |    |-- FlightDto.kt
|       |       |       |    |-- StatusDto.kt
|       |       |       |-- AstronautApi.kt
|       |       |       |-- AstronautApiResponse.kt
|       |       |   |-- repository/
|       |       |       |-- AstronautRepository.kt
|       |       |-- model/
|       |       |   |-- Astronaut.kt
|       |       |   |-- FLight.kt
|       |       |   |-- Status.kt
|       |       |-- ui/
|       |       |   |-- common/
|       |       |       |-- ChipView.kt
|       |       |       |-- Title.kt
|       |       |   |-- core/
|       |       |       |-- MainView.kt
|       |       |       |-- Navigation.kt
|       |       |   |-- features/
|       |       |       |-- astronauts/
|       |       |       |   |-- components/
|       |       |       |       |-- AstronautItem.kt
|       |       |       |   |-- AstronautListScreen.kt
|       |       |       |   |-- AstronautListViewModel.kt
|       |       |       |-- details/
|       |       |       |   |-- components/
|       |       |       |       |-- AstronautInfoCard.kt
|       |       |       |       |-- BioCard.kt
|       |       |       |       |-- FlightList.kt
|       |       |       |   |-- AstronautDetailScreen.kt
|       |       |       |   |-- AstronautDetailViewModel.kt
|       |       |   |-- theme/
|       |       |       |-- Color.kt
|       |       |       |-- Shape.kt
|       |       |       |-- Theme.kt
|       |       |       |-- Type.kt
|       |       |   |-- AstroApp.kt
|       |       |   |-- MainActivity.kt
|       |       |-- util/
|       |       |   |-- Converters.kt
|       |-- res/
|           |-- drawable/
|           |-- xml/
|           |-- mipmap/
|           |-- values/
|               |-- colors.xml
|               |-- strings.xml
|               |-- themes.xml
|       |-- AndroidManifest.xml
|-- build.gradle
|-- proguard-rules.pro
|-- settings.gradle

```