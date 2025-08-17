const router = require("express").Router();

const {
  getCertificate,
  showProjects,
  sendMail,
} = require("../controllers/publicController");

router.get("/certificate", getCertificate);
router.get("/projects", showProjects);
router.post("/contact", sendMail);

module.exports = router;
