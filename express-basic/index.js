import express from "express"
import morgan from "morgan"
const app = express()

const data = {
  "login": "MohdKabir958",
  "id": 174866750,
  "node_id": "U_kgDOCmxBPg",
  "avatar_url": "https://avatars.githubusercontent.com/u/174866750?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MohdKabir958",
  "html_url": "https://github.com/MohdKabir958",
  "followers_url": "https://api.github.com/users/MohdKabir958/followers",
  "following_url": "https://api.github.com/users/MohdKabir958/following{/other_user}",
  "gists_url": "https://api.github.com/users/MohdKabir958/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MohdKabir958/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MohdKabir958/subscriptions",
  "organizations_url": "https://api.github.com/users/MohdKabir958/orgs",
  "repos_url": "https://api.github.com/users/MohdKabir958/repos",
  "events_url": "https://api.github.com/users/MohdKabir958/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MohdKabir958/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 32,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2024-07-06T09:24:07Z",
  "updated_at": "2026-03-22T12:59:48Z"
}

app.use(express.json())
app.use(morgan("dev"))

// This will run for EVERY request
// app.use((req, res, next) => {
//   const time = new Date().toLocaleTimeString();
//   console.log(`[${time}] ${req.method} request to ${req.url}`);
  
//   // This is CRITICAL. Without next(), your app will hang forever!
//   next(); 
// });

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/data",(req,res)=>{
    res.json(data)
})

//dynamic routes

app.get("/user/:id",(req,res)=>{
    res.send(req.params.id)
})

//query params 

app.get("/search",(req,res)=>{
const { name, age, location } = req.query;

  // We check if location exists before printing it
  let message = `Search: Name is ${name}, Age is ${age}`;
  
  if (location) {
    message += ` and Location is ${location}`;
  }

  res.send(message);
})

// post method

app.post("/usersadd",(req,res)=>{
    const user = req.body
    if (!user) {
        return res.status(400).json({ error: "Username is required!" });
    }
    res.status(201).json({
        message : "user received",
        data : user
    })
})

// 404 
app.use((req, res) => {
  res.status(404).send("Page not found");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});

