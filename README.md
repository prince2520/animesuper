<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/68547999/229295138-e41d56da-e1c5-47f5-9332-cc0a13bc9a10.svg">
</p>

<hr style="border:1px solid gray">

#### AnimeSuper is best website to great place to organize your favorite anime, manga and make you updated to anime community. 

# For Frontend

## Installation - 

```
npm install  
npm start     
```
## Features -

#### 1.) Created the complete design of website in Figma. [Link](https://www.figma.com/file/hceRTLfnSDUt1bUrgR47Q0/Anime-Project?node-id=3-75) 
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229492141-ea8888d2-bb79-43fb-a8cf-865ac84ea0c6.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229492362-a0a9a6cf-80f0-4bb5-9259-6afc7f4d0a19.png">
</p>


#### 2.) Create your own accounts.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229362814-4239d3d6-5242-4c16-9b0e-9d23137a1762.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229362839-85de1d17-8567-47b9-8481-ac60995dbd26.png">
</p>

#### 3.) Add anime/manga to the favorite list.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363102-6b8d7071-da49-46f7-8c22-1c101363d6c1.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363133-2898be81-40be-4a50-918f-828f3c366981.png">
</p>


#### 4.) Add anime/manga to the watchlist list.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363247-1243df6f-ad1a-406a-b7ed-4662412dc145.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363286-bbdb561e-b4b0-4691-bb8e-f19d8e76217b.png">
</p>

#### 5.) Save your profile.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363390-7e0ec32f-f4b9-445d-82c3-a9da7ef359a5.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363421-5f4a7623-475a-4ecb-8a17-ea530f792d9a.png">
</p>

#### 6.) Manage your anime/mange list, update your status and get updated to anime community. 
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363451-1cc93aa3-cd6b-46d3-ab10-710232e9682a.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363472-733adae3-0622-4680-8ceb-db1e24f11e51.png">
</p>


# For Backend

## Installation -
```
git clone 
pip install -r requirements.txt 
py manage.py runserver
```

## API Endpoints -

#### Authentication Endpoints -

| endpoint     | query      | body     | description |
| -------------- | ------------- | ----------- |------------------------------ |
| authentication/signup |      -    | username, email, password, confirmPassword | to signup account  |
| authentication/signin |      -    | email, password      | to login account  |
| authentication/profile-detail | email          | -         | get profile detail  |
| authentication/profile-satistics |   email       | -         | get statistics of manga/anime of the user|
| authentication/edit-profile |    -      | email         | get statistics of manga/anime of the user|

#### Anime/Manga Endpoints -

| endpoint     | query      | body     | description |
| -------------- | ------------- | ----------- |------------------------------ |
| animeManga/animeManga-list | category, rank_type, limit          | -         | get the list of anime/manga according to ranking |
| animeManga/animeManga-detail/<int:animeID> | category          |  -        | get the detail of the anime/manga  |
| animeManga/animeManga-search |  animeMangaName        |       -   | search and get the result  |

#### Watchlist Endpoints -

| endpoint     | query      | body     | description |
| -------------- | ------------- | ----------- |------------------------------ |
| my_watchlist/add-watchlist-item |      -    |email, category, category_id, img_url, title, num_episode_or_chapter, media_type          | add anime/manga to watchlist of user |
| my_watchlist/get-watchlist-list |  email    |      -    | get the complete list of watchlist of user |
| my_watchlist/delete-watchlist-item |email, categoryId          |   -       | delete the anime/manga from the watchlist  |
| my_watchlist/edit-watchlist-item|     -     | email, category_id, status, progress         | edit the status of anime/manga  |

#### Favorite list Endpoints -

| endpoint     | query      | body     | description |
| -------------- | ------------- | ----------- |------------------------------ |
| my_favorite/add-item-favorite |   -     |email, category_id, category, img_url, title, score, year, num_episode_chapter, media_type          | add anime/manga to favorite list |
| my_favorite/get-favorite-list |    email      |     -     | get the complete list of favoritelist of user   |
| my_favorite/delete-favorite-item | email, categoryId, category |   -    | delete the anime/manga from the favoritelist  |


## Technologies used -
#### For Frontend - 
* [React](https://react.dev/)
* [Figma](https://www.figma.com/)
* [Iconify](https://iconify.design/)
* [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Swiper](https://swiperjs.com/)
* [React Image File Resizer](https://www.npmjs.com/package/react-image-file-resizer)
* [Firebase](https://firebase.google.com/)

#### For Backend -
* [Django](https://www.djangoproject.com/)
* [Django Rest Framework](https://www.django-rest-framework.org/)
* [MyAnimelist API](https://myanimelist.net/apiconfig/references/api/v2)

