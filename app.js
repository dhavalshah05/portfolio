const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public/`));

app.get('/', (req, res) => {
    res.send(`Welcome to express : ${__dirname}`);
})

app.listen(3000, () => {
    console.log("App is up and running on port 3000");
})
