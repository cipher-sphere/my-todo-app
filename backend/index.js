const express = require('express');
const {todo} = require("./db");
const cors = require("cors")
const {createTodo,updateTodo} = require("./types")
const app = express();

//middlewares
app.use(express.json());
app.use(cors())


app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

// app.get('/todos',function(req,res){
//     res.json({
//         todo: {}
// })
// }) wrong

app.get('/todos',async function(req,res){
    try{
        const todos = await todo.find();
        res.json({
            todos:todos
        });
    } catch (error){
        res.status(500).json({
            msg:"error fetching todos",
        });
    }
});

// app.put('/update',async function (req,res){
//     const updatePayload = req.body;
//     const parsedPayload = updateTodo.safeParse(updatePayload);
//     if (!parsedPayload.success) {
//         res.status(411).json({
//             msg: "You sent the wrong inputs",
//         })
//         return;
//     }

//     await todo.update({
//         _id:req.body.id,
//         completed:true
//     })
//     res.json({
//         msg:"marked as completed"
//     })
// })
app.put('/update', async function (req, res) {
    const updatePayload = req.body;

    // Validate using Zod schema (if you're using zod)
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs",
        });
    }

    try {
        const updated = await todo.findByIdAndUpdate(
            updatePayload.id,
            { completed: updatePayload.completed },
            { new: true } // Returns the updated document
        );

        if (!updated) {
            return res.status(404).json({
                msg: "Todo not found"
            });
        }

        res.json({
            msg: "Marked as completed",
            todo: updated
        });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }
});



app.listen(3000,()=>{
    console.log("Server is running");
})