import mongoose from 'mongoose';
import express from 'express';
import routerCat from './routes/catégories.js';
import routerToys from './routes/toys.js';
const app = express()
const port = 5000
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/toys',routerToys)
app.use('/categories',routerCat)

// connection à la bdd mongodb
main().catch(err => console.error(err))
async function main() {
    await mongoose.connect('mongodb+srv://hannah:TBlIyaXZd1aS1wgh@cluster0.aailhd7.mongodb.net/santa_magical_world?retryWrites=true&w=majority');
    console.log("connection réussi");

}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})

  