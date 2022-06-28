import express from 'express'
import { createToy, listToy,showOneToy,updateToy,deleteOneToy} from '../controller/toys.js';
const routerToys = express.Router()
routerToys.use(express.json())
routerToys.use(express.urlencoded({ extended: true }))

routerToys.get('/', async (req, res) => {
    let toys = await listToy()
    res.json(toys);
})

routerToys.get('/:name', async (req, res) => {
    let toyName = await showOneToy(req.params.name)
    res.json(toyName)
})

routerToys.post('/', async (req, res) => {
    const newToy = await createToy(req.body)
    res.send('ok')
})

routerToys.put('/:name', async (req, res) => {
    console.log(req.params.name);
    let updateOneToy = await updateToy(req.params.name,req.body)
    res.send(updateOneToy)
        });


routerToys.delete('/:id', function (req, res) {
    let deletOne= deleteOneToy(req.params.id)
})
export default routerToys