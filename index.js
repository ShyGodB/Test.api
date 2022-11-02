const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./app'));
const port = 8090;
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});