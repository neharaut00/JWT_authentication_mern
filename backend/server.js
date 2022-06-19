const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//if we don't add below lines we can not see req.body in postman request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! Whenever /api/goals is called, it will search for /routes/goalRoutes

//*Routes folder keeps all the routes i.e. get, post, put, delete for example router.get('/',getGoals)
//*Controller folder keep all the functions for the routes i.e. getGoals, setGoal, updateGoal, deleteGoal
//*Middleware folder keep all the middlewares i.e. errorMiddleware
//*Middleware are functions that are called before the route is called or we can say in request response cycle
//*config folder keep all the configuration files i.e. db.js
//*models folder keep all the models i.e. goalModel.js

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));
