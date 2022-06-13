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
// const magicResponses=[
// "It is certain", "It is decidedly so", 
// "Without a doubt", "Yes definitely",
// "You may rely on it", "As I see it yes",
//  "Most likely", "Outlook good","Yes", 
//  "Signs point to yes", "Reply hazy try again", 
//  "Ask again later","Better not tell you now", 
//  "Cannot predict now", "Concentrate and ask again",
//  "Don't count on it", "My reply is no",
//   "My sources say no","Outlook not so good",
//    "Very doubtful"]

// app.get("/magic", (req,res) => {
//     res.send("What's Your Question")
// })

// app.get("/magic:Question", (req,res) => {
//     const Question = req.params.Question
//     const magicAnswers= magicResponses[Math.floor(Math.random()* magicResponses.length)];
//     res.send(`<h1> ${Question} </h1>  
//       <p> ${magicAnswers} </p> `)
// })

  
//===================================Take one Down and Pass it Around

app.get("/", (req,res) => {
    res.send(`
    <h1> 99 Bottles of beer on the wall</h1>  
      <a href="/98"> take one down, pass it around </a>
            `)
})

app.get("/:number_of_bottles", (req,res) => {
    const number_of_bottles = req.params.number_of_bottles


    res.send(`<h2>${number_of_bottles} Bottles of beer on the wall</h2>
    <a href="/${number_of_bottles-1}"> take one down, pass it around </a> 
    <a href="/"> RESET </a>
    `)

    // if (number_of_bottles === 0){
    //     // console.log (`<h2>no more Bottles of beer on the wall</h2>`)
    // `  to pass around  `}
    
    
})
    
    // if (number_of_bottles == 0){
    //    returrn  ("All done")
    //     //<a href="/${number_of_bottles}"> to pass around </a> 
    // }

    // if (number_of_bottles === 0){
    //     `<a href="/${number_of_bottles}">pass it around </a> `}


    // let numberOfBottles= req.params.numberOfBottles
    // let i=99; i<100 ;i--;
    // console.log(i)
    // // const numberOfBottles= i-1
    //    res.send(` 
    //    <h1 id="allBottles"> ${i--} Bottles of Beer </h1> 
    //     <a href="/:${i}" id="currentBottles"> take one down, pass it around </a>)
    //     <a href="/"> RESET </a> `)
    //     console.log(numberOfBottles)
        // })



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})