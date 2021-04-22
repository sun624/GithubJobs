//packages

const express = require("express");

//internal code
const { getJobs } = require("./Services");

const server = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

// const jobs = [
//   { title: "Director", salary: "100" },
//   { title: "SDE", salary: "100" },
// ];

//GET /jobs
server.get("/jobs", async (req, res) => {
  const { tech } = req.query;

  //validation
  if (tech === undefined) {
    res.status(400).send({ error: "need tech parameter" });
  } else {
    const jobs = await getJobs(tech);
    res.send(jobs);
  }
});

//GET /
server.get("/", (req, res) => {
  console.log("home route");
  res.send(`<p>bingo</p>`);
});
