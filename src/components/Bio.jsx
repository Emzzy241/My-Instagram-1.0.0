// creating a Bio(biography) component
// Never forget: Reat is all about breaking our huge application into bits of code
// Always remember that components in javascript are starts with capital letter
import profileIcon from "../assets/images/profileIcon.svg";
import { useEffect, useState } from "react";
import getPhotoUrl from "get-photo-url";
import { db } from "../dexie";

// NEVER FORGET: to make use of variables inside of a jsx, you have to wrap it in curly braces
const Bio = () => {
    // down below we worked with destructuring variables which helps us create multiple variables without having to repeat ourselves
    // now that we have 2 variables... First one which is the valueOfButton variable is the actual value of our button
    // and the 2nd element in the array is the function we will be using to update our state 
    // const [valueOfButton, setValueOfButton] = useState("Click Me!");
    // working with states in react: a way react components dynamically listen for changes we've made and make those changes for us
    // console.log(valueOfButton[1]);

    // Again we are destructuring our react state which is an array variable. And by altering the 1st value which is the name of the state and the 2nd element which is a function for updating the state 
    // Always try to use descriptive variable names: the 1st below is tells us its a variable for storing user details and the 2nd tells us its a method/function for altering that userDetails
    // We passed in an object into our useState Function instead of strings.. Objects are great as they have key and values
    const [userDetails, setUserDetails] = useState({
        name: "Mojiboye Emmanuel",
        about: "Building React Applications - React helps to dry code."
    });
    // Above I gave my keys(name and about) an initial value that can be changed later



    // Now I want to make the edit form show only when users click on edit, and also make it disappear after user has added their details and clicked on save
    // By default, we want them to be false and only be true when user clicks on edit button, and we also turn them back to fase when user updates and save their details 
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)

    // Instead of using a default photo for our profile photo, we will use a state instead
    // don't forget that a react tate takes 2 things: 1. The name of the state, 2. the function for updating the state
    // THe default value for our profilePhoto state is now profileIcon
    const [profilePhoto, setProfilePhoto] = useState(profileIcon)



    // using a use effect hook from react for calling asynchronous function using the useEffect hook 
    useEffect(() => {
        const setDataFromDb = async () => {
            // the useEffect hook will be the first function that loads when our component loads up
            const userDetailsFromDb = await db.bio.get('info')
            const profilePhotoFromDb = await db.bio.get('profilePhoto')
            // a condition that only runs if userDetailsFromDb already exists
            userDetailsFromDb && setUserDetails(userDetailsFromDb)
            profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)

        }

        setDataFromDb()
    }, [])


    // Another note about hooks is that they can only be called inside of a React component, if they are called outside of it, it throws an erro
    // WE cannot call hooks outside a react component



    // Creating a function that updates our states when user enter name and about and clicks on saves -- we will be using the setUserDetails state
    // This function will only be called when user clicks on the save button to save his details(his name and about)
    // As yiu can see that the submit buttons automatic reloading behaviour was prevented here in react too

    const updateUserDetails = async (event) => {
        event.preventDefault();
        const objectData = {
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value
        }
        console.log(objectData);

        setUserDetails(objectData)
            // Now we are updating the name of user by targeting the input name="nameOfUser"
            // event is our function's argument and we can now use that to target the name and about value of user
            

            // NOTE: the id attribute on the input tags can also be used but that one will now be: document.querySelector or document.getElementById and then get the value
            // Emmanuel is good in jQuery(a javascript library)... We can also replace document.getElementById with $("#")

        
        // We want to close the edit form when we have successfully updated user details, and we do that like this:
        //    updating our bio object store
        await db.bio.put(objectData, "info")

        setEditFormIsOpen(false)
    }

    // NOTE: .put() is to change the contents of our index database
    // .get() is to get something from our database, and
    // .delete() is to delete something from our database(and for the gallery component section we are using the image's id to delete the image)



    // Next is to add an onClick() event listener to the icon so that once we click on it and choose any picture, that will update to our profile image
    // To do it we create a new function for updating our profile image and we named it: updateProfilePhoto
    const updateProfilePhoto = async () => {
        // Making our function an async function 
        const newProfilePhoto = await getPhotoUrl("#profilePhotoInput")
        setProfilePhoto(newProfilePhoto)

        // profilePhoto is now the primary key
        await db.bio.put(newProfilePhoto, 'profilePhoto')

        // what we will do here is to get the selected photo(whatever photo that user selects) and then we want to use state to store our photo

        // Since we can now set the profile photo, how do we get the selected photo in the first place
        // we need a javascript reader class that will let us read the content of our selected files
        // To simplify the process, Ebenezer don created a package named: get photo url and we install it using(npm install get-photo-url) and this package helps us get the photo url.
        // After installing it, All we just have to do is call it(call the getPhotoUrl() method) and pass in the id of our file input tag and that gets us the url of whatever selected file we have chosen
    }




    // putting jsx inside normal javascript file for our edit form 
    // what we did below with our edit form is us putting jsx  as a value of a javascript variable... we wrap it in a parenthesis
    const editForm = (

        // Inside our form below we add an onSubmit event listener to the form tag so it can return our updateUserDetails function
        // We used e an event(as the onSubmit() event listener argument) and passed it inside of our onSubmit function which was also added to our form tag

        <form action="" className="edit-bio-form" onSubmit={(e) => updateUserDetails(e) }>
            {/* We give our input field an id and we will use that to get the value from this input to edit the form */}

            <input type="text" id="" name="nameOfUser" placeholder="Your name" defaultValue={userDetails?.name} />
            <input type="text" id="" name="aboutUser" placeholder="Your bio" defaultValue={userDetails?.about} />
            <br />

            {/* the reason for making the below buttons a submit button is so that our event.target object will reference the right name for nameOfUser and aboutUser
                A new update has been made whenever we click on the cancel button to mak our edit form dissappear(i.e setEditForm = false)
            */}

            <button type="button" className="cancel-button" onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    )


    // making our code neater by storing the button in a variable
    const editButton = <button className="edit" onClick={() => setEditFormIsOpen(true)}>Edit</button>


    // once again we are returning a jsx code 
    return (

        <section className="bio">
            {/* Now we want to set dynamic images with react i.e when we click on the profile icon we are able to edit the photo
                what we did down below in the accept attribute for the input tag is to tell our input tag to accept only images and all images
            */}

            <input type="file" name="photo" id="profilePhotoInput" accept="image/*" />
            {/* Next we wrap the div(which contains our current profile icon) below in label tag 
                In the css we are hiding the input tag wuth id of profilePhotoInput, but the label will stand in its place so that we will see this label instead of the input tag
                When you now go to the browser ad click the profile icon, you now have the file picker

            
            */}

            {/* Passing the onclick event listener for labelL and since it takes no argument, we don't need the arrow function here, it throws an error */}
            <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>

                <div className="profile-photo" role="button" title="Click to edit photo">
                    {/* the emmet function in vscode is the stuff that lets you write a tag and give it a class simultaneously(just like: div.profile-photo)... I also gave my div a button role(i.e: yes, its a div but its performing the role of a button) 
                        In The div.profile-photo above: We made it our profile photo so you can easily click on it and change the profile photo 
                        The title attribute is the cool hover effect that can change the picture...
                        Inside this tag is where we will now have our img tag

                        Below, I would like to have a default icon image for user profile which will appear there when user deletes/removes their profile photo
            

                        Since we now have a state for our profile photo, we can update the image tag
                        And instead of the src being profileIcon, we now pass in our state
                        The value of src below is a react state
                    */}

                
                    <img src={profilePhoto} alt="profile" />
                </div>


            </label>

            {/* For all the text inside of our biography */}
            <div className="profile-info">
                {/* working with objects instead of strings and geeting the name and about keys */}
                <p className="name">{userDetails?.name}</p>
                <p className="about">{userDetails?.about}</p>
                {/* Now we passed in the new value we want our button to have when users click on it(we used an onlcick event) 
                <button className="edit" >Edit</button>

                */}

                {/* To ensure our edit button is not showing when user wants to update the details, we now add our entire button into the ES6 syntac condition... 
                So now instead of showing nothing when the setEditFormOpen is not true, we show the edit button */}

                {/* After setting the function setEditFormOpen = true, the next thing to do is only show our edit form when editFormIsOpen = true */}

                {/* We can go ahead and create the edit form with a normal html form tag, but let us do it another way by putting jsx inside normal javascript variables 
                    Now since we now have a state for the edit form, we updated the down part to work with conditions(NOTICE: the syntax down below is an ES6 way of writing if and else statement)
                    We are saying if editFormIsOpen = true, then show the editForm(the form for updating user name and bio) but if its not opened(i.e editFormIOpen = false) then you show nothing('')
                */}

                {/* the new update will now make the edit button show whenever the editForm is not  */}
                {editFormIsOpen ? editForm : editButton}
                {/* Calling the editForm js variable that we stored jsx in it  */}
            </div>

        </section>
    )
}

export default Bio
