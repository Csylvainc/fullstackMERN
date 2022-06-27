import Toys from "../models/toy.js"

export async function createToy(name){
    
    const Toy = await new Toy(name)
   
    const result = await Toys.save()
    
    return Toy
}

export async function listToy(){
    const toysList = await Toys
      .find()
    
      return toysList
}

export async function showOneToy(name){
    const myToy = await Toys
    
    .findOne({name:name}).exec()
    
    return myCategory
}
export async function updateToy(name,body){
    const myToyUpdated = await Toys
    
    .findOneAndUpdate({name:name},{name:body})

    return myToyUpdated
}


export async function deleteOneToy(name){
    const myToyDeleted = await Toys
    
    .deletOne({name:name})

    return myToyDeleted
}