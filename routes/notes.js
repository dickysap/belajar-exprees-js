var express = require('express');
var router = express.Router();
const validator = require('fastest-validator');
const v = new validator();
const {Notes} = require("../models")

// router.get('/', function (req, res) {
//     res.send('Hallo Dicky from Notes.js haha')
// })
// router.get('/env', function (req, res) {
//     res.send(process.env.APP_NAME)
// })

//POST
router.post('/', async(req,res) => {
    // VALIDATION
    const schema = {
        title:"string",
        description: "string|optional"
    }
    const validate = v.validate(req.body, schema)
    if(validate.length){
        return res.status(400).json(validate);
    }

    // table proses
    const note = await Notes.create(req.body);
    res.json({
        status:200,
        message: "Success Create Data",
        data: note
    });
});

//get
router.get('/', async (req,res) => {
    const notes = await Notes.findAll();
    return res.json({status: 200, message: "Success get all data" , data: notes})

    //ge by id
});
router.get('/:id', async (req,res) => {
   const id = req.params.id;
   let note = await Notes.findByPk(id);
   if(!note){
    return res.status(404).json({ status: 404, message: "Data Not Found"});
   } else {
    return res.json({ status: 200, message: "Success Get Data", data: note});
   }
});


module.exports = router;