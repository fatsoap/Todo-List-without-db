const express = require("express");
const {
  addTodo,
  updateTodo,
  deleteTodo,
  initDatabase,
  getTodo,
} = require("./db");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let toto_list = getTodo();
  toto_list = toto_list.filter((t) => t !== ""); // filter empty string
  res.render("index", { data: toto_list });
});

app.post("/", (req, res) => {
  const data = req.body;
  if (data.add_todo !== "") {
    // add todo
    addTodo(data.add_todo);
  } else if (data.update_id !== "") {
    // update todo
    updateTodo(data.update_id, data.update_todo);
  } else if (data.delete_id !== "") {
    // delete todo
    deleteTodo(data.delete_id);
  }
  res.redirect("/");
});

initDatabase();

app.listen(8080, () => console.log("Server running in port 8080 ... "));
