var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (request, response) => {
    response.redirect(`http://fileverification.theshaheenbuilders.com/OTPVerification.php?Id=${request.query.Id}`);
    int a;
    //add tnhis
    //OTPVerification.php?Id=${request.query.Id}
});

app.listen(port, () => {
    console.log("Server is running on port: ." + port)
})