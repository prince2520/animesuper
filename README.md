![LinkedIn cover - 1](https://github.com/prince2520/animesuper/assets/68547999/ee1123d8-d767-4dd9-962f-75d2a4ed555e)

<p align = "center">
  AnimeSuper: ultimate hub for anime fans, seamless platform to organize favorites, and stay updated on trends.😊
</p>

<br/>


## Table Of Contents
* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [Code of conduct](#code-of-conduct)
* [License](#license)
* [Project Links](#project-links)


## About The Project
![AnimeSuper](https://github.com/prince2520/animesuper/assets/68547999/7939a76f-55cb-4030-932f-fc194d1840a5)

## Built With
#### Frontend
* [React](https://react.dev/)
* [Figma](https://www.figma.com/)
* [Iconify](https://iconify.design/)
* [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Swiper](https://swiperjs.com/)
* [React Image File Resizer](https://www.npmjs.com/package/react-image-file-resizer)
* [Firebase](https://firebase.google.com/)

#### Backend
* [Django](https://www.djangoproject.com/)
* [Django Rest Framework](https://www.django-rest-framework.org/)
* [MyAnimelist API](https://myanimelist.net/apiconfig/references/api/v2)

## Getting Started  

### Prerequisites

<a href="https://git-scm.com/downloads" >Git</a> is a distributed version control system used for software development. It allows multiple developers to work on the same codebase simultaneously, keeping track of changes and managing versions. It also enables users to revert changes and collaborate more effectively.

<a href="https://www.python.org/downloads/">Python</a> is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.


### Installation

<p><b>Step 1 -</b> Clone the animesuper project.</p>

```
git clone https://github.com/prince2520/animesuper.git
```

#### Frontend

<p><b>Step 2 -</b> Install the necessary dependencies. </p>

```
npm install 
```

<p><b>Step 3 -</b> Add environment variable by creating .env file </p>

```
# Create .env file and paste to root folder

# Add the url of your server
REACT_APP_SERVER_URL= http://127.0.0.1:8000

# Add your firebase credentials here
# firebase config (Add your config data)
REACT_APP_apiKey=*****
REACT_APP_authDomain=*****
REACT_APP_projectId=*****
REACT_APP_storageBucket=*****
REACT_APP_messagingSenderId=*****
REACT_APP_appId=*****
REACT_APP_measurementId=*****
```
<p><b>Step 4 -</b> Run client server locally</p>

```
npm start 
```

#### Backend

<p><b>Step 5 -</b> Install the necessary dependencies. </p>

```
pip install -r requirements.txt 
```

<p><b>Step 6 -</b> Add environment variable by creating .env file </p>

```
# add .env file to animesuper directory

# add your myanimelist api credentials
MYANIMELIST_URL=https://api.myanimelist.net
MYANIMELIST_API_KEY==******

# email credentials 
EMAIL_USE_TLS=True
EMAIL_HOST=smtp.gmail.com
EMAIL_HOST_USER=******
EMAIL_HOST_PASSWORD=******
SENDER_EMAIL=******
EMAIL_PORT=587


# add your yugabyte credentials
DB_ENGINE=django_yugabytedb
DB_NAME=yugabyte
DB_HOST=******
DB_PORT=5433
DB_CONN_MAX_AGE=None
DB_USER=admin
DB_PASSWORD=******

```

<p><b>Step 7 -</b> Run backend server locally </p>

```
py manage.py runserver 8000
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/prince2520/animesuper/issues) to discuss it

* Please make sure you check your spelling and grammar.

### Creating A Pull Request

Wanna contribute to AnimeSuper ?

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureName`)
3. Commit your Changes (`git commit -m 'Add some FeatureName'`)
4. Push to the Branch (`git push origin feature/FeatureName`)
5. Open a Pull Request


## Code of conduct

Developers are requested to go through our <a href="https://github.com/prince2520/animesuper/blob/main/CODE_OF_CONDUCT.md">code of conduct</a> thoroughly to maintain a peaceful environment within our project.

## License
Distributed under the MIT License. See [LICENSE](https://github.com/prince2520/animesuper/blob/main/LICENSE.txt) for more information.

## Project Links
<p align="left">
<a href="https://animesuper.vercel.app/login" target="_blank" rel="noreferrer"> <img src="https://github.com/prince2520/animesuper/assets/68547999/56ca3f30-2eb8-48fb-a669-2cadd5fc3297" alt="angular" height="35"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://github.com/prince2520/animesuper/assets/68547999/fc73f01d-9043-4756-a8fd-b9b029b20c39" alt="angular"  height="35"/> </a>
<a href="https://www.figma.com/file/HVnROhqnB55YlNtuJKuyDy/Anime-Project?type=design&node-id=3%3A75&mode=design&t=QVytotlyazcxi008-1" target="_blank" rel="noreferrer"> <img src="https://github.com/prince2520/animesuper/assets/68547999/a973c973-0031-4712-a573-07189646f6d5" alt="angular" height="35"/> </a>
</p>