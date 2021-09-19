# would-you-rather project

This is a web application that represents the 'would you rather' game where users ask questions starting with 'would you rather' and give two options. Other users can answer these questions by choosing only one option from the two given options. Choosing 'both' or 'neither' of them is against the game rules.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Features

* authentication: The app contains a login page where users can write their id into the input field. if the id is of an existing user, logging in is successful and the user is redirected to the home page.
* Home Page: In the app Home page, asked questions are classified into two categories: answered and unanswered questions. users can navigate between these categories using the tab buttons.
* Answer Questions: If a user requested to see the details of an unanswered question, they are redirected to the question details page where the user can answer this question by clicking on one of the two options.
* View Poll Details: If a user requested to see the details of an answered question, they are redirected to the question details page where the user's answer, number and the percentage of users who has chosen each option. Users can't change their answers in a poll.
* Adding Questions: Users can submit a form that adds a new question to the app so that other users can answer it. This form consists of two input fields; one for each option.
* Leaderboard: existing app users are arranged descendingly based on the their activity.
The more users answer and ask questions, the higher rank they are at the leaderboard!
* Logout: Users can log out of their account and they are redirected to the login page again upon logging out.

## What You're Getting
```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── actions
    │    ├── authedUser.js
    │    ├── questions.js
    │    ├── shared.js
    │    └── users.js
    ├── components
    │    ├── AnsweredList.js
    │    ├── App.js
    │    ├── Authentication.js
    │    ├── ErrorPage.js
    │    ├── Home.js
    │    ├── Leaderboard.js
    │    ├── Login.js
    │    ├── NavBar.js
    │    ├── NewQuestion.js
    │    ├── Question.js
    │    ├── QuestionDetails.js
    │    ├── UnansweredList.js
    │    └── Users.js
    ├── _DATA.js
    ├── index.css
    ├── index.js
    ├── middleware
    │    ├── index.js
    │    └── logger.js
    ├── reducers.js
    │    ├── authedUser.js
    │    ├── index.js
    │    ├── questions.js
    │    └── users.js
    └── Would-You-Rather.jpg

```
