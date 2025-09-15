const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ak.html'));
});

// Serve Proposal page
app.get('/proposal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'proposal.html'));
});

// Handle "Ask Me Anything" form
app.post('/ask', (req, res) => {
    const { question } = req.body;
    if(!question) return res.status(400).send("Question is required");

    // Save to file
    fs.appendFile('submissions.txt', `Question: ${question}\n\n`, err => {
        if(err) console.error(err);
    });

    res.send("Your question has been submitted. Thank you!");
});

// Handle Work/Business Proposal form
app.post('/proposal-form', (req, res) => {
    const { name, email, description } = req.body;
    if(!name || !email || !description) return res.status(400).send("All fields are required");

    fs.appendFile('proposals.txt', `Name: ${name}\nEmail: ${email}\nDescription: ${description}\n\n`, err => {
        if(err) console.error(err);
    });

    res.send("Your proposal has been submitted. Thank you!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
