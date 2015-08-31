describe('Post Jobs', function() {

    var postRequestJob,jobs;
    var newJob = {title: 'test title', description:'test description'};

    beforeEach(module('app'));



    beforeEach(inject(function(_$httpBackend_,_jobs_ ){

        backend = _$httpBackend_;
        jobs = _jobs_;

    }));

    it('should call /api/jobs with job data',(function(){
        backend.whenPOST('/api/jobs', function(data){
            postRequestJob = JSON.parse(data);
            expect(postRequestJob).to.not.be.empty;
            return true;
        }).respond(200);

        jobs.save(newJob);
        backend.flush();

    }));

});