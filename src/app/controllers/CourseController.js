 const Course = require("../../model/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [get] /courses
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     res.status(500).json({ error: "message" });
    //   }
    // });

    //promise
    Course.find({})
      .then((courses) => res.json(courses))
      .catch(next);
  }

  //[get] /course/:slag
  showDetail(req, res, next) {
    //get slag

    //promise
    Course.findOne({ slug: req.params["slug"] })
      .then((course) =>
        res.render("course/course-detail", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //[get] /course/create-course
  show(req, res, next) {
    return res.render("course/create-course");
  }

  //[get] /course/:id/edit
  update(req, res, next) {
    Course.findOne({ _id: req.params.id })
      .then((course) =>
        res.render("course/update-course", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //[put] /course/:id
  updatePut(req, res, next) {
    console.log(req.params.id);
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[delete] /course/:id
  delete(req, res, next) {
    console.log(req.params.id);
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[put] /course/:id/restore
  restore(req, res, next) {
    console.log(req.params.id);
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[POST] /course/handle-form
  //xoa nhieu item
  deleteMany(req, res, next) {
    Course.delete({ _id: { $in: req.body.selectedItem } })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
