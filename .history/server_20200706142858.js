const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const connectDbB = require('./config/db');

require('dotenv').config();
//Connect database
connectDbB();

const app = express();
const port = process.env.PORT || 5000;
app.get('/',(req,res) => res.send('API running'));
app.use(cors());
app.use(express.json({extended: false}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const canteensRouter = require('./routes/api/canteens');
const usersRouter = require('./routes/api/users');
app.use('/canteens', canteensRouter);
app.use('/users', usersRouter);
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

const canteensRouter = require('./routes/api/canteens');
//const usersRouter = require('./routes/api/users');

app.use('/canteens', canteensRouter);
//app.use('/users', usersRouter);

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});