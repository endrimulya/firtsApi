const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});


app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully',
        data: data
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
