var path = require("path")

function htmlroute(app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
}

module.exports = htmlroute