console.log("hey Ms.Parker")

const express= require ("express")
const PORT = 3000
const app = express()


app.get("/greeting", (req,res)=>{
res.send("Hello World")
})

app.get("/greeting/:name", (req,res) => {
    const name = req.params.name
    res.send(`<h1> Hello World </h1>
    <p>${name}, It's so great to see you!</p>
`)
    // console.log(req.params)
    // res.send(req.param.name)
    // const name =req.param.name
    // res.render("greeting", {
    //     pageTitle: "Hello World",
    //     pageHeader: `${PORT} It's so great to see you!`
    //  })
    })

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})