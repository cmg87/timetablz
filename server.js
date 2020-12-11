const express = require('express');
const app = express();
const routes = require('./controller/controller');
const PORT = 8080
//use routes set in controller for API
app.use(routes);

//start our server to listen on port xxxx
app.listen(PORT, ()=> console.log(`App running on port ${PORT}`))



