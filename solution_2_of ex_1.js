const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);  // Pascal - class not an object

async function getCourses() {

    const courses = await Course
     .find( { isPublished: true, tags: 'backend'})
    .sort({ name: 1})
    .select({ name: 1, author: 1})
    console.log(courses);
}

getCourses();

