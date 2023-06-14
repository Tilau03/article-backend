import express from "express"


const app = express();

app.get("/", (_req, res) => {
  return res.send("Hola");
});

app.listen(5000,()=>{
    console.log("Server is runing in port 5000")
})