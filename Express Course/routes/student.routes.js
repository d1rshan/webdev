import express from "express"

const router = express.Router()

router.get('/', (req,res) => {  
    res.send("All students")
})

router.post('/', (req,res) => { // usually to better organize we do '/create' for post 
    res.send("Create student")
})

router.put('/', (req,res) => { // and '/update' for update
    res.send("Update student")
})

router.delete('/', (req,res) => {
    res.send("Delete student")
})

export {router}

// we also use controllers to group the logic of functions for each request