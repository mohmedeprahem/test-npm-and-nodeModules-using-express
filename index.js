/*const _ = require('underscore')
let x = _.contains([1,2,3] , 1);
console.log(x);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/
/*const Joi = require('joi');
const log = require('./logger')
const express = new require('express');
const app = express();
app.use(express.json());
app.use(log);
const courses =[
    {id : 1 , name : 'course1'},
    {id : 2 , name : 'course2'},
    {id : 3 , name : 'course3'}
]
app.get('/' , (req , res) => {
    res.send('Hello World');
});
app.get('/api/courses' , (req , res) => {
    res.send(courses);
});

app.post('/api/courses' , (req, res) => {
    const result = validateCourse(req.body)
    const { error } = result;
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id' , (req , res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send('course not found');
    res.send(course);
});
app.put( '/api/courses/:id', (req ,res) => {
    //find the ID of course
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send('course not found');

    //vaidate input
    
    const result = validateCourse(req.body)
    const { error } = result;
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    //update course
    course.name = req.body.name;
    //return the update
    res.send(course);
});
app.delete('/api/courses/:id' , (req, res) => {
    //find course ID
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //if not found
    if(!course) return res.status(404).send('request not found')
    //delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //return update of course
    res.status(200).send(courses);
})

const port = process.env.PORT  || 3000
app.listen( port, () => console.log(`listing on port ${port} connecting .....`))

function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}*/
/*console.log(`Before`);
gatUser(1, (user) => {
    console.log(`user` , user);
},(username) => {
    console.log(`username` ,username) 
});
console.log(`After`);
function gatUser(id, callback, gatRepositories){
    setTimeout(() => {
        console.log(`Reading a user from a database...`);
        callback({ id: id, gitHubUsername: 'mosh'});
        gatRepositories([`repo1`, `repo2`, `repo3`])
    }, 2000);
}*/
console.log(`Before`);
gatUser(1, gatRepositories)

function gatRepositories(user){
    displayRepositories(user.gitHubUsername, gatCommits);
};
function gatCommits(repos){
    displayCommits(repos)
};
function displayCommits(commits){
    console.log(commits);
};
console.log(`After`);
function gatUser(id, callback){
    setTimeout(() => {
        console.log(`Reading a user from a database...`);
        callback({ id: id, gitHubUsername: 'mohamed'});
    }, 2000);
};
function displayRepositories(username, callback) {
    setTimeout(() => {
        console.log(`Reading Repositories from a database...`);
        callback([`repo1`, `repo2` ,`repo3`])
    })
};
