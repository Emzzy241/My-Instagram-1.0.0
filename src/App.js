// App.js file houses our app components
// components in react are reusable bits of code 
// multiple components can be added and then they will be exported on the last line
// components are how the app functions are created.
// The Button component I just wrote will also be imported

// I left this one here just so I can learn it later instead of deleting it like Ebenezer on Youtube did
// import { Button,  Button2 } from  './Button';

import './App.css';
// importing the Nav and Bio components I have written and exported all of them once inside the index.js file
import { Nav, Bio, Gallery } from "./components/index";

// Right here we have our App.js file which was created as a function but in the index.js file, its been called like a regular html tag
// Inside the App() function is where we are creating our app components, and components in react apps are functions
// there are also react apps that use classes instead of functions(that was the old way to work with react).... Right now, every modern react apps use functions
// we made it an arrow function and saved it in a variable
// const App = () => {
// practicalizing jsx below, I create a variable and inside the return and we can go ahead and use this variable inside of our jsx code(which is in the return keyword brackets)
// to be able to use js inside of htmlm we wrap the js insde curly braces
// const name = "Jon Doe"
// return (
//   // NOTe: in your regular html, you'll see class instead of className, but in React its the opposite (you see className instead of class)
//   // React simply uses jsx which is an extended Javascript.... jSX is a way to write html inside of js and js inside of html

//   <div className="App">
//     <header className="App-header">
{/* <h1>
          Hello {name}
        </h1> */

  /* since we have now changed from alert("Hola") to props.alertText... We need to addd in alertText into where we are calling the button */
}

/* <Button alertText2="Hey"/> */
/* <br /> */
/* <Button2 alertText="Hello, Everyone"/> */
/* React components are reusable and can also be customized, we first wrote the code for the Button component and here passed it a certain paramter; we can chose to change the parameter if we want to  */


/* this is mostyly what you will see in a lot of react code base(writing jsx which is writing js inside of html) */


/* Lets create other components(Note that component names start with Capital letters which enables us differentiate components from ordinary js file)
        eg: index.js is not a javascript component and so it starts with small letters, but App.js is a react component and so it starts with capital letters.
        We can use both the .js and .jsx extension... But with .jsx extension you are very sure that this is a component

        Let us create a button component(don't forget to make it capital letters) inside our source folder
      */


/* </header>
  </div> */


















{/* The above was all about learning react, now its time to create our instagram clone
          From the look on our instagram, we know that we have 3 components; the navigation, biography, and the gallery component
          // we deleted the Button.jsx file but I only left it there for future learning
        

  /* using our Nav component we have just written... First we import it and then we use it down below */ }

const App = () => {
  return (
    // Fixing the error: JSX expressions must have one parent element.ts(2657) that came up when I was trying to remove the Nav vomponent from the container parent div
    // I can do it either by creating a parent div for all or them or with react fragments
    // In the past, to create a react-fragment we will need to do React.Fragment but now we can easily just use(an empty tag) <></>
    // React fragments is great as it prevents us from using more divs

    <>
      <Nav />
      <div className='container'>
        {/* calling our Nav component after importing it... Also note that this is how we will also create a biocomponent for biography in our bio.jsx file */}
        <Bio />

        {/* Calling our Gallery lie a regular html component */}
        <Gallery />

      </div>

    </>

  )
}


export default App
