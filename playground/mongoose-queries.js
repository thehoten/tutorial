const {mongoose}=require('../db/mongoose');
const {Todo}=require('../models/Todo');
const {ObjectID}=require('mongodb');

const {User}=require('../models/user');


// const id='5c0944123701030e2dbd323911';

// Todo.find({_id:id}).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({_id:id}).then((todo)=>{
//   console.log('Todo',todo);
// });

// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }
//
// Todo.findById(id).then((todo)=>{
//
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=>console.log(e));
