const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "build")))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

const port = process.env.PORT || 3001
app.listen(port)

console.log("App is listening on port " + port)
