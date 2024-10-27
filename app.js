const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb+srv://Jyotishkumar:Jyotish123@dev-clustor.1mynx.mongodb.net/stagevibes");

const app = express();
const port = 3001;
app.use(cors());


const studentSchema = new mongoose.Schema(
    {
        name:String,
        class:String,
        roll: Number,
        email: String,
        mobile:Number,
        event:String
    }
)

const forms = mongoose.model("form",studentSchema)



app.get('/', async(req, res) => {
    let data = await forms.find()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})