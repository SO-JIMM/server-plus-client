const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

// app.use(express.static(path.join(__dirname, "public")))

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "client/build")))

// Handles any requests that don't match the ones above
// app.get("*", (req, res) => {
// res.sendFile(path.join(__dirname + "/client/build/index.html"))
// })

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" })
})

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"))
// })
const port = process.env.PORT || 3001
app.listen(port)

console.log("App is listening on port " + port)
