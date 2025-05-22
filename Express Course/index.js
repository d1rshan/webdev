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

// Best way - router
import {router as studentRouter} from "./routes/student.routes.js"

app.use("/students",studentRouter)

// alr next concept - Route params, multiple params also possible
app.get("/products/:id", function (req,res){
    // or destructre: const {id} = req.params; & req.send(id) 
    res.send(req.params.id)
})

// next concept - Query string - to send client inputs to server from url
// when we send get request on http://localhost:8000/products?category=iphone
// we get response as iphone
// multiple queries possible (using &) like http://localhost:8000/products?category=iphone&id=12
app.get("/products",(req,res) => {
    // or we can destructure: const {category} = res.query & res.send(category)
    res.send(req.query.category)
})


// alr next -> sending data from server to client
app.get("/product/af1", (req,res) => {
    const product = { title: "Nike AirForce 1", price: "$99.99"}
    res.json(product)
})

// lets move on to middlewares 
// intro
/* eg:
    REQUEST (requesting for profile info of the user, we send required data)

    MIDDLEWARE (to validate user credentials & allow response only if they are valid)
    
    RESPONSE (respond safely now)
*/
function userCredentials(req,res,next){
    // assume this data is coming from the request
    console.log("username: (alex)")
    console.log("email: (alex17@gmail.com)")
    console.log("password: (alex1212133)")
    next()
}

// we can pass the middleware directly inside the get request for the path
app.get("/profile",userCredentials,(req,res) => {
    res.send("Profile info")
})

// or to use it for all the requests
// we use app.use(userCredentials) - so this allows for every route whether the user has access or not ie ensures security

/*
app.get("/",validateUser,homeController)
so here both validateUser and homeController has parameters (req,res,next)
and we call validateUser as a middleware but what actually is we are using the multiple call back syntax for this purpose and calling it "middleware"
and we use next to pass control
*/


//  DONE ✅🔥🔥‼️🗣️ app.use(express.static()) -> to serve static files (html,images..) allows res.sendFile(file) & ejs skipped

app.listen(8000, () => {
    console.log(`Server listening on port 8000...`);
})