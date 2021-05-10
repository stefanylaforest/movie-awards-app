# The Shoppies Movie Awards: Movie Awards for Entrepreneurs

Welcome to The Shoppies! This application was build for you to nominate your favorite movies for awards.

## Live Demo: https://the-shoppies-by-stefany.netlify.app/

---

This web application was build with **React** & **Javascript** and styled with **Styled-Components** 💅

---

## How To Install The Project:

1. Fork the repository
2. Clone the repository in your code editor
3. In terminal:
   run `yarn install `
   followed by `yarn add dotenv`
4. Create an .env file in the root folder
5. Head over to http://www.omdbapi.com/apikey.aspx to grab yourself an API key. It's free!
6. Copy this in your .env file: `REACT_APP_MOVIE_API=YourApiKey`
7. Replace `YourApiKey` with the key you received in your emails and save your changes with Command + S
8. In terminal, run `cd client`
9. Once in the client directory run `yarn start`

---

## What Has Been Implemented In This Project:

- Users can search movie titles. While searching, the results renders on the webpage below.
- Users can add up to 5 movies for nominations.
- The movie's button disables once it has been nominated.
- Users can delete movies from their nomination list.
- Once the user has added 5 movies, an orange banner appears to let them know they have nominated their 5 movies.
- Should the user leave the page, their nominations is stored in local storage incase they come back later.
- If user deletes a movie from their nomination list, it will also delete from local storage.
- Animation with key frames has been added on render of the search results.

## The User Interface

![shoppies](https://user-images.githubusercontent.com/66086002/117665882-35777300-b19b-11eb-8db7-8714384a0f1c.gif)
