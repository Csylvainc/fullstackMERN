import Categories from "../models/category.js"

export function createCategory(name){
    
    const Category = new Categories(name)
   
    const result = Category.save()
    
    return result
}

export async function listCategory(){
    const categoriesList = await Categories
      .find()
    
      return categoriesList
}

export async function showOneCategory(name){
    const myCategory = await Categories
    
    .findOne({name:name}).exec()
    
    return myCategory
}
export async function updateCategory(name,body){
    const myCategoryupdated = await Categories
    
    .findOneAndUpdate({name:name},{name:body})

    return myCategoryupdated
}


export async function deleteOneCategory(name){
    const myCategoryDeleted = await Categories
    
    .deleteOne({name:name})

    return myCategoryDeleted
}