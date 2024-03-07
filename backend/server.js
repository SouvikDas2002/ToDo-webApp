const express = require("express");
const app = express();
require("dotenv").config();
const DB = require("./mongodb/connection");
const PORT = process.env.PORT || 4000;
DB();
const todo = require("./models/Todo");
const cors=require("cors");

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.post("/addTask", async (req, res) => {
    try {
      const task = req.body.task;
      console.log(task);
    let curr=await todo.create({
      tasks: task,
    });
    res.redirect('/getTasks')
    // res.status(200).json(curr);
  } catch (err) {
    console.log(err);
  }
});
app.get('/getTasks',async(req,res)=>{
    try{
    let tasks=await todo.find();
    res.status(200).json(tasks);
    }catch(err){
        console.log("problem in fetch data");
    }
})
app.put('/update/:id',async(req,res)=>{
    let id=req.params.id;
    let y=await todo.findByIdAndUpdate({_id:id}, {done:true})
    res.json(y);
})
app.delete('/remove/:id',async(req,res)=>{
    let id=req.params.id;
    let x=await todo.findByIdAndDelete({_id:id});
    res.json(x);
})

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Your server is running on port ${PORT}`);
});
