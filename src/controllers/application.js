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
  View: (req, res) => {
    const application = Application.findById(req.params.id);
    res
      .render("/:id", {
        application: application,
      })
      .populate("user")
      .populate("company")
      .populate("website")
      .populate("result")
      .populate("comments")
      .populate("timestamps");
  },
  Update: (req, res) => {
    const application = Application.findById(req.params.id);
    application.company = req.body.company;
    application.website = req.body.website;
    application.result = req.body.result;
    application.comments = req.body.comments;
    application.save((err) => {
      if (err) {
        throw err;
      }
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
