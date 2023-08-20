import express from "express"
import day from "./date.js"

const app = express()
const port = process.env.PORT || 3000

app.get("/", function (req, res) {
  let type = day
  let adv = "it's time to work hard"

  if ( day === "Saturday" || day === "Friday" ) {
    type = "The weekend"
    adv = "it's time to have some fun"
  }
  res.render("./pages/index.ejs", { dayType: type, advice: adv })
})


app.listen(port, function (err) {
  if (err) console.log(err)
  console.log(`Listening on port ${port}.`)
})
