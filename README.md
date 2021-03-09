# 🚚 Job listings with filtering - React

![Design preview for the Job Listings coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

This is my solution to the [Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) challenge.

## 🔗 Live Link / Demo Link:

- https://alapina.github.io/Job-listings-with-filtering-React

- Link to Vanilla Solution
  - [JS Vanilla version](https://github.com/ALapina/Job-listings-with-filtering-JavaScript)

## 🛠 Technologies Used:

- Accessible
- CSS Tailwind ❤️
- React.js with hooks
- [GitHub action](https://github.com/JamesIves/github-pages-deploy-action) for automatically deploying project to GitHub pages.
- Responsive design

## 📚 Challenging parts:

1. https://reactjs.org/docs/faq-functions.html#arrow-function-in-render
   https://reactjs.org/docs/hooks-reference.html#usecallback
   useCallback

1. In data.json there is element logo which contains path to the local file with svg image. But it's local url path and react don't want to render svg image from local file. So my solution - put image folder in public folder, edit data.json (remove first dot in every url) and add `process.env.PUBLIC_URL` to create correct absolute path to the svg image.
   - Example:`<img src={process.env.PUBLIC_URL + logo} />`
   - https://create-react-app.dev/docs/using-the-public-folder/
   - Another option is how to solve the problem with displaying a local svg image in react: https://forum.freecodecamp.org/t/display-image-from-local-json-js-object-using-react/408351/7

## 🐢 Stuff I would like to add later:

- Testing with Cypress, also maybe add Cypress to CI with Github actions https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI
- useCallback https://reactjs.org/docs/hooks-reference.html#usecallback https://reactjs.org/docs/faq-functions.html#arrow-function-in-render
- React.memo https://ru.reactjs.org/docs/react-api.html#reactmemo
