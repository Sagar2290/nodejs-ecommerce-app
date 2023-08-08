exports.get404Page = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", {
    path: "",
    pageTitle: "Page Not Found",
  });
};

exports.get500Page = (req, res, next) => {
  res.status(500).render("500", {
    path: "/500",
    pageTitle: "Page Not Found",
  });
};
