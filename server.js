var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');

var app = express();

require("./jobs-service.js")(jobsData,app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));



app.get('*', function (req, res) {
    res.render('index');
});

//jobsData.connectDB('mongodb://localhost/jobfinder');

jobsData.connectDB('mongodb://ggulay:bfadmin1@ds035533.mongolab.com:35533/jobfinder')
    .then(function () {
            console.log('connected to mongo db successfully!');
            jobsData.seedJobs()
        });

app.listen(process.env.PORT || 5000);

