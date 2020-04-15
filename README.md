# Hello and welcome to Just A Quick Quest!
This project was created by Emma Roberts, Jack Portwood and John Pooley

There is a more detailed readme file in the _client_ folder so this file is more of a general overview and quickstart guide.

##Brief

You are to create a Build Your Own Story app, using the Open Trivia API. You will have a character and question masters and as the character progresses through the story, question masters will ask trivia questions. You should use both Spring and React to complete this project. 

####MVP:

-Create Character and Question Master classes

-Create Rooms which the Character will pass through 

-Rooms will have a theme, a Question Master and exits 

-Characters will have a name, life points, and treasure

-Question Masters will have a name and loot

-Character will move through the rooms answering questions

####Extensions:

-Choose your own difficulty (Any, Easy, Medium, Hard)

-Visuals (Sprite characters)

-Save high scores



###Overview

This project contains both a backend server with connected database and a frontend browser application.
The backend is a Java application using a Spring framework and is connected H2 database.
The frontend is a Javascript application using a React framework.

###Quick Setup
Once you have downloaded this repository, you should see both a _client_ folder and a _server_ folder. These will need to be set up individually.

####Server Folder

This was created in IntelliJ IDE using Maven. You will need to install Maven dependencies and then run the file __JustaquickquestApplication__ in _src/main/java/com.codeclan.example.justaquickquest_

####Client Folder

Opening this folder in Terminal or an equivalent, you should use the command _npm install_ and then _npm start_. This should load a webpage in your browser and connect to the backend automatically.
