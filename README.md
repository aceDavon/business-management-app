# business-management-app

A business management app with issue tracking, customer support system and task management for companies and teams built with React/Redux

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# install dependencies for the app

- @Reduxjs/toolkit
- React-Redux
- axios
- Date-fns(dev dependency)
- React router dom
- tw-elements
- tailwindcss/postcss (dev dependency)

## @Reduxjs/toolkit

### `npm i @reduxjs/toolkit`

Manage app state with reduxjs/toolkit, a modern way of state management with reduxjs.
Comes with most necessary functinalites out of the box; - Redux createStore now congigureStore which takes reducers, middlewares as object arguments - createSlice which takes names of specific actions and reducers for those actions and then create an automatic actions from the reducers of the slice and generates an automated reducer class used in the store.
Comes with out of the box functionalites such as the redux thunk, used as createAsync thunk used for fetching data from APIs.

### `npm i react-redux`

A plugin used to integrate redux with react which comes with functions and hooks for use with react.

### `npm i axios`

A javascript data fetching library used to make calls to APIs and returns an object by default.

### `npm i date-fns`

A devdepency used in formatting dates

### `npm i react-router-dom'

Simplifies navigation with the react application

### `npm i tw-elements`

A tailwindcss plugin for javascript animations and functions used for building great UIs and designs

### `npm i -D tailwindcss postcss` && `npx init tailwindcss`

Installs and publishes the tailwind css package for styling

**Note: on installation, add the following lines of code to the index.css of the src folder**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and then add the following to the tailwindconfig.js in the src folder

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: { extend: {} },
  plugins: [require("tw-elements/dist/plugin")],
};
```

refer to the [tailwindcss with React](https://tailwindcss.com/docs/guides/create-react-app).
to learn more about using tailwindcss with React

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
