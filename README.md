# angular2Game
A programming game for learning Angular2 basics.

##Instalation & execution
In order to start executing & working with the app you will need a couple of things:
* [NodeJs](https://nodejs.org/en/) v6.9+ installed
* A Github account (if you want to push to this repo)
* A text editor (I recommend [VSCode](https://code.visualstudio.com/))

To run the app for the first time, run `npm i -g webpack webpack-dev-server`, get to the root of the project and run
`npm install && npm run dev`.

##App explanation
The idea behind this Angular2 app is creating something together: a GameBoy. Each and everyone of you will implement a part of the gameboy,
like a button, the screen, the speaker, etc.
We will do this by exploiting component based development: every Gameboy part will be a component, and will comunicate with the other 
parts via services, events or input/output parameters. What we will accomplish will depend on how well & fast we implement the diferent 
components and their logic.

##What do you have?
You have a very crude gameboy: no buttons, no interaction, nothing. You have an Angular2 app set up, with a `gameboy` component, which has
a `gameboy-screen`. You also have a `gameboy-logic` service that will act as the "cpu" of the gameboy, and a `gameboy-actions` model that 
will define all the actions you can do via the keyboard.

##What to do next?
I will put a list of the things that we can do next, to start developing our own gameboy:
* Implement the arrows, a, b, start & select buttons and make them send their action to the screen when they are pressed.
* Add a speaker and make it emit some sound when certain button of the gameboy is pressed.
* Add some items, enemies or sprites to the screen, but make the scren component control when and where they appear.
* Add a character and make him move with the arrow keys.
* Add some `game-logic` service that creates some kind of interaction between objects and the character.

If you want to learn more about all the Angular2 capabilities:
* Add some routing: make an "About this project" page that shows some Lorem ipsum.
* Call a service to fetch the "about us" info from the API. (todo)
* Fix some format isues on this text with a filter (todo)
* Make this "about us" (or anything else you want to put here) draggable with an angular2 directive. (todo)





