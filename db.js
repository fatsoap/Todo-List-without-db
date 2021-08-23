const fs = require("fs");
const file_path = "./db.txt";

module.exports.initDatabase = () => {
  try {
    fs.writeFileSync(file_path, "", { flag: "wx" });
    console.log("Init Database Success");
  } catch (err) {
    console.log("Database file exist");
  }
};

module.exports.getTodo = (content) => {
  try {
    let data = fs.readFileSync(file_path, "utf-8");
    return data.split("\n");
  } catch (err) {
    console.log(err);
  }
};

module.exports.addTodo = (content) => {
  try {
    fs.appendFileSync(file_path, `${content}\n`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateTodo = (id, text) => {
  try {
    let data = fs.readFileSync(file_path, "utf-8");
    let rows = data.split("\n");
    if (-1 < id && id < rows.length) {
      rows[id] = text;
    }
    data = rows.join("\n");
    fs.writeFileSync(file_path, data, { encoding: "utf-8" });
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteTodo = (id) => {
  try {
    let data = fs.readFileSync(file_path, "utf-8");
    let rows = data.split("\n");
    if (-1 < id && id < rows.length) {
      rows.splice(id, 1);
    }
    data = rows.join("\n");
    fs.writeFileSync(file_path, data, { encoding: "utf-8" });
  } catch (err) {
    console.log(err);
  }
};
