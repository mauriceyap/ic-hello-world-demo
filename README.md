# Getting started with React

This is a demo React project which builds a bare-bones web app which displays the latest Bitcoin price.

## What you need
- Node.js installed on your machine - this is a JavaScript runtime.
  - macOS: `brew install node`
  - Ubuntu/Debian: `sudo apt update && sudo apt install nodejs`
  - Windows or anything else: [https://nodejs.org/en/download](https://nodejs.org/en/download)
- A decent text editor. Visual Studio Code and Atom are good choices. IntelliJ also works well with the appropriate plugins installed.

## Initialise the app
In your home directory, or the place you have your coding projects:
```
npx create-react-app bitcoin-price
```
This creates a skeleton React project in `bitcoin-price/`.

## Installing third-party libraries
You will install third-party libraries using npm (Node Package Manager). We will use just one third-party library in this demo project - React Router - which will handle all our page routing. You can install other libraries in the same way.

In the `bitcoin-price/` directory where you project is:
```
npm install react-router-dom
```

## Hosting it on the web
We will use [Netlify](https://www.netlify.com/) to host our React app on the web so that everyone can access it.

It's free for personal projects and all you need is a GitHub account.