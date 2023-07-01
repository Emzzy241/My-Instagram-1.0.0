// THis is where we will be creating our indexdb database using dexie

import Dexie from 'dexie'

// creating our database
// calling our new database: myInsta -- using the core javascript instead of indexdb will be much less straight forward than this

export const db = new Dexie("myInsta")

// creating our oject stores
db.version(1).stores({
    bio: ',name, about',
    gallery: '++id, url'
})

// the number in parenthesis(1) is the version number for our database; we need version number for our database so that if we decide to update the structure of our database later on, instead of having name and about, we can add in other things like usersFavourite in it
// the version number can only go higher and not lower
// in the dexiejs object store, the first value will be its primary key; we will use that primary key whenever we want to update a particular object(data or image) in our object store
// we use the primary key id to get an image and make changes to it
// to make the primarykey automatically update whenever we add a new object to our gallery object store and we do that by adding: (++id, url) this auto increments whenever we add in a new ohoto to our gallery
