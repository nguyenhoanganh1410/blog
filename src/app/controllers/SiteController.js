const Course = require("../../model/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const {handleError} = require("mongoose")
class SiteController {
  // [get] /
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // [get] /search
  search(req, res) {
    res.render("search");
  }

  // [post]
  //create a new course
  create(req, res, next) {
    const course = req.body;
    course.image = `https://img.youtube.com/vi/${course.videoId}/0.jpg`;

    const courseObject = new Course(course);

    
    courseObject
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {});
  }
}

module.exports = new SiteController();
