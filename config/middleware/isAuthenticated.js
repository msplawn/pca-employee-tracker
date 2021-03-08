// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = (req, res, next) => {
  // If the user is logged in, continue with the request to the member's html page
  console.log("isAuthenticated");
  if (req.user) {
    console.log(req.user);
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/login");
};
