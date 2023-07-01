// this file is where we are bringing the app components and this is where we are also rendering(separation of parts) our app components
// and putting it inside of the root div which is created in the public/index.html file


// And all of this is just how we work with modularization in Javascript. How we import and export files, objects, etc
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Below, ReactDOM is used to create roots and then as an argument to this function, it has document.GetElementById("root").
const root = ReactDOM.createRoot(document.getElementById('root'));

// the line below is rendering our App.js components(bits of code)  inside of the root div which has been saved as a constant variable

root.render(
  <React.StrictMode>
    {/* NOTICE that React components work like tags
       In our App.js file which was created as a function but in the index.js file, here its been called like a regular html tag
        THat is how components are called in react. In React components(bits of reusable code) are called like components

    */}
    <App />
    {/* Next, below the App component, we have React.StrictMode component. We can do without it but it helps us to put in some extra checks in our React Application
      THis is so we don't have bugs that can be avoided in production. We use npm to install packages in REACT
      THe eject script there helps us to work under the hood if we are not satisfied with the generated create-react-app
      We can run the eject script so we have low level access to react apps. We won''t be needing it 99.9% of the time
      And also not that running the eject script is irreversible , once you eject(remove) your application from the create-react-app setup
      you will have to always work with that ejected Application .

      // reportWebVitals.js: An auto generated file(from create-react-app command) and this is used for measuring web performance with our react app
     // we won't be needing this for the instagram application, so we start by deleting it.
      // we will also be deleting the setupTests.js file because we don't need it, its an unnecessary file
      // we also delete the App.test.js file, just to keep our App lean and very understandable
      // For our css file, we need only 1 css file; so we delete the index.css file
      // We also deleted the logo.svg file, we don't need it here too
    */}
  </React.StrictMode>
);
