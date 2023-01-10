const express = require("express")
const cors = require("cors")
const path = require("path")
var serveIndex = require("serve-index")
const app = express()

app.use(cors())
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "..", "client", "build"))
// })
// app.use(express.static(path.join(__dirname, "..", "client", "build")))
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" })
})

app.use("/", express.static("../client/build"))
// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "../client/build")))

// Handles any requests that don't match the ones above

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from Express!" })
// })

const port = process.env.PORT || 3001
app.listen(port)

console.log("App is listening on port " + port)
