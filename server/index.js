const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" })
})

app.use("/", express.static("build"))

const port = process.env.PORT || 3001
app.listen(port)

console.log("App is listening on port " + port)
