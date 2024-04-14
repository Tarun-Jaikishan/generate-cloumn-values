const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  try {
    const { data } = req.body;

    const result = [];

    data.split(",").forEach((item) => {
      let value = item.split(":");
      result.push({ header: value[1], accessor: value[0] });
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000);
