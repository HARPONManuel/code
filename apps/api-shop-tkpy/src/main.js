const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authJwt = require('./app/helpers/jwt');
const errorHandler = require('./app/helpers/error-handler');
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const mongoose = require('mongoose');
app.use(cors());
app.options('*', cors());
//middleware
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);
app.use(bodyParser.json({ limit: "2mb" }));

//Routes
const categoriesRoutes = require('./app/routes/categories');
const productsRoutes = require('./app/routes/products');
const usersRoutes = require('./app/routes/users');
const ordersRoutes = require('./app/routes/orders');


const api = '/api/v1';

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//app-taskmanager
const projectsRoutes = require('./app/routes/projects');
app.use(`${api}/projects`, projectsRoutes);

//Database
mongoose
    .connect('mongodb+srv://admReact-TKPY:azerty@stockmarket.gyh7p.mongodb.net/stockMarket?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('we are using ' + process.env.DB_NAME);
        console.log('Database Connection is ready...');
    })
    .catch((err) => {
        console.log(err);
    });
const PORT = 3000;
//Server
app.listen(PORT, () => {
    console.log('server is running http://localhost:3000');
});
