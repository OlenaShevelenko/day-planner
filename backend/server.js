const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const routes = require ('./PlannerRoutes');
const cors = require ('cors');


require ('dotenv').config();

mongoose.set ("strictQuery", false);

const PORT = 5000 || process.env.port

app.use(express.json())
app.use(cors())

mongoose
.connect (process.env.MONGODB_LINK)
.then ( () => console.log ("We're connectted  to Mongo"))
.catch ( (err) => console.log (err))

app.use(routes);

app.listen ( PORT, () =>{
    console.log (`I am listenning om port ${PORT}`)
})

// day_planner k080VaNxZL16NK8w
// mongodb+srv://<username>:<password>@cluster0.9ifsqzf.mongodb.net/?retryWrites=true&w=majority