# Memories_FrontEnd

## Memories
> “I thought past memories are everything to us" so lets start creating your own memories through Memories_App, you can update or delete it when ever you want,
> get a like , comment from your own friends. :fire:.

## Features
</br>

- [x] Password user login and SignUp using **Google Auth**
- [x] Welcome landing page
- [x] posts search with relevent tags and names
- [x] Easy memories creating form
- [x] Post Details page 😋


## Demo version
</br>
A demo version is automatically deployed for this repositories:

- Deployment for frontend part -
- Deployment for backend part - 

## Technology Stack 
</br>
Please get familiar with the components of the project in order to be able to contribute.

### components
- CSS: Styling web pages, html files
- Javascript: Primary programing language
- ReactJS: Javascript library for building User Interfaces
- nodejs: Used in the backend
- express: To create the calling API
- Material-UI: UI library for design system
- Redux:  React state management store
- Google React login

#### External Service Dependencies
- MongoDB Atlas: A cloud database used to store user personal data username, passwords and individuals chats

## Requirements
</br>

- node --version >= 6
- npm --version >= 3


## Local Installation for frontend
</br>

### Steps
- `git clone <repository-url>` where `<repository-url>`is the link to the forked repository
- `cd frontend_ui`

Note : If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```
git clone https://github.com/USERNAME/frontend_ui
cd frontend_ui
```

## Local Installation for backend
</br>

### Steps
- `git clone <repository-url>` where `<repository-url>`is the link to the forked repository
- `cd backend_services`

Note : If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```
git clone https://github.com/USERNAME/backend_services
cd backend_services
```

#### Config Variables
Define config variables in config.env.

- Create a free mongoDB atlas account at [https://www.mongodb.com](https://www.mongodb.com) and set a new cluster connection url equal to `db_connection_URL`
- Set `JWT_SECRET = <your_jwt_secret_string>` where `<your_jwt_secret_string>` is long alphanumerical string 
- Set `JWT_EXPIRE = <jwt_token_life_time>` where `<jwt_token_life_time>` is a string e.g. 10min, 30min

#### Starting server

```
cd backend_services
```
- Install all the dependencies with `npm install`
- Start the server with `npm start`
- Visit your API at [http://localhost:5000](http://localhost:5000.) :tada:

#### Starting frontend

```
cd frontend_ui
```
- Install all the dependencies with `npm install`
- Start the server with `npm start`
- Visit your app at [http://localhost:3000](http://localhost:3000.) :tada:

## Contributing

> Feel free to **contribute** :heart_eyes:
- When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change."# Memories_Frontend" 
