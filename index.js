const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// const app = require('express')()

app.use(bodyParser.json());

let members = [];

app.get("/", function(req, res) {
  res.status(200).json({
    success: true,
    count: members.length,
    members: members
  });
});

app.post("/", function(req, res) {
  const name = req.body.name;
  const regnum = req.body.registration_number;
  const domain = req.body.domain;

  createMember(name, regnum, domain);
  res.status(201).json({ success: true, message: "Member added!" });
});

/*
GET -> Read
POST -> Create
PUT -> Update
DELETE -> Delete

CRUD -> Create Read Update Delete

*/

function createMember(name, registration_number, domain) {
  const member = {
    name: name,
    registration_number: registration_number,
    domain: domain
  };

  members.push(member);
}

app.listen(3001);
