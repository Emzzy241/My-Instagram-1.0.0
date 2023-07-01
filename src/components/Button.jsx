// THis file is a jsx file and in it we are writing the Button component(reusable bits of code)

// IN the above we used props, let us now use alertText as the argument here 
export const Button = (alertText2) =>{
    // And this button function returns our jsx code(which helps us write js in html and vice versa)
    // We also added an onclick event listener which expects a callback function 
    // And don't forget, a function must always return something
    return(
        <button onClick={()=> alert(alertText2)}>Click Me!</button>
    )
}


export const  Button2 = (props) =>{
    // And this button function returns our jsx code(which helps us write js in html and vice versa)
    // We also added an onclick event listener which expects a callback function 
    // And don't forget, a function must always return something
    return(
        <button onClick={()=> alert(props.alertText)}>Click Me!</button>
    )
} 
// --not yet working
// Remember the export default will export everything in the Button function
// Now let us make our button to print out whatever users wants, we do that ith props... And these are basically paramters & parameters in normal JavaScript function
// props in react(arguments or parameters) functional components are the first argument in the function
// IN the above we have worked with props and we will be alerting whatever user inputs with the props.alertText.... our button component will use whatever props we pass into it(remember we are passing the props in the App.js file)
// export Button
// export default Button2 --The export default only works if there is only one thing in a file and we now what to export it... But when there are multiple things, just remove the default 
