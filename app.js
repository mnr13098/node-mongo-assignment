const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/peopleDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Person Schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    mobile: String
});

const Person = mongoose.model('Person', personSchema);

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
// GET /person - List all people
app.get('/person', async (req, res) => {
    const people = await Person.find();
    res.render('index', { people });
});

// GET /person/new - Create form
app.get('/person/new', (req, res) => {
    res.render('new');
});

// POST /person - Create person
app.post('/person', async (req, res) => {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.redirect('/person');
});

// GET /person/:id/edit - Edit form
app.get('/person/:id/edit', async (req, res) => {
    const person = await Person.findById(req.params.id);
    res.render('edit', { person });
});

// PUT /person/:id - Update person
app.put('/person/:id', async (req, res) => {
    await Person.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/person');
});

// GET /person/:id/delete - Delete confirmation
app.get('/person/:id/delete', async (req, res) => {
    const person = await Person.findById(req.params.id);
    res.render('delete', { person });
});

// DELETE /person/:id - Delete person
app.delete('/person/:id', async (req, res) => {
    await Person.findByIdAndDelete(req.params.id);
    res.redirect('/person');
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});