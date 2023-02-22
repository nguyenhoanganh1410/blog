const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require('method-override')
const route = require('./routers')

const db = require('./config/db');

const app = express();
const port = 3000;


//connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended:true
}));


app.use(express.json());

app.use(morgan("combined"));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))


//handlebars
const hbs = handlebars.create({ 
  defaultLayout: "main",
  helpers: {
    sum(a,b) { return a+b; },
   
  }

});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'resources', 'views'));


//route init
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
