import * as express from "express";

const router = express.Router();

let users = []

router.get("/", function (req, res, next) {
  res.send(users);
});


module.exports = router;
