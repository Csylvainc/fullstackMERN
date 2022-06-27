import Categories from "../models/category.js"

export async function createCategory(name){
    
    const Category = await new  Category(name)
   
    const result = await Categories.save()
    
    return Category
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
    
    .deletOne({name:name})

    return myCategoryDeleted
}