require("dotenv").config();
const express = require("express");
const https = require("https");

const app = express();
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req,res)=>{
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
  https.get(url, (response)=>{
    response.on('data', (d)=>{
      d = JSON.parse(d)
      
    })
  })

})

   
app.listen(80, () => console.log("Server is running at port 80"));
