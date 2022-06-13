console.log("hey Ms.Parker")

const express= require ("express")
const PORT = 3000
const app = express()

//===============================GREETING
// app.get("/greeting", (req,res)=>{
// res.send("Hello World")
// })

// app.get("/greeting/:name", (req,res) => {
//     const name = req.params.name
//     res.send(`<h1> Hello World </h1>
//     <p>${name}, It's so great to see you!</p>
// `)
//     })


  //=============================== Tips
//   app.get("/tip", (req,res) => {
//     res.send("Tip Calculator")
//   })
//     app.get("/tip:total", (req,res) => {
//        const total= req.params.total
//        res.send(`<h1> Tip time </h1>
//        <p>${total} is your bills total !</p>
//    `)
//     })

//     app.get("/tip/:total/:tipPercentage", (req,res) => {
//         const total= req.params.total
//         const tipPercentage = req.params.tipPercentage
//         const totalTipPercentage = req.params.total /req.params.tipPercentage
//         res.send(`<h1> Tip Well</h1>
//         <p> You will pay $${totalTipPercentage} as a tip each for a $${total} bill at ${tipPercentage}%!</p>
//     `)
//     })
//===========================Magic8
const magicResponses=[
"It is certain", "It is decidedly so", 
"Without a doubt", "Yes definitely",
"You may rely on it", "As I see it yes",
 "Most likely", "Outlook good","Yes", 
 "Signs point to yes", "Reply hazy try again", 
 "Ask again later","Better not tell you now", 
 "Cannot predict now", "Concentrate and ask again",
 "Don't count on it", "My reply is no",
  "My sources say no","Outlook not so good",
   "Very doubtful"]

app.get("/magic", (req,res) => {
    res.send("What's Your Question")
})

app.get("/magic:Question", (req,res) => {
    const Question = req.params.Question
    const magicAnswers= magicResponses[Math.floor(Math.random()* magicResponses.length)];
    // const magicAnswer= magicResponses.index
    res.send(`<h1> ${Question} </h1>  
      <p> ${magicAnswers} </p> `)
})

  

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})