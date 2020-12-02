const path = require('path');
const express = require('express');
const { env } = require('process');
const app = express();
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath));

app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000; 

app.listen(port, ()=>{
    console.log('Server is up and running on port 3000');
});