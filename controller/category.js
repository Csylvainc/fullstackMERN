import {Category} from "../models/category.js"

export async function createCategory(name){
    
    const category = await new  Category(name)
   
    const result = await category.save()
    
    return category
}

export async function listCategory(){
    const categories = await Category
      .find()
    
      return categories 
}

export async function showOneCategory(name){
    const myCategory = await Category
    
    .findOne({name:name}).exec()
    
    return myCategory
}
export async function updateCategory(name,body){
    const myCategoryupdated = await Category
    
    .findOneAndUpdate({name:name},{name:body})

    return myCategoryupdated
}


export async function deleteOneCategory(name){
    const myCategoryDeleted = await Category
    
    .deletOne({name:name})

    return myCategoryDeleted
}