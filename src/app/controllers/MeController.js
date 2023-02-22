const Course = require("../../model/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [get] /stored/courses
  //lay ra danh sach course co deleted : false
  //lay ra so luong course da deleted soft
  //method find : mongoose-delete ghi de cac phuong thuc mongoose
  index(req, res, next) {
    Promise.all([Course.countDocumentsDeleted(), Course.find({})])
      .then(([count, courses]) => {
        res.render("course/stored-courses", {
          courses: mutipleMongooseToObject(courses),
          count,
        });
      })
      .catch(next);

    // Course.countDocumentsDeleted().then((count) => {});

    // Course.find({})
    //   .then((courses) =>
    //     res.render("course/stored-courses", {
    //       courses: mutipleMongooseToObject(courses),
    //     })
    //   )
    //   .catch(next);
  }

  // [get] /trash/courses
  //lay ra danh sach course da xoa (delete soft)
  //method findDeleted : mongoose-delete ghi de cac phuong thuc mongoose
  getCourseDeleted(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("course/trash-courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  //[delete] /trash/course/:id
  //xoa vinh vien 1 khoa hoc
  deleteForever(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then((courses) => res.render("course/trash-courses"))
      .catch(next);
  }
}

module.exports = new MeController();
