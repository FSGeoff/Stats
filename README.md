# Typesript Application

### Project Set Up
#### The following steps is for the set up to run in Node.js working directly with the Typescript compiler
- npm init -y
- tsc --init
- npm i nodemon concurrently
- create __src__ folder in root diectory
- creat __build__ folder in root directory
- create _index.ts_ file in __src__ folder and create a console.log(‘Hello World’);
- Configure the Typescript compiler to have source code in the src folder, and compiled js files should go in the build folder. Do this by:
 + go into _tsconfig.json_ file </br>
    locate rootDir and uncomment line </br>
    Edit to "rootDir": "./src"</br>
    Locate outDir and uncomment line</br>
    Edit to "outDir": "./build"</br>
- open _package.json_
- go to the scripts section
- Delete the existing test script and replace with:
+   "start:build": "tsc -w", </br>
    "start:run": "nodemon build/index.js", </br>
    "start": "concurrently npm:start:*"
- Go to the terminal and run __npm start__

This will run nodemon and configure your Typescript files concurrently</br>
The following should be displayed in your terminal above your console.log statement

## ​​[start:*run] [nodemon] clean exit - waiting for changes before restart

_Initially, you may have to stop and rerun __npm start__ a few times as nodemon</br> sometimes launches before the Typscript compiler has completed_
