import mongoose from "mongoose";

export async function initMongoConnect() {
  await mongoose
    .connect("mongodb://localhost:27017/articles_bd")
    .then(() => {
      console.log("Data Base connected success!!");
    })
    .catch(() => {
      console.log("There has been an error connecting to the database");
    });
}
