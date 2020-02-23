var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

var apiRoutes = require("./routes/apiroutes")
apiRoutes(app)

var htmlroute = require("./routes/htmlroute")
htmlroute(app)

app.listen(PORT, function () {
    console.log("app is listening on http://localhost:" + PORT)
})