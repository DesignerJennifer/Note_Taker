var db = require("../db/db.json")
var fs = require("fs")
var id = 1
function apiRoutes(app) {
    app.get("/api/notes", function (req, res) {
        res.json(db)
    })
    app.post("/api/notes", function (req, res) {
        req.body.id= id++
        db.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) {
                console.log(err)

          }
        })
        res.json(db)
    })
    app.delete("/api/notes/:id", function (req, res) {
         var id = req.params.id
        var myObject = { 'id': id };
        db.splice(db.indexOf(myObject), 1);
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) {
                console.log(err)

            }
        })
        res.json(db)
    })
}
module.exports = apiRoutes
