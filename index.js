require("dotenv").config();
const express = require("express");
const app = express();
const BaseRoutes = require('./API/Routes/BaseRoutes');
const BodyParser = require('body-parser');
const Routes = BaseRoutes.Routes;
const port = process.env.PORT;

app.use(express.json());
app.use(BodyParser.urlencoded({extended: true}));
Routes(app);
app.listen(port, ()=>{
    console.log(`Server running, listent to port: ${port}`);
})
