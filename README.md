# Calendar

Pre-requisites:
You will need to have Node and NPM installed on you machine. 

Run: npm init


Now install webdriverio:
$ npm install webdriverio --save-dev

Test Setup
Setup webdriverIO congig file

$ wdio

? Where do you want to execute your tests? On my local machine
? Which framework do you want to use? cucumber
? Shall I install the framework adapter for you? Yes
? Where are your feature files located? ./features/**/*.feature
? Where are your step definitions located? ./features/step-definitions/**/*.js
? Which reporter do you want to use? 
? Do you want to add a service to your test setup? 
? Level of logging verbosity: silent
? In which directory should screenshots gets saved if a command fails? ./errorShots/
? What is the base url? http://localhost

This will install wdio packages and create a config file 'wdio.conf.js' for you.


Install chai(BDD/TDD assertion library for node.js)
$ npm i --save-dev chai


Install Cucumber Deps:
$ npm i -g wdio-cucumber-framework

Install Selenium:
$ npm i selenium-standalone@latest -g


run the tests (in the current directory) using:
$ selenium-standalone install
$ selenium-standalone start