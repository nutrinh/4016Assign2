const express = require('express');
const app = express();
const port = 8080;


app.use(express.json());

// Assignment 2: A GET request for the ConfigMap value
const configValue = process.env.CONFIG_VALUE;
app.get('/configValue', (req, res) => {
  res.send(configValue);
});

// Assignment 2: A GET request for the Secret value
const secretValue = process.env.SECRET_VALUE;
app.get('/secretValue', (req, res) => {
  res.send(secretValue);
});

// Assignment 2: A GET request for an environment value
const envValue = process.env.ENV_VALUE;
app.get('/envValue', (req, res) => {
  res.send(envValue);
});




app.post('/hello', (req, res) => { 
    res.send(`Hello ${req.body.name}!`);

});

app.get('/kill', (req, res) => {

    res.send('Server shutting down');

    server.close(() => {
    console.log('Server has been shut down.');
    });
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
