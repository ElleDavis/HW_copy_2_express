console.log("hey Ms.Parker")

const express= require ("express")
const PORT = 3000
const app = express()


// app.get("/greeting", (req,res)=>{
// res.send("Hello World")
// })

// app.get("/greeting/:name", (req,res) => {
//     const name = req.params.name
//     res.send(`<h1> Hello World </h1>
//     <p>${name}, It's so great to see you!</p>
// `)
//     })
  //tips
  app.get("/tip", (req,res) => {
    res.send("Tip Calculator")
  })
    app.get("/tip:total", (req,res) => {
       const total= req.params.total
       res.send(`<h1> Tip time </h1>
       <p>${total} is your bills total !</p>
   `)
    })
//     app.get("/tip:tipPercentage", (req,res) => {
//         const tipPercentage = req.params.tipPercentage
//         res.send(`<h1> Tip Percentage</h1>
//         <p> you will each be paying a ${tipPercentage}% tip!</p>
//     `)
//    })
    app.get("/tip/:total/:tipPercentage", (req,res) => {
        const total= req.params.total
        const tipPercentage = req.params.tipPercentage
        const totalTipPercentage = req.params.total /req.params.tipPercentage
        res.send(`<h1> Tip Well</h1>
        <p> You will pay $${totalTipPercentage} as a tip each for a $${total} bill at ${tipPercentage}%!</p>
    `)
    })
  

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})