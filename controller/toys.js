import Toys from "../models/toy.js"

export async function createToy(name){
    
    const Toy = await new Toys(name)
   
    const result = await Toy.save()
    
    return result
}

export async function listToy(){
    const toysList = await Toys
      .find()
    
      return toysList
}

export async function showOneToy(name){
    const myToy = await Toys
    
    .findOne({name:name})
    
    return myToy
}

export async function updateToy(name, body) {
    return await Toys.findOneAndUpdate({name:name}, {...body})
}

export async function deleteOneToy(name){
    const myToyDeleted = await Toys
    
    .deleteOne({name:name})

    return myToyDeleted
}