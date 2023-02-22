const newsRouter = require('./News');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me/StoredCourses');
function route(app){
    //  app.get("/", (req, res) => {
    //     console.log(req.query.ref);
    //     res.render("home");
    //   });
      
      
    //   app.get("/search", (req, res) => {
    //     res.render("search");
    //   });
      
    //   app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.render("search");
    //   });

      app.use('/news', newsRouter);
      app.use('/courses', courseRouter);
      app.use('/me', meRouter);
      app.use('/', siteRouter);
}

module.exports = route;