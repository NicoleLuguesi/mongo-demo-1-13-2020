const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nick:Rhino9494@cluster0-sotit.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB !!!!!!..........'))
.catch(err => console.error('Could not CONNECT to MongoDB', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean, 
    price: Number
});

const Course =  mongoose.model('Course', courseSchema); // Pascal = Course is Class - Camel case = course is Object

async function getCourses(){

    return await Course
    .find( { isPublished: true, tags: 'backend'})
    .sort({ name: -1})
    .select({ name: 1, author: 1})
   
}

async function run() {
    const courses = await getCourses();
    console.log(courses)
}

run();

// Solution 1
