const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require('./DB')



//database connection
db.on("error", () => {
    console.log("Connection error");
});

//routes
const taskRoute = require('./routes/taskRoute')

app.use('/api/tasks', taskRoute)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
const server = app.listen(PORT, () => {
    console.log(`live on port ${PORT}`)
})

module.exports = server;
