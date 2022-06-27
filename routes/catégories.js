import express from 'express'
import { createCategory, listCategory,showOneCategory,updateCategory,deleteOneCategory} from '../controller/category.js';
const routerCat = express.Router()
routerCat.use(express.json())
routerCat.use(express.urlencoded({ extended: true }))

routerCat.get('/', async (req, res) => {
    let categories = await listCategory()
    res.json(categories);
})

routerCat.get('/:name', async (req, res) => {
    let catName = await showOneCategory(req.params.name)
    res.json(catName)
})

routerCat.post('/', async (req, res) => {
    const newCat = await createCategory(req.body)
    res.send('ok')
})

routerCat.put('/:name', async (req, res) => {
    console.log(req.params.name);
    let updateCat = await updateCategory(req.params.name,req.body.name)
        });


routerCat.delete('/:id', function (req, res) {
    let deletOne= deleteOneCategory(req.params.id)
})
export default routerCat