const express = require("express");
const app = express();

const add = (n1, n2) => {
  return n1 + n2;
};

app.get("/add", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }

    const result = add(n1, n2);
    res.status(200).json({ statusCode: 200, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, msg: error.toString() });
  }
});
app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

const port = 3040;
app.listen(port, () => {
  console.log("hello i'm listening to port" + port);
});