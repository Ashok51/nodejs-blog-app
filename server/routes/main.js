const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  const locals = {
    title: "My first nodejs project",
    description: "Siple Nodejs app using express and mongodb."
  }

  res.render("index", { locals });
});

router.get('/about', (req, res) => {
  res.render("about");
});

// Export the router
module.exports = router;
