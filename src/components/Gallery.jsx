// The Galery component

import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
// import { useState } from "react"; --we used the useLiveQuery hook from dexie here for our images and not the useState hppl from react like we did in the Bio.jsx
import { db } from "../dexie";



const Gallery = () => {

    // In the gallery section, instead of adding images by ourselves, we want to use states to dynamically add them
    // creating a state for adding images dynamically
    // The state here is an array and each phot will have an object that has the keys: id and url
    // the id key will help us delete photos... If we only wanted to add photos, we can use an array of strings; but since we want to be able to delete photos we need an array of object

    // const [allPhotos, setAllPhotos] = useState([])
    
    // using LiveQuery instead of react-states
    const allPhotos = useLiveQuery(() => db.gallery.toArray(), [])

    // The new state for adding ohoto to gallery
    const addPhoto = async () => {
       

        db.gallery.add({
            url: await getPhotoUrl("#addPhotoInput")
        })
    }


    const removePhoto = (id)=>{
        db.gallery.delete(id)

    }

    return (
        // the input tag below is the fiel-input for adding new photos
        // we have the error: JSX expressions must have one parent element.ts(2657) again
        // to fix that, we wrap it in an empty tag(aka a react fragment)
        <>

            <input type="file" accept="image/*" name="photo" id="addPhotoInput" />
            <label htmlFor="addPhotoInput" onClick={addPhoto}>
                <i className="add-photo-button fas fa-plus-square"></i>
            </label>

            <section className="gallery">
                {/* All what the below line of code is doins is: if there are no photos yet, show users the Loading */}
                {!allPhotos && <p>Loading.....</p>}
                {/* Now we want to loop through all photos with
                 Array.prototype.map and this is another way of using the forEach loop

                */}
                {allPhotos?.map((photo) => (

                    // when mapping through elements in react, we also need to give each element a key attribute and this key attribute should be unique
                    // The key attribute we gave it is the id: we expect our id's to be unique
                    <div className="item" key={photo.id}>
                        <img src={photo.url} className="item-image" alt="" />
                        <button className="delete-button" onClick={ ()=> removePhoto(photo.id) }>Delete</button>
                    </div>
                        // console.log(photo);

                        // size of indexdb is the size of your computer; unlike localStorage that has just a maximum of 5mb



                    // What we did above is we mapped through the allPhotos array(an array of objects) and for each element inside of our allPhotos array we are getting photo(the photo in parenthesis represents each element in our allPhotos array of objects)

                ))}


            </section>

            {/* After removing all photos, we need an addPhotoUrl that when we click on the button for adding new photos, the function gets that photo url and then add it to our allPhotos state */}

        </>

        // Our app NOw works fine, but we want to use indexdb(a database in the browser) to save our details, so that when we shut down our Laptop, Our added images are still shown and it does not return back to the default of our react state
        //  the indexdb is great as it stores our bio and gallery contents for us, you can check it our in insoect and click storage
        // buttons under the storage are called object store, you can have as many as possible: there is the bio object store, and gallery object store for storing our gallery and bio 
        // object store are a way to structure your database so you have different info and data and it can be easily understood
        // regular indexdb which Javascript is quite complex but you can learn a 3dr video on it from ebenezerdon's youtube channel
        // But for this app(our instagram app) there is a library we can use instead of the core javascript api for indexdb and its called dexiejs
        // dexiejs is a minimalistic wrapper for indexdb; it makes working with indedb much simpler and much easier than the core javascript API 
        // working with indexdb in react is a smooth process
        // we install 2 new packages(npm install dexie dexie-react-hooks) and dexie-react hooks willhelp us watch for changes in our indexdb database so that when we add or update data in it; it will update our component with that new data 

        )
}

export default Gallery


// Now after the Gallery component(the last component) has been written we want to use states in react
// states are just like your normal Javascript variables that are capable of dynamically changing
// the value of a variable without having to refresh the page...
// With the state in react, you get to change your static website into a dynamic one wthat responds to changes you've made
// The difference in normal variables and states in react is that: react components will watch for changes in that state
// so that if the value of our state changes, our component will also have to update to reflect the new value
// If you tried using Javascript normal variable instead of states, it won't work and nothing happens
// And that is why the react framework is called react: our components react to changes in our application
// So if instead of creating a variable to firstly store the initial value for our button we created a react state
// to store the initial value(click Me!) whenever we update it(i.e we click on it), the value of the button is also going to change to whatever we update it to

// To create a state in react, react has a hook names: usestae which we need to import to enable us use it
// When we call on the useState function it returns an array and the values of that array are:
// 1. The actual value of our button which is (click me!) --- THat is the first value
// 2. The second element in the array is a function which we use to update our arrays


// In react, hooks are like your normal Javacript functions and they can be called like a function
// A great example of an hook is the useState hook we want to use for changing the state of a react component whenever an action is carried out.
// hooks are called hooks because they were built as a functionality extension to the initial react(which worked with only classes ad its quite difficult to understand)

// In old react codebase, you see a lot of class based components instead pf functional components which is what we are using
// Thanks to react hooks, we are able to get all of the functionalities we will have gotten using class based ocmponents
// Thanks to states we are able to update our react component dynamically without having to reload our page


// After adding in states to react component, when we try it in the browser; once user clicks us save... the updateUserDetails() function gets called
// and this updateUserDetails() function helps us to update our states and our components to reflect a new value








 // const newPhoto = {
        //     id: Date.now(),
        //     url: await getPhotoUrl("#addPhotoInput"),
        // }

        // // The spread operator was used to get all of the data inside our allPhotos state
        // // spreading takes out each element inside of the allPhotos array then add each of them to this new array which we have created below
        // // so the value of setAllPhotos will be our newPhoto first of all(the newPhoto object) and every other photo that has been created inside the allPhotos state

        
        //                 // When we add in a new image, it will be appended to the already exiting images
        // setAllPhotos([newPhoto, ...allPhotos])