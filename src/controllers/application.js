const Application = require("../models/application");
const fs = require("fs");
const path = require("path");

const ApplicationsController = {
  Index: (req, res) => {
    let session = req.session.user;
    Application.find((err, applications) => {
      if (err) {
        throw err;
      }
      res.render("applications/index", {
        applications: applications,
        user: session,
      });
    })
      .populate("user")
      .populate("company")
      .populate("website")
      .populate("result")
      .populate("comments")
      .populate("timestamps");
  },
  New: (req, res) => {
    let session = req.session.user;
    res.render("applications/new", { user: session });
  },
  Create: (req, res) => {
    let session = req.session.user;
    const application = new Application(req.body);
    application.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect(req.get("referer"));
    });
  },
  Delete: (req, res) => {
    const applicationID = req.params.id;
    Application.findByIdAndDelete(id, (err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect(req.get("referer"));
    });
  },
};

module.exports = ApplicationsController;
