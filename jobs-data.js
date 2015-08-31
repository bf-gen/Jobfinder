var mongoose = require('mongoose');
var Promise = require("bluebird");

var Job = mongoose.model('Job');

var findJobs = function (query){
    return Promise.cast(Job.find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

//exports

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob;



exports.seedJobs = function () {
    return findJobs({}).then(function (collection) {
        if (collection.length === 0) {
            return Promise.map(jobs, function (job) {
                return createJob(job);
            });
        }
    });
};

var jobs = [
    {title: 'Sales Person', description: 'you will fight dragons'},
    {title: 'Accountant', description: 'you will use keyboard'},
    {title: 'Swordsman', description: 'carry sword'},
    {title: 'Assasin', description: 'silent kill'}
];