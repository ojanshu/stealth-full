//imports express and uses one of its module (Router)
const express = require("express")
const router = express.Router();

//imports all the functions to handle data from controllers
const {getAllQueries, 
    createQuery,
    deleteQuery} = require("../controller/query")

//it handles all https requests for the functions
router.route("/").get(getAllQueries).post(createQuery);
router.route("/:id").delete(deleteQuery);

module.exports = router