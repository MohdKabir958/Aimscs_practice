// import express from "express"
// import morgan from "morgan"

// const app = express()


// app.use(express.json())
// app.use(morgan("dev"))


// const data = {
//   "login": "MohdKabir958",
//   "id": 174866750,
//   "node_id": "U_kgDOCmxBPg",
//   "avatar_url": "https://avatars.githubusercontent.com/u/174866750?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/MohdKabir958",
//   "html_url": "https://github.com/MohdKabir958",
//   "followers_url": "https://api.github.com/users/MohdKabir958/followers",
//   "following_url": "https://api.github.com/users/MohdKabir958/following{/other_user}",
//   "gists_url": "https://api.github.com/users/MohdKabir958/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/MohdKabir958/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/MohdKabir958/subscriptions",
//   "organizations_url": "https://api.github.com/users/MohdKabir958/orgs",
//   "repos_url": "https://api.github.com/users/MohdKabir958/repos",
//   "events_url": "https://api.github.com/users/MohdKabir958/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/MohdKabir958/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": null,
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 32,
//   "public_gists": 0,
//   "followers": 2,
//   "following": 3,
//   "created_at": "2024-07-06T09:24:07Z",
//   "updated_at": "2026-03-22T12:59:48Z"
// }

// app.get("/",(req,res)=>{
//     res.send("Hello Express")
// })

// app.get("/about",(req,res)=>{
//     res.send("about ")
// })

// app.get("/data",(req,res)=>{
//     res.json(data)
// })

// // params capturing 

// app.get("/user/:id",(req,res)=>{
//     res.send(req.params.id)
// })

// //query parameters

// app.get("/search",(req,res)=>{
//    const {name ,age } = req.query
//     res.send(`Your name is ${name} and age is ${age}`)
// })

// app.post("/add-user",(req,res)=>{
//     const user = req.body
//     res.status(201).json({
//         message :"POST request completed",
//         data : user 
//     })
// })



// app.listen(3000,()=>{
//     console.log(`Server is listening on 3000`)
// })


// Student Server CRUD

import express from "express"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

const students = [
    {id:1,name:"Alice",age:20},
    {id:2,name:"Bob",age:22},
]

//get all students

app.get("/get-students",(req,res)=>{
    res.send(students)
})

// get student by id

app.get("/student/:id",(req,res)=>{
    const id = req.params.id
    const student = students.find(s=>s.id == id)
    if(student){
        res.send(student)
    }
    res.status(404).send("Student not found")
})

//post student 

app.post("/create-student",(req,res)=>{
    
})