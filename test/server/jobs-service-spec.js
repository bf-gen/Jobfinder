var express = require('express');
var app = express();
var expect = require("chai").expect;
var request = require("supertest");
var Promise = require("bluebird");

var dataSavedJob;
var db = {
    findJobs: function () {
        return new Promise(function (resolve, reject) {
            resolve(["hi"]);
        });
    },

    saveJob: function (job) {
        dataSavedJob = job;
    }
};
var jobService = require("../../jobs-service")(db, app);

describe("get jobs", function () {

    it('should give me a json list of jobs', function (done) {
        request(app).get('/api/jobs')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                expect(res.body).to.be.a('Array');
                done();
            });
    });
});

describe("save jobs", function () {

    it('should validate that title  is greater than 4 characters');
    it('should validate that title is less than 40 characters');
    it('should validate that description is greater than 4 characters');
    it('should validate that description is less than 200 characters');


    it('should pass the job to the database save', function (done) {
        var newJob = {title: 'Swordsman', description: 'carry sword'};

        request(app).post('/api/jobs').send(newJob).end(function (err, res) {
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        });

    });
    it('should return a status of 200 to the front end if database saved');
    it('should return a job with an id');
    it('should return error if the database failed');

});