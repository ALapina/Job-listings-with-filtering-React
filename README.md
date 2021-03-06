# 🚚 Job listings with filtering - React

![Design preview for the Job Listings coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

This is my solution for [Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) challenge.

## 🔗 Live Link / Demo Link:

- https://alapina.github.io/Job-listings-with-filtering-React

- Link to Vanilla Solution
  - [JS Vanilla version](https://github.com/ALapina/Job-listings-with-filtering-JavaScript)

## 🛠 Technologies Used:

- Accessible
- CSS Tailwind ❤️
- React.js with hooks
- Responsive design

## 🐢 TODO:

- Testing with Cypress, also CI with Cypress would be good https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI
- Unit testing

## 📚 Challenging parts:

1. In data.json there is element logo which contains path to the local file with svg image. But it's local url path and react don't want to render svg image from local file. So my solution - put image folder in public folder, edit data.json (remove first dot in every url) and add `process.env.PUBLIC_URL` to create correct absolute path to the svg image.
   - Example:`<img src={process.env.PUBLIC_URL + logo} />`
   - https://create-react-app.dev/docs/using-the-public-folder/
   - Another option is how to solve the problem with displaying a local svg image in react: https://forum.freecodecamp.org/t/display-image-from-local-json-js-object-using-react/408351/7
