var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

var {Todo}=require('../models/Todo');
var {mongoose}=require('../db/mongoose');



router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost:27017/tuts',{ useNewUrlParser: true });
  // var User=require('../models/users');
  // var user=new User({
  //   email:'michaelhutton01@hotmail.com'
  // });
  // console.log(user);
  // user.save().then((doc)=>{
  //   console.log('User saved',doc);
  // },(e)=>{
  //   console.log('Unable to save user',e);
  // });
  res.render('index', { title: 'Express' });

});

router.post('/todos',(req,res)=>{
  var todo=new Todo({text:req.body.text});
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
  console.log(req.body);
});


//heyA
router.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    console.log(todos);
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
});

router.get('/todos/:id',(req,res)=>{
  var id=req.params.id;

  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }


  Todo.findById(id).then((todo)=>{

     if(!todo){
       return res.status(404).send();
     }

     res.send({todo});

   }).catch((e)=>{
     res.status(400).send();
   });


});

function exit(){
  mongoose.disconnect();
}

module.exports = router;
