const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
const path = require('path')
const app = express();
const {addTask,getTask,deleteTask} = require("./todo")
app.use(bodyParser.json());
const port = process.env.PORT || 3000;



app.post("/addTask",(req,res) =>{
    const task = req.body.task;
    console.log(task)
    if(task){
        addTask(task);
        res.status(201).json({message: 'Task added successfully'})
    } else{
        res.status(400).json({error: 'invalid task'})
    }

});
app.delete("/deleteTask/:index",(req,res) =>{
    const index = parseInt(req.params.index);
    if(deleteTask(index)){
        res.status(200).json({ message: 'Task deleted successfully'})
    }
})
app.get('/tasks', (req, res) => {
    const tasks = getTask();
    res.status(200).json(tasks);
  });
// app.get('/files',(req,res) =>{
//     fs.readdir(path.join(__dirname,'files'),(err,files) =>{
//         if(err){
//             return res.status(500).json({error:'failed to retrive'})
//         }
//         res.json(files)
//     })
// });
// app.get('/files/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const filePath = path.join(path.join(__dirname,'files'), filename);
  
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         return res.status(404).send('File not found');
//       }
//       res.status(200).send(data);
//     });
//   });

app.listen(port ,() =>{
    console.log(`server is runnoing at port ${port}`)
})

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
  });
module.exports = app;