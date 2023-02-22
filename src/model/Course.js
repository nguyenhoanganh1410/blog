// Using Node.js `require()`
const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, required: true },
    des: String,
    image: String,
    slug: { type: String, slug: "name" },
    videoId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//add plugin mongoo-delete soft
Course.plugin(mongoose_delete, {
  overrideMethods: 'all',
});

//add plugin slud-generator
mongoose.plugin(slug);

module.exports = mongoose.model("Course", Course);
