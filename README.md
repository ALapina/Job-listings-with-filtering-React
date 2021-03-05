# Job listings with filtering - React

**WORK IN PROGRESS!!!!!!!**

Live: https://alapina.github.io/Job-listings-with-filtering-React

There is still a LOT of work to do! But for now main React logic is done! Just need to clean my code and think on optimization and ask for code review

Challenge: https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt

Example how it must work: https://bobmatyas.github.io/fm-filter-list/

TODO:

- Refactoring, optimization. Probably need to do something with filter panel (Object.entries.map https://stackoverflow.com/questions/46187518/object-entries-map-to-render-react-components-array )
- Styling and structuring
- Testing with Cypress, also CI with Cypress would be good https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI
- Unit testing?
- Maybe put data on firebase and make api requests, just for practise?

! Пришлось json отредактировать url к svg - убрать точку в начале.
Переместить images в public
и вызывать картинки вот так
<img src={process.env.PUBLIC_URL + logo} />

https://create-react-app.dev/docs/using-the-public-folder/

https://forum.freecodecamp.org/t/display-image-from-local-json-js-object-using-react/408351/7
