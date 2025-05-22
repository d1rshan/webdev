import express from "express"


const app = express()

app.get('/',(req,res) => {
    res.send("HOME")
})

// double call back
app.get('/double-cb',(req,res,next) => {
    console.log("From first call back to console")
    next() // imp - allows to jump to the next callback
}, (req,res) => {
    res.send("Second call back to browser")
})

// array of call backs 
const cb1 = (req,res,next) => {
    console.log("First callback")
    next()
}
const cb2 = (req,res,next) => {
    console.log("Second callback")
    next()
}
const cb3 = (req,res,next) => {
    console.log("Third callback")
    res.send("Array of Call backs")
}

app.get("/array-cb",[cb1,cb2,cb3])
// we can combine both the array of call backs and the comma seperated call backs

// UGLY CODE - we are repeating the path /student
/* 
app.get('/student', (req,res) => {
    res.send("All students")
})
app.post('/student', (req,res) => {
    res.send("Create student")
})
app.put('/student', (req,res) => {
    res.send("Update student")
})
 */

// Refactor - Better way but not the best option
/*
app.route('/student')
.get((req,res) => res.send("All students"))
.post((req,res) => res.send("Create student"))
.put((req,res) => res.send("Update student"))
.delete((req,res) => res.send("Delete student"))
*/

app.listen(8000, () => {
    console.log(`Server listening on port 8000...`);
})