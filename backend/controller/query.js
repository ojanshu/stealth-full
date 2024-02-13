//imports the schema for the data to be entered
const Query = require("../models/Query");

const {createCustomError} = require("../errors/custom-error")
const asyncWrapper = require("../middleware/async-wrapper")

//function used to get all the data entered
const getAllQueries =  asyncWrapper( async (req,res) => {
    const query = await Query.find({})
    res.status(200).json({query});
})

//function used to create new data
const createQuery = asyncWrapper(async (req,res) => {
    const query = await Query.create(req.body);
    res.status(201).json({query});
})

//fucntion to delete existing data using id
const deleteQuery =  asyncWrapper (async (req,res) => {

    const {id:QueryID} = req.params;
    const query = await Query.findOneAndDelete({_id:QueryID});
    if (!query){
        return next(createCustomError(`No task with this id: ${QueryID}`,404))
    }
    res.status(200).json({query});

})

//exporting all the functions to route to handle http requests
module.exports = {getAllQueries, 
    createQuery, 
    deleteQuery};