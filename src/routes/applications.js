const express = require("express");
const router = express.Router();

const ApplicationsController = require("../controllers/applications");

router.get("/", ApplicationsController.Index);
router.post("/", ApplicationsController.Create);
router.get("/new", ApplicationsController.New);
router.get("/:id", ApplicationsController.View);
router.post("/:id", ApplicationsController.Update);
router.post("/delete/:id", ApplicationsController.Delete);

module.exports = router;
