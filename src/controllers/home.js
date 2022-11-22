const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Welcome to Applied", layout: "login" });
  },
};

module.exports = HomeController;
