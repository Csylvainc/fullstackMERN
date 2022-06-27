import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = 3000


// connection à la bdd mongodb
main().catch(err => console.error(err))
async function main() {
    await mongoose.connect('mongodb+srv://hannah:TBlIyaXZd1aS1wgh@cluster0.aailhd7.mongodb.net/santa_magical_world?retryWrites=true&w=majority');
    console.log("connection réussi");

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})

  