const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const students = [
  { id: 1, name: "sadam" },
  { id: 2, name: "haris" },
  { id: 3, name: "rehman" },
];

app.get("/", (req, res) => {
  res.write("Welcome");
  res.end();
});

app.get("/get", (req, res) => {
  res.send(students);
});

app.get("/get/:id", (req, res) => {
  let stu = students.find((s) => s.id == parseInt(req.params.id));

  if (!stu) {
    res.status(404).send("404 Student not Found");
  } else {
    res.send(stu);
  }
});

app.post("/set", (req, res) => {
  const isValid = validate(req.body);

  if (isValid.error) {
    res.status(400).send(isValid.error.details[0].message);
    return;
  }

  const stu = {
    id: students.length + 1,
    name: req.body.name,
  };

  students.push(stu);

  res.send(stu);
});

app.post("/set/:id", (req, res) => {
  let stu = students.find((s) => s.id == parseInt(req.params.id));

  if (!stu) {
    res.status(404).send("Error Student not Found");
    return;
  }

  const isValid = validate(req.body);

  if (isValid.error) {
    res.status(400).send(isValid.error.details[0].message);
    return;
  }
  stu.name = req.body.name;

  res.send(stu);
});

app.delete("/delete/:id", (req, res) => {
  const stu = students.find((s) => s.id == parseInt(req.params.id));

  if (!stu) {
    res.status(404).send("Error Student not Found");
  }

  const index = students.indexOf(stu);
  students.splice(index, 1);

  res.send(stu);
});

function validate(stu) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const isValid = schema.validate(stu);

  return isValid;
}

const d = new Date();
let time = d.getMinutes() + ":" + (d.getHours() - 12);

var port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`\nlistening to Port:${port} at Time:${time}`)
);
