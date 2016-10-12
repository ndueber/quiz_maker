Quiz Creator Coding challenge
===============

### Overview of Challenge

Your goal is to write a simple single-page quiz creation application, with persistence.

A quiz consists of a series of questions and answers.

### Specification

- The quiz creator should be able to edit the quiz in the following manners:
  - Add question/answer pairs to a quiz
  - Edit existing questions/answers
  - Remove existing question/answer pairs
- The page should attempt to save the quiz, and restore it upon reload.
  **Saving the quiz is asynchronous and can sometimes fail**.
- The quiz creator should be able to tell when the quiz has been saved.
  Importantly, **anything unsaved should be somehow indicated as such**.
  "Saving" indicators can be either at the level of individual questions, or global to the quiz.


###Implementation 
Boilerplate application for this was taken from [react-es6-redux](https://github.com/topheman/react-es6-redux)

Routing is done in src/routes.js
Styling is done in src/style/
Actions/Reduceing the heavy lifting of the project is done in src/redux/modules/battleData.js
containers src/containers/Quiz/

The trick behind this challenge is that each question has a state on whether or not it is being editted or not. The other trick is that if it is being edited, then we maintain what the edited question is, and what the edited answer is. 

When a question is being edited, we will indicate that it isn't saved by showing a "save question" button. when it is saved, the button will disappear. 
When a user edits a field, we will update that question object's "editedQuestion" and  "editedAnswer". When other actions are done that will rerender the page i.e. add question, edit other question, delete question. Then we will check to see if the user was in the process of editing a question and then we will render that value in the question answer text box as well as with the corresponding save question button.

####Run

#####Dev mode

* `npm start`
* Open [http://localhost:8080/](http://localhost:8080/)

####Build

At the root of the project :

* `npm run build`: for debug (like in dev - with sourceMaps and all)
* `npm run build-prod`: for production (minified/optimized ...)
* `npm run build-prod-all`: both at once in the same build (with redux devtools & sourcemaps on dev version)

A `/build/dist` folder will be created with your project built in it.

You can run it with `npm run serve-build` Then Open [http://localhost:3000/](http://localhost:3000/)


###License

This software is distributed under an MIT licence.