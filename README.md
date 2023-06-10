# Hangman
**Hangman** is a guessing game. One player thinks of a word, and the other tries to guess it by suggesting letters within a certain number of guesses. Originally it's been a Paper-and-pencil game. This is a version based on Vite+React+TS

## Requirements
[Node.js](https://nodejs.org/en) version 12.2.0 or higher installed on your machine. The newest LTS version, e.g. 18.16.0 LTS recommended.  
It's also recommended to install `yarn`, if you don't have it.  
How to check if I have `yarn`?
```
yarn --version
```
How to install `yarn`?
```
npm install -g yarn
```

## Setup
1. clone this repository:
```
git clone https://github.com/marcinru/hangman.git
```
2. install dependencies:
```
yarn
```
3. run the app in dev mode:
```
yarn dev
```
if you are using `powershell` terminal and see `...yarn.ps1 cannot be loaded...` error, try:
```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
```
and then `yarn dev`

4. open your favorite browser at http://localhost:5173/
