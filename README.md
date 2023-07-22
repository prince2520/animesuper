<p align="center" >
   <img align=left width="15%"  src="https://github.com/prince2520/animesuper/assets/68547999/4e8b9d99-1d13-4f76-93b3-eadd9c96738a">
   <a href="https://animesuper.vercel.app">
       <img  width="30%" src="https://user-images.githubusercontent.com/68547999/229590865-45614c46-a5c2-4bb0-8851-e423d457369b.jpg">
   </a>

  
   <img  align=right  width="15%" src="https://github.com/prince2520/animesuper/assets/68547999/51d4fcfc-e70d-4422-9e80-59284f1d34e7">
</p>


<hr style="border:1px solid gray">

<p>
   AnimeSuper is the ultimate destination for anime enthusiasts, providing a seamless platform to organize your favorite anime and manga while keeping you updated
   on the latest trends within the vibrant anime community.😊
   <h2>
      <a href="https://animesuper.vercel.app">
         Website Link
      </a>
   </h2>
</p>

# For Frontend

## Installation - 

```
git clone https://github.com/prince2520/animesuper-frontend.git
npm install  
npm start     
```
## Features -

#### 1️⃣ Utilized the robust capabilities of Figma to meticulously design and implement the entire website, ensuring a visually appealing and user-friendly interface. [Figma Link](https://www.figma.com/file/hceRTLfnSDUt1bUrgR47Q0/Anime-Project?node-id=3-75) 
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229492141-ea8888d2-bb79-43fb-a8cf-865ac84ea0c6.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229492362-a0a9a6cf-80f0-4bb5-9259-6afc7f4d0a19.png">
</p>


#### 2️⃣ Harness the robust functionality of Django Authentication to seamlessly establish user accounts, ensuring enhanced security and efficient user management within web application.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229362814-4239d3d6-5242-4c16-9b0e-9d23137a1762.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229362839-85de1d17-8567-47b9-8481-ac60995dbd26.png">
</p>

#### 3️⃣ Effortlessly enrich user experience by seamlessly incorporating the functionality to add anime and manga to your personalized favorite list within the application's framework.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363102-6b8d7071-da49-46f7-8c22-1c101363d6c1.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363133-2898be81-40be-4a50-918f-828f3c366981.png">
</p>


#### 4️⃣ Enhance browsing experience by seamlessly integrating the capability to include anime and manga into  dynamic watchlist within the application's framework.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363247-1243df6f-ad1a-406a-b7ed-4662412dc145.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363286-bbdb561e-b4b0-4691-bb8e-f19d8e76217b.png">
</p>

#### 5️⃣ Empower users with complete control over their profiles by seamlessly incorporating the functionality to edit personal information and securely store profile images in Firebase Storage, leveraging its robust cloud storage capabilities.
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363390-7e0ec32f-f4b9-445d-82c3-a9da7ef359a5.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363421-5f4a7623-475a-4ecb-8a17-ea530f792d9a.png">
</p>

#### 6️⃣ Efficiently administer and organize your anime and manga lists, effortlessly updating status and staying informed with real-time updates from the thriving anime community, all within a seamlessly integrated platform. 
<p align="center">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363451-1cc93aa3-cd6b-46d3-ab10-710232e9682a.png">
  <img width="45%" src="https://user-images.githubusercontent.com/68547999/229363472-733adae3-0622-4680-8ceb-db1e24f11e51.png">
</p>


#### 7️⃣ Achieve optimal user experience across various devices by implementing responsive design techniques using Media Queries, ensuring the website dynamically adapts its layout and functionality based on screen sizes and resolutions.
<p align="center">
  <img width="20%" src="https://github.com/prince2520/animeSuper/assets/68547999/6eac8070-4caa-49a2-9d4c-8586f9a14449">
  <img width="20%" src="https://github.com/prince2520/animeSuper/assets/68547999/e40728f9-93b6-468a-8696-85c2618e23fc">
  <img width="20%" src="https://github.com/prince2520/animeSuper/assets/68547999/6275c820-0880-404f-919b-a977cc90be56">
  <img width="20%" src="https://github.com/prince2520/animeSuper/assets/68547999/b62d307f-9c38-4308-82c9-f151de17983f">
</p>

# For Backend

## Installation -
```
git clone https://github.com/prince2520/animesuper-backend.git
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


# Technologies used -
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

# Demo 
[Youtube Link](https://www.youtube.com/watch?v=Y-R6vcsiS_M&ab_channel=029Prince)

https://user-images.githubusercontent.com/68547999/229545341-e9e0bb48-874a-4659-afe1-420c45d873a5.mp4


