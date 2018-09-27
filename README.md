# Powder Hounds Property Search

[![Build Status](https://travis-ci.com/devinsm/htm-property-search.svg?token=2SsqxwGeje9ofPzWHxo7&branch=master)](https://travis-ci.com/devinsm/htm-property-search) [![Coverage Status](https://coveralls.io/repos/github/devinsm/htm-property-search/badge.svg?branch=master&t=Qej9jB)](https://coveralls.io/github/devinsm/htm-property-search?branch=master)

This simple website allows users to search through the rental properties of a
fictitious company called "Powder Hound Realty".

I made the first version of this project while interviewing with a hotel/rental property company
located overseas. As part of their skills assessment, they gave me the following challenge:

>Create a small and simple page using React. The page should load the properties from
>the attached JSON and render them into the page, so that at least name and description
>are visible.
>
>The page should also have a text input, and when text is entered into the field it should
>filter the displayed properties so that the property name or description should contain
>the text in that field. If no properties are displayed (due to filtering) then an error
>message should be shown.
>
>You can use any additional tools and libraries, and can make it look however you want.
>If you want to get going quickly, https://github.com/facebookincubator/create-react-app might help.
>
>As well as functionality, we will be reviewing:
>- User interface
>- Code structure and style
>- Unit tests

The only thing they gave me to start with was a JSON file with information about
some of their rental units. Everything else I made myself. Though I got an offer,
I got cold feet and decided moving half way around the world was not for me :)

Some things to note about the project:
- The search is case insensitive, and ignores trailing or leading whitespace.
I made the decision to make the search this way, because I felt it would better
match user expectations. For instance, all of the following will match '1 bedroom':
  - '1 bedroom'
  - '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 bedroom&nbsp;&nbsp;&nbsp;'
  - '1 Bedroom'
- The app is mobile and tablet friendly (you can use the developer tools in
Chrome or Firefox to see what it will look like on various phones).
- I wrote the tests using [Enzyme](http://airbnb.io/enzyme/) and Jest. As with all Create React App
applications, to run the tests run `npm test`, and to get the test coverage run `npm test -- --coverage`.

## Running the project locally
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

To build and run locally:
1. Clone this repo
2. `cd` into the root directory of the project and run `npm install`
3. Run `npm start` and visit `http://localhost:3000/` in your browser.
